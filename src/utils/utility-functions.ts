import { upgradeAndParse } from "@vitessce/schemas";
import { ERROR_MESSAGES } from "./constants";
import { Config } from "./config-examples";

export const validateConfig = (
	nextConfig: string,
): [boolean, string | null] => {
	let upgradeSuccess: boolean;
	let failureReason: Config | any = null;
	try {
		failureReason = upgradeAndParse(JSON.parse(nextConfig));
		upgradeSuccess = true;
	} catch (e: any) {
		upgradeSuccess = false;
		failureReason = e.message;
		console.error(e);
	}
	return [upgradeSuccess, failureReason];
};

export const sanitizeURLs = (urls: string) => {
	return urls
		.split(/;/)
		.map((url) => url.trim())
		.filter((url) => url.match(/^http/g));
};

// Only 1 dataset url is allowed at the moment
export const updateConfigWithExampleURL = (config: Config, urls: string[]) => {
	if (urls.length === 1) {
		config.datasets[0].files[0].url = urls[0];
		config.datasets[0].files[0].options = { "offsetsUrl" : urls[0].split(".ome.")[0] + ".offsets.json"}
	}
	return config;
};

export const studyIdFetcher = async (url: string) => {
	try {
		const response = await fetch(url);

		if (response.status === 403) {
			throw new Error(ERROR_MESSAGES.FORBIDDEN_STUDY_ID);
		}

		if (!response.ok) {
			throw new Error("Could not fetch Link ID");
		}

		return await response.json();
	} catch (error) {
		throw error;
	}
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
