export const STUDY_ID_LENGTH: number = 4;
export const LINK_ID_LENGTH: number = 4;
export const INPUT_DEBOUNCE_SECONDS: number = 500;
export const LINK_ID_KEY: string = "link_id";
export const VITESSCE_LINK_SITE: string = "https://beta-mr.vitessce.io/?url=";
export const LINK_ID_ENDPOINT_URL: string =
	"https://mr-study.vitessce.io/link?study_id=";

export const EXAMPLE_URL: string =
	"https://assets.hubmapconsortium.org/a4be39d9c1606130450a011d2f1feeff/ometiff-pyramids/processedMicroscopy/VAN0012-RK-102-167-PAS_IMS_images/VAN0012-RK-102-167-PAS_IMS-registered.ome.tif";

export const ERROR_MESSAGES: { [key: string]: string } = {
	INVALID_STUDY_ID: "Team ID is not valid",
	FORBIDDEN_STUDY_ID: "Team ID is forbidden",
	LINK_ID_RESPONSE_ERROR: "Could not get Link Id",
	NO_DATASET_URL_ERROR: "No dataset URL is provided",
	INVALID_CONFIG: "Invalid config: LinkController missing",
	DATASET_LIMIT_ERROR: "Only one dataset URL is allowed",
};

export const PINPAD_MUI_KEYS: { BACKSPACE: string; DONE: string } = {
	BACKSPACE: "backspace",
	DONE: "done",
};
