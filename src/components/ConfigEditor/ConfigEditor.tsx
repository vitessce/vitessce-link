import React, { useState } from "react";
import useSWR from "swr";
import { getHintOptions } from "vitessce";

import { StudyIdInput } from "../StudyIdInput/index.tsx";
import { baseJson, exampleConfigEditor } from "../../utils/config-examples.ts";
import { ErrorDiv } from "../ErrorDiv/index.tsx";

import styles from "./ConfigEditor.module.css";

import {
	ERROR_MESSAGES,
	EXAMPLE_URL,
	LINK_ID_ENDPOINT_URL,
	LINK_ID_LENGTH,
	LINK_ID_KEY,
} from "../../utils/constants.ts";
import {
	validateConfig,
	sanitizeURLs,
	studyIdFetcher,
	updateConfigWithExampleURL,
} from "../../utils/utility-functions.ts";


interface ConfigEditorProps {
	pendingJson: string;
	setPendingJson: (json: string) => void;
	serverError: string | null;
	setServerError: (error: string | null) => void;
	setUrl: (url: string) => void;
	setLinkIdInput: (linkId: string) => void;
}

export const ConfigEditor: React.FC<ConfigEditorProps>= ({
	pendingJson,
	setPendingJson,
	serverError,
	setServerError,
	setUrl,
	setLinkIdInput,
}) => {
	const [datasetUrls, setDatasetUrls] = useState<string>("");
	const [generateConfigError, setGenerateConfigError] = useState<string|null>(null);
	const [studyId, setStudyId] = useState<string|null>(null);
	const [linkId, setLinkId] = useState<string|null>(null);
	const [error, setError] = useState<string|null>(null);

	const linkIdUrl = studyId ? `${LINK_ID_ENDPOINT_URL}${studyId}` : null;
	const showReset = Boolean(datasetUrls);

	function handleGetLinkId(studyId:string) {
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
			setServerError(null);
		},
	});

	function handleInputError(errMessage:string|null) {
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

	function handleConfigGeneration(url:string) {
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
				exampleConfigEditor,
				sanitizedUrls,
			);
			setPendingJson(JSON.stringify(configJson, null, 2));
		} catch (e: any) {
			setGenerateConfigError(e.message);
			throw e;
		}
	}

	function resetEditor() {
		setPendingJson(JSON.stringify(baseJson, null, 2));
		setDatasetUrls("");
	}

	return (
		<main className={styles.viewConfigEditorMain}>
			<div className={styles.mainContainer}>
				<div>
					<ErrorDiv
						errorMessage={error ?? generateConfigError ?? serverError}
					/>
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
