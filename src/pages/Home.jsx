import useSWR from "swr";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
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
			console.log(err, "test");
			setError(err.message);
			setLoading(false);
		},
		onSuccess: (data) => {
			if (data) {
				const linkControllerIndex = data.layout.findIndex(
					(comp) => comp.component === "linkController",
				);
				//TODO:  Need to add checks to config once settled
				if (linkControllerIndex > -1) {
					console.log(linkId);
					data.layout[linkControllerIndex].props.linkID = linkId;
					const nextUrl = `data:,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
					const vitessceLink = `https://vitessce.io/?url=${nextUrl}`;
					window.location.href = vitessceLink;
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
