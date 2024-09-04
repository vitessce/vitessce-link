import React, { useState } from "react";
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
	serverError,
	setServerError,
	setUrl,
	setLinkIdInput,
}) => {
	const [datasetUrls, setDatasetUrls] = useState("");
	const [generateConfigError, setGenerateConfigError] = useState(null);
	const [studyId, setStudyId] = useState(null);
	const [linkId, setLinkId] = useState(null);
	const [error, setError] = useState(null);

	const linkIdUrl = studyId ? `${LINK_ID_ENDPOINT_URL}${studyId}` : null;
	const showReset = Boolean(datasetUrls)

	function handleGetLinkId(studyId) {
		setStudyId(studyId);
	}

	useSWR(linkIdUrl, studyIdFetcher, {
		onError: (err) => {
			setServerError(err.message);
		},
		onSuccess: (data) => {
			if (data && data[LINK_ID_KEY]) {
				setLinkId(data[LINK_ID_KEY]);
			}
			setServerError(null)
		},
	});

	
	function handleInputError(errMessage) {
		setError(errMessage);
	}

	async function handleLaunch() {
		if (datasetUrls === "") {
			setError(ERROR_MESSAGES.NO_DATASET_URL_ERROR);
			return;
		}
		if (error || generateConfigError) return;

		if (linkId && String(linkId).length === LINK_ID_LENGTH) {
			const nextConfig = pendingJson;
			const [valid, failureReason] = validateConfig(nextConfig);
			if (!valid) {
				setError(failureReason);
				return;
			}
			const nextUrl = `data:,${encodeURIComponent(nextConfig)}`;
			setUrl(nextUrl);
			setLinkIdInput(linkId);
		} else {
			setError(ERROR_MESSAGES.INVALID_STUDY_ID);
		}
	}

	function handleConfigGeneration(url) {
		setDatasetUrls(() => url);
		setGenerateConfigError(() => null);
		setError(() => null);
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
		setPendingJson(() => baseJson);
		setDatasetUrls(() => "");
	}

	return (
		<main className={styles.viewConfigEditorMain}>
			<div className={styles.mainContainer}>
				<div>
					<ErrorDiv errorMessage={error ?? generateConfigError ?? serverError} />
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
