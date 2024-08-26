/* eslint-disable no-nested-ternary */
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { generateConfig, getHintOptions } from "@vitessce/config";

// import LoadingOverlay from '../components/loadingOverlay.js';

import StudyIdInput from "./StudyIdInput.js";
import { baseJson } from "../utils/config-examples.js";
import ErrorDiv from "./ErrorDiv.js";

import styles from "./configEditor.module.css";

import {
	STUDY_ID_LENGTH,
	NO_DATASET_URL_ERROR,
	exampleURL,
	INCORRECT_URL_ERROR,
} from "../utils/constants.js";
import { validateConfig, sanitiseURLs } from "../utils/utility-functions.js";

export default function ViewConfigEditor(props) {
	const {
		pendingJson,
		setPendingJson,
		error,
		setError,
		// loading,
		setUrl,
		setStudyIdInput,
	} = props;

	const [pendingUrl, setPendingUrl] = useState("");
	const [datasetUrls, setDatasetUrls] = useState("");
	const [pendingFileContents, setPendingFileContents] = useState(null);
	const [generateConfigError, setGenerateConfigError] = useState(null);
	const [inputURL, setInputURL] = useState("");
	const [studyId, setStudyId] = useState(null);
	const [showReset, setShowReset] = useState(null);
	const [loadFrom, setLoadFrom] = useState("editor");

	function handleValidateStudyId(inputStudyId){
		if (inputStudyId === '') {
			setError('Study ID cannot be empty');
		  } else if (!/^\d+$/.test(inputStudyId)) {
			setError('Study ID must be numbers only');
		  } else if (inputStudyId.length < STUDY_ID_LENGTH || inputStudyId.length > STUDY_ID_LENGTH) {
			setError(`Study ID must be ${STUDY_ID_LENGTH} digits`);
		  } else {
			setStudyId(inputStudyId);
			setError(null);
		  }
		
	}

	const onDrop = useCallback(
		(acceptedFiles) => {
			if (acceptedFiles.length === 1) {
				const reader = new FileReader();
				reader.addEventListener("load", () => {
					const { result } = reader;
					setPendingFileContents(result);
					setLoadFrom("file");
					setError(null);
				});
				reader.readAsText(acceptedFiles[0]);
			}
		},
		[setError],
	);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		maxFiles: 1,
	});

	async function handleEditorGo() {
		if (
			(loadFrom === "file" && !pendingFileContents) ||
			(loadFrom === "url" && inputURL === "") ||
			(loadFrom === "editor" && datasetUrls === "")
		) {
			setError(NO_DATASET_URL_ERROR);
			return;
		}
		if (error) return;

		if (studyId && studyId !== "" && studyId.length === STUDY_ID_LENGTH) {
			let nextUrl;
			if (loadFrom === "editor") {
				const nextConfig = pendingJson;
				nextUrl = `data:,${encodeURIComponent(nextConfig)}`;
				const [valid, failureReason] = validateConfig(nextConfig);
				if (!valid) {
					setError(failureReason);
					return;
				}
			} else if (loadFrom === "url") {
				nextUrl = pendingUrl;
			} else if (loadFrom === "file") {
				nextUrl = `data:,${encodeURIComponent(pendingFileContents)}`;
			}
			setUrl(nextUrl);
			setStudyIdInput(studyId);
		} else {
			setError("Enter a valid Study Id");
		}
	}

	async function handleConfigGeneration() {
		setDatasetUrls(exampleURL);
		setShowReset(true);
		const sanitisedUrls = sanitiseURLs(exampleURL);
		if (sanitisedUrls.length === 0) {
			return;
		}
		setGenerateConfigError(null);
		setError(null);
		try {
			const configJson = await generateConfig(sanitisedUrls, "Basic");
			setPendingJson(() => JSON.stringify(configJson, null, 2));
			setLoadFrom("editor");
		} catch (e) {
			setGenerateConfigError(e.message);
			throw e;
		}
	}

	function handleUrlChange(event) {
		const url = event.target.value;
		setPendingUrl(url);
		setLoadFrom("url");
		setInputURL(url);
		const sanitisedUrls = sanitiseURLs(event.target.value);
		if (sanitisedUrls.length === 0) {
			if (datasetUrls === "") {
				setError(INCORRECT_URL_ERROR);
			} else {
				setError(null);
				setLoadFrom("editor");
			}
		} else setError(null);
	}

	function handleTextAreaURLChange(newDatasetUrls) {
		setDatasetUrls(newDatasetUrls);
		setInputURL(newDatasetUrls);
		const sanitisedUrls = sanitiseURLs(newDatasetUrls);
		if (sanitisedUrls.length === 0) {
			setError(INCORRECT_URL_ERROR);
			return;
		}
		try {
			// This gives an error if file type is incorrect - so keeping it
			getHintOptions(sanitisedUrls);
			setGenerateConfigError(null);
			setPendingJson(baseJson);
		} catch (e) {
			setGenerateConfigError(e.message);
		}
	}

	function resetEditor() {
		setPendingJson(baseJson);
		setDatasetUrls("");
		if (inputURL === "" && datasetUrls === "") {
			setError(NO_DATASET_URL_ERROR);
		} else if (inputURL !== "" && sanitiseURLs(inputURL)?.length > 0) {
			setLoadFrom("url");
		}
		setShowReset(false);
	}

	return (
		<main className={styles.viewConfigEditorMain}>
			<div className={styles.mainContainer}>
				<div>
					{error ? (
						<ErrorDiv errorMessage={error} />
					) : generateConfigError ? (
						<ErrorDiv errorMessage={generateConfigError} />
					) : null}
					<div className={styles.containerRow}>
						<StudyIdInput
							onValidateStudyId={handleValidateStudyId}
						/>
					</div>
					<div className={styles.containerRow}>
						<p className={styles.viewConfigInputUrlOrFileText}>
							Enter the URLs to one or more data files (semicolon-separated).
							<button
								className={styles.tryResetButtons}
								type="button"
								onClick={() => handleConfigGeneration()}
							>
								Try an example
							</button>
							{showReset && (
								<button
									className={styles.tryResetButtons}
									type="button"
									onClick={resetEditor}
								>
									Reset the editor
								</button>
							)}
						</p>
						<textarea
							type="text"
							className={styles.viewConfigUrlTextarea}
							placeholder="One or more file URLs (semicolon-separated)"
							value={datasetUrls}
							onChange={(e) => handleTextAreaURLChange(e.target.value)}
						/>
					</div>
					<div className={styles.containerRow}>
						<p className={styles.viewConfigInputUrlOrFileText}>
							Alternatively, provide a URL to a config file.
						</p>
						<div>
							<input
								type="text"
								className={styles.viewConfigUrlInput}
								placeholder="Enter a URL"
								value={pendingUrl}
								onChange={handleUrlChange}
							/>
						</div>
					</div>
					<div className={styles.containerRow}>
						<p className={styles.viewConfigInputUrlOrFileText}>
							Or drag & drop a file from your local machine
						</p>
						<div {...getRootProps()} className={styles.dropzone}>
							<input {...getInputProps()} />
							{isDragActive ? (
								<span>Drop the file here ...</span>
							) : pendingFileContents ? (
								<span>Successfully read the file.</span>
							) : (
								<span>Drop a file</span>
							)}
						</div>
					</div>
					<div className={styles.viewConfigGoDiv}>
						<button
							type="button"
							className={styles.viewConfigGo}
							onClick={handleEditorGo}
						>
							Load from {loadFrom}
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
