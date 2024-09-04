import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { getHintOptions } from "vitessce";

import { StudyIdInput } from "../StudyIdInput";
import { baseJson, exampleConfig } from "../../utils/config-examples.js";
import { ErrorDiv } from "../ErrorDiv";

import styles from "./ConfigEditor.module.css";

import {
	ERROR_MESSAGES,
	EXAMPLE_URL,
	LINK_ID_ENDPOINT_URL,
	LINK_ID_LENGTH,
	LINK_ID_KEY,
} from "../../utils/constants.js";
import {
	validateConfig,
	sanitizeURLs,
	studyIdFetcher,
	updateConfigWithExampleURL,
} from "../../utils/utility-functions.js";

export const ConfigEditor = ({
	pendingJson,
	setPendingJson,
	error,
	setError,
	setLoading,
	setUrl,
	setLinkIdInput,
}) => {
	const [datasetUrls, setDatasetUrls] = useState("");
	const [generateConfigError, setGenerateConfigError] = useState(null);
	const [studyId, setStudyId] = useState(null);
	const [linkId, setLinkId] = useState(null);
	const [linkIdUrl, setLinkIdUrl] = useState(null);
	const [showReset, setShowReset] = useState(null);

	function handleGetLinkId(studyId) {
		setStudyId(studyId);
	}

	useSWR(linkIdUrl, studyIdFetcher, {
		onError: (err) => {
			setError(err.message);
			setLoading(false);
		},
		onSuccess: (data) => {
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

	async function handleLaunch() {
		if (datasetUrls === "") {
			setError(ERROR_MESSAGES.NO_DATASET_URL_ERROR);
			return;
		}
		if (error || generateConfigError) return;

		if (linkId && linkId !== "" && String(linkId).length === LINK_ID_LENGTH) {
			let nextUrl;
			const nextConfig = pendingJson;
			nextUrl = `data:,${encodeURIComponent(nextConfig)}`;
			const [valid, failureReason] = validateConfig(nextConfig);
			if (!valid) {
				setError(failureReason);
				return;
			}
			setUrl(nextUrl);
			setLinkIdInput(linkId);
		} else {
			setError(ERROR_MESSAGES.INVALID_STUDY_ID);
		}
	}

	function handleConfigGeneration(url) {
		setDatasetUrls(url);
		setShowReset(true);
		setGenerateConfigError(null);
		setError(null);
		const sanitizedUrls = sanitizeURLs(url);
		if (sanitizedUrls.length < 1) {
			setError(ERROR_MESSAGES.NO_DATASET_URL_ERROR);
			return;
		}
		if (sanitizedUrls.length > 1) {
			setError(ERROR_MESSAGES.DATASET_LIMIT_ERROR);
			return;
		}
		try {
			getHintOptions(sanitizedUrls);
			const configJson = updateConfigWithExampleURL(
				exampleConfig,
				sanitizedUrls,
			);
			setPendingJson(() => JSON.stringify(configJson, null, 2));
		} catch (e) {
			setGenerateConfigError(e.message);
			throw e;
		}
	}

	function resetEditor() {
		setPendingJson(baseJson);
		setDatasetUrls("");
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
							Enter the URL to a data file.
							<button
								className={styles.tryResetButtons}
								type="button"
								onClick={() => handleConfigGeneration(EXAMPLE_URL)}
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
							placeholder="One file URL"
							value={datasetUrls}
							onChange={(e) => handleConfigGeneration(e.target.value)}
						/>
					</div>
					<div className={styles.viewConfigGoDiv}>
						<button
							type="button"
							className={styles.viewConfigGo}
							onClick={handleLaunch}
						>
							Launch
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};
