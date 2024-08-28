/* eslint-disable no-nested-ternary */
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import useSWR from 'swr';
import { generateConfig, getHintOptions } from "vitessce";

import { StudyIdInput } from "../StudyIdInput";
import { baseJson } from "../../utils/config-examples.js";
import { ErrorDiv } from "../ErrorDiv";

import styles from "./ConfigEditor.module.css";

import {
	ERROR_MESSAGES,
	EXAMPLE_URL,
	LINK_ID_ENDPOINT_URL,
	LINK_ID_LENGTH,
	LINK_ID_KEY,
} from "../../utils/constants.js";
import { validateConfig, sanitizeURLs, studyIdFetcher} from "../../utils/utility-functions.js";

export const ConfigEditor = ({
	pendingJson,
	setPendingJson,
	error,
	setError,
	setLoading,
	setUrl,
	setLinkIdInput,
}) => {
	const [pendingUrl, setPendingUrl] = useState("");
	const [datasetUrls, setDatasetUrls] = useState("");
	const [pendingFileContents, setPendingFileContents] = useState(null);
	const [generateConfigError, setGenerateConfigError] = useState(null);
	const [inputURL, setInputURL] = useState("");
	const [studyId, setStudyId] = useState(null);
	const [linkId, setLinkId] = useState(null);
	const [linkIdUrl, setLinkIdUrl] = useState(null);
	const [showReset, setShowReset] = useState(null);
	const [loadFrom, setLoadFrom] = useState("editor");

	function handleGetLinkId(studyId) {
		setStudyId(studyId)
	}

	useSWR(linkIdUrl, studyIdFetcher, {
		onError: (err) => {
			setError(err.message);
			setLoading(false);
		},
		onSuccess: (data) => {
			console.log(data, data[LINK_ID_KEY])
			if (data && data[LINK_ID_KEY]) {
				setLinkId(data[LINK_ID_KEY]);
			}
			setLoading(false);
		},
		shouldRetryOnError: false,
	});	

	useEffect(() => {
		if (studyId) {
			const constructedUrl = `${LINK_ID_ENDPOINT_URL}${studyId}`;
			setLinkIdUrl(constructedUrl);
		}
	}, [studyId]); 

	function handleInputError(errMessage) {
		setError(errMessage);
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
			setError(ERROR_MESSAGES.NO_DATASET_URL_ERROR);
			return;
		}
		if (error) return;

		if (linkId && linkId !== "" && linkId.length === LINK_ID_LENGTH) {
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
			setLinkIdInput(linkId);
		} else {
			setError(ERROR_MESSAGES.INVALID_STUDY_ID);
		}
	}

	async function handleConfigGeneration() {
		setDatasetUrls(EXAMPLE_URL);
		setShowReset(true);
		const sanitizedUrls = sanitizeURLs(EXAMPLE_URL);
		if (sanitizedUrls.length === 0) {
			return;
		}
		setGenerateConfigError(null);
		setError(null);
		try {
			const configJson = await generateConfig(sanitizedUrls, "Basic");
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
		const sanitizedUrls = sanitizeURLs(event.target.value);
		if (sanitizedUrls.length === 0) {
			if (datasetUrls === "") {
				setError(ERROR_MESSAGES.INCORRECT_URL_ERROR);
			} else {
				setError(null);
				setLoadFrom("editor");
			}
		} else setError(null);
	}

	function handleTextAreaURLChange(newDatasetUrls) {
		setDatasetUrls(newDatasetUrls);
		setInputURL(newDatasetUrls);
		const sanitizedUrls = sanitizeURLs(newDatasetUrls);
		if (sanitizedUrls.length === 0) {
			setError(ERROR_MESSAGES.INCORRECT_URL_ERROR);
			return;
		}
		try {
			// This gives an error if file type is incorrect - so keeping it
			getHintOptions(sanitizedUrls);
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
			setError(ERROR_MESSAGES.NO_DATASET_URL_ERROR);
		} else if (inputURL !== "" && sanitizeURLs(inputURL)?.length > 0) {
			setLoadFrom("url");
		}
		setShowReset(false);
	}

	return (
		<main className={styles.viewConfigEditorMain}>
			<div className={styles.mainContainer}>
				<div>
					<ErrorDiv errorMessage={error ?? generateConfigError} />
					<div className={styles.containerRow}>
						<StudyIdInput
							onInputError={handleInputError}
							onInputChange={handleGetLinkId}
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
};
