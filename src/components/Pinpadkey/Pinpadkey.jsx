import styles from "./Pinpadkey.module.css";
import Backspace from "@mui/icons-material/Backspace";
import Check from "@mui/icons-material/Check";
import { PINPAD_MUI_KEYS } from "../../utils/constants";

export const PinpadKey = ({ pinkey, onHandleKeyPress }) => {
	if (pinkey == PINPAD_MUI_KEYS.BACKSPACE) {
		return (
			<div
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				<Backspace onClick={() => onHandleKeyPress(pinkey)} />
			</div>
		);
	} else if (pinkey == PINPAD_MUI_KEYS.DONE) {
		return (
			<div
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				<Check onClick={() => onHandleKeyPress(pinkey)} />
			</div>
		);
	} else
		return (
			<div
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				{pinkey}
			</div>
		);
};
