import useSWR from "swr";
import { useState } from "react";
import { baseJson } from "../utils/config-examples.js";
import { ConfigEditor } from "./../components/ConfigEditor";
import { fetcher } from "./../utils/utility-functions.js";
import { LoadingOverlay } from "./../components/loadingOverlay";
import { ERROR_MESSAGES } from "../utils/constants.js";

export default function Home() {
	const [serverError, setServerError] = useState(null);
	const [pendingJson, setPendingJson] = useState(baseJson);
	const [linkId, setLinkId] = useState(null);
	const [url, setUrl] = useState(null);

	const { data: configData, isValidating , isLoading, error: swrError} = useSWR(url, fetcher)

	if(swrError) {
		setServerError(swrError.message)
	}
	if (configData) {
		const linkControllerIndex = configData?.layout.findIndex(
			(comp) => comp.component === "linkController",
		);
		if (linkControllerIndex > -1) {
			try {
				//console.log(linkId);
				//  Adding linkID here in case we want to allow other types of config generation (drop file, etc.)
				configData.layout[linkControllerIndex].props.linkID = linkId;
				const nextUrl = `data:,${encodeURIComponent(JSON.stringify(configData, null, 2))}`;
				// The following will change, either route to Eric's html file or add as component
				const vitessceLink = `https://beta-mr.vitessce.io/?url=${nextUrl}`;
				window.location.href = vitessceLink;
			} catch {
				setError(ERROR_MESSAGES.INVALID_CONFIG);
			}
		} else {
			setError(ERROR_MESSAGES.INVALID_CONFIG);
		}
	}

	function setUrlFromEditor(nextUrl) {
		setUrl(nextUrl);
	}

	if (isLoading || isValidating) {
		return <LoadingOverlay />;
	}

	return (
		<ConfigEditor
			pendingJson={pendingJson}
			setPendingJson={setPendingJson}
			serverError={serverError}
			setServerError={setServerError}
			setUrl={setUrlFromEditor}
			setLinkIdInput={setLinkId}
		/>
	);
}
