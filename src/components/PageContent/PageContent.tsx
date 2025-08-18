import useSWR from "swr";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { baseJson } from "../../utils/config-examples";
import { fetcher } from "../../utils/utility-functions";
import { LoadingOverlay } from "../LoadingOverlay";
import { ERROR_MESSAGES, VITESSCE_LINK_SITE } from "../../utils/constants";
import { ErrorDiv } from "../ErrorDiv";
import useIsBrowser from "@docusaurus/useIsBrowser";

/* Docusaurus build does not work for server side code, so delaying that until in Browser, hence the changes */

const ConfigEditor = React.lazy(() =>
	import("../ConfigEditor").then((module) => ({
		default: module.ConfigEditor,
	})),
);

interface PageContentProps {
	linkID?: string;
	launchTeamId: string | null;
}

export const PageContent: React.FC<PageContentProps> = ({ launchTeamId }) => {
	const isBrowser = useIsBrowser();

	const [serverError, setServerError] = useState<string | null>(null);
	const [pendingJson, setPendingJson] = useState<string>(
		JSON.stringify(baseJson, null, 2),
	);
	const [linkId, setLinkId] = useState<string | null>(null);
	const [url, setUrl] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const {
		data: configData,
		isValidating,
		isLoading,
		error: swrError,
	} = useSWR<ConfigData | null>(url, fetcher);

	useEffect(() => {
		if (swrError) setServerError(swrError.message);
	}, [swrError]);

	// Redirect exactly once per valid config
	const hasNavigatedRef = useRef(false);

	useEffect(() => {
		if (!configData || hasNavigatedRef.current) return;

		const linkControllerIndex = configData?.layout?.findIndex(
			(comp) => comp.component === "linkController",
		);

		if (linkControllerIndex == null || linkControllerIndex < 0) {
			setError(ERROR_MESSAGES.INVALID_CONFIG);
			return;
		}

		try {
			// clone to avoid mutating SWR's cached object
			const cfg = JSON.parse(JSON.stringify(configData)) as ConfigData;

			// Skip adding LinkId for the Launch page to sync with Vitessce
			if (!launchTeamId) {
				if (!cfg.layout[linkControllerIndex].props) {
					cfg.layout[linkControllerIndex].props = {};
				}
				cfg.layout[linkControllerIndex].props.linkID = linkId || undefined;
			}

			const nextUrl = `data:,${encodeURIComponent(JSON.stringify(cfg, null, 2))}`;
			const vitessceLink = `${VITESSCE_LINK_SITE}${nextUrl}`;
			hasNavigatedRef.current = true;
			window.location.href = vitessceLink;
		} catch {
			setError(ERROR_MESSAGES.INVALID_CONFIG);
		}
	}, [configData, launchTeamId, linkId]);

	function setUrlFromEditor(nextUrl: string) {
		setUrl(nextUrl);
	}

	if (isLoading || isValidating) {
		return <LoadingOverlay isLoading={isLoading || isValidating} />;
	}

	return (
		<>
			{error && <ErrorDiv errorMessage={error} />}
			<Suspense fallback={<LoadingOverlay isLoading={true} />}>
				{isBrowser && (
					<ConfigEditor
						launchTeamId={launchTeamId}
						pendingJson={pendingJson}
						setPendingJson={setPendingJson}
						serverError={serverError}
						setServerError={setServerError}
						setUrl={setUrlFromEditor}
						setLinkIdInput={setLinkId}
					/>
				)}
			</Suspense>
		</>
	);
};
