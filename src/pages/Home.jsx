import useSWR from "swr";
import { useState, useEffect } from "react";
import { useHashParam, useSetHashParams } from "../utils/use-hash-param.js";
import { baseJson } from "../utils/config-examples.js";
import { ConfigEditor } from "./../components/ConfigEditor";
import { QueryParamProvider } from "use-query-params";
import { fetcher } from "./../utils/utility-functions.js";
import { LoadingOverlay } from "./../components/loadingOverlay";
import { ERROR_MESSAGES } from "../utils/constants.js";

function IndexWithHashParams() {
	const setHashParams = useSetHashParams();
	const [url] = useHashParam("url", undefined, "string");
	const [edit] = useHashParam("edit", false, "boolean");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [validConfig, setValidConfig] = useState(null);
	const [pendingJson, setPendingJson] = useState(baseJson);
	const [linkId, setLinkId] = useState(null);

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
					data.layout[linkControllerIndex].props.linkID = linkId;
					const nextUrl = `data:,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
					setUrlFromEditor(nextUrl);
					setValidConfig(data);
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
			setValidConfig(null);
			setPendingJson(baseJson);
		}
	}, [edit, url, setError, linkId]);

	function setUrlFromEditor(nextUrl) {
		setHashParams({
			dataset: undefined,
			url: nextUrl,
			edit: false,
		});
	}

	if (edit) {
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

	if (validConfig) {
		return (
			<div>
				<p>Vitessce Placeholder</p>
			</div>
		);
	}

	if (loading || isValidating) {
		return <LoadingOverlay />;
	}

	return <p>Error in configuration</p>;
}

export default function Home() {
	return (
		<QueryParamProvider>
			<IndexWithHashParams />
		</QueryParamProvider>
	);
}
