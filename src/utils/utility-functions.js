import { upgradeAndParse } from "@vitessce/schemas";

export function validateConfig(nextConfig) {
	let upgradeSuccess;
	let failureReason;
	try {
		failureReason = upgradeAndParse(JSON.parse(nextConfig));
		upgradeSuccess = true;
	} catch (e) {
		upgradeSuccess = false;
		failureReason = e.message;
		console.error(e);
	}
	return [upgradeSuccess, failureReason];
}

export function sanitizeURLs(urls) {
	return urls
		.split(/;/)
		.map((url) => url.trim())
		.filter((url) => url.match(/^http/g));
}

export const studyIdFetcher = async (url) => {
	try {
		const response = await fetch(url);

		if (response.status === 403) {
			throw new Error("Study Id is not valid");
		}

		if (!response.ok) {
			throw new Error("Could not fetch Link Id");
		}

		return await response.json();
	} catch (error) {
		throw error;
	}
};

export const fetcher = (url) => fetch(url).then((res) => res.json());
