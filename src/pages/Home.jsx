import useSWR from "swr";
import { useState, useEffect } from "react";
import { baseJson } from "../utils/config-examples.js";
import { ConfigEditor } from "./../components/ConfigEditor";
import { fetcher } from "./../utils/utility-functions.js";
import { LoadingOverlay } from "./../components/loadingOverlay";
import { ERROR_MESSAGES } from "../utils/constants.js";

export default function Home() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [pendingJson, setPendingJson] = useState(baseJson);
	const [linkId, setLinkId] = useState(null);
	const [url, setUrl] = useState(null);

	const { isValidating } = useSWR(url, fetcher, {
		onError: (err) => {
			setError(err.message);
			setLoading(false);
		},
		onSuccess: (data) => {
			if (data) {
				console.log(data);
				const linkControllerIndex = data?.layout.findIndex(
					(comp) => comp.component === "linkController",
				);
				if (linkControllerIndex > -1) {
					try {
						console.log(linkId);
						//  Adding linkID here in case we want to allow other types of config generation (drop file, etc.)
						data.layout[linkControllerIndex].props.linkID = linkId;
						const nextUrl = `data:,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
						// The following will change, either route to Eric's html file or add as component
						const vitessceLink = `https://vitessce.io/?url=${nextUrl}`;
						window.location.href = vitessceLink;
					} catch {
						setError(ERROR_MESSAGES.INVALID_CONFIG);
					}
				} else {
					setError(ERROR_MESSAGES.INVALID_CONFIG);
				}
			}
			setLoading(false);
		},
	});

	useEffect(() => {
		if (url) {
			setLoading(true);
			setError(null);
		} else {
			setError(null);
			setLoading(false);
			setPendingJson(baseJson);
		}
	}, [url, setError, linkId]);

	function setUrlFromEditor(nextUrl) {
		setUrl(nextUrl);
	}

	if (loading || isValidating) {
		return <LoadingOverlay />;
	}

	return (
		<ConfigEditor
			pendingJson={pendingJson}
			setPendingJson={setPendingJson}
			error={error}
			setError={setError}
			setLoading={setLoading}
			setUrl={setUrlFromEditor}
			setLinkIdInput={setLinkId}
		/>
	);
}
