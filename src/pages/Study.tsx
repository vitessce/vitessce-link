import useSWR from "swr";
import { useState } from "react";
import { baseJson } from "../utils/config-examples.ts";
import { ConfigEditor } from "../components/ConfigEditor/index.tsx";
import { fetcher } from "../utils/utility-functions.ts";
import { LoadingOverlay } from "../components/LoadingOverlay/index.tsx";
import { ERROR_MESSAGES, VITESSCE_LINK_SITE } from "../utils/constants.ts";
import { ErrorDiv } from "../components/ErrorDiv/ErrorDiv.tsx";

interface ConfigData {
	layout: { component: string; props: { linkID?: string } }[];
  }
  
  export default function Study() {
	const [serverError, setServerError] = useState<string | null>(null);
	const [pendingJson, setPendingJson] = useState<string>(JSON.stringify(baseJson, null, 2));
	const [linkId, setLinkId] = useState<string | null>(null);
	const [url, setUrl] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
  
	const {
	  data: configData,
	  isValidating,
	  isLoading,
	  error: swrError,
	} = useSWR<ConfigData | null>(url, fetcher);

	if (swrError) {
		setServerError(swrError.message);
	}
	if (configData) {
		const linkControllerIndex = configData?.layout.findIndex(
			(comp) => comp.component === "linkController",
		);
		if (linkControllerIndex > -1) {
			try {
				configData.layout[linkControllerIndex].props.linkID = linkId || undefined;
				const nextUrl = `data:,${encodeURIComponent(JSON.stringify(configData, null, 2))}`;
				const vitessceLink = `${VITESSCE_LINK_SITE}${nextUrl}`;
				window.location.href = vitessceLink;
			} catch {
				setError(ERROR_MESSAGES.INVALID_CONFIG);
			}
		} else {
			setError(ERROR_MESSAGES.INVALID_CONFIG);
		}
	}

	function setUrlFromEditor(nextUrl:string) {
		setUrl(nextUrl);
	}

	if (isLoading || isValidating) {
		return <LoadingOverlay  isLoading={isLoading || isValidating}/>;
	}

	return (
		<>
		{error && <ErrorDiv errorMessage={error} />}
		<ConfigEditor
			pendingJson={pendingJson}
			setPendingJson={setPendingJson}
			serverError={serverError}
			setServerError={setServerError}
			setUrl={setUrlFromEditor}
			setLinkIdInput={setLinkId}
		/>
		</>
	);
}
