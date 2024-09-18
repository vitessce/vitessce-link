import styles from "./Pinpadkey.module.css";
import Backspace from "@mui/icons-material/Backspace";
import Check from "@mui/icons-material/Check";
import { PINPAD_MUI_KEYS } from "../../utils/constants";

interface PinpadKeyProps {
	pinkey: string;
	onHandleKeyPress: (key: string) => void;
}

export const PinpadKey: React.FC<PinpadKeyProps> = ({
	pinkey,
	onHandleKeyPress,
}) => {
	if (pinkey === PINPAD_MUI_KEYS.BACKSPACE) {
		return (
			<div
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				<Backspace />
			</div>
		);
	} else if (pinkey === PINPAD_MUI_KEYS.DONE) {
		return (
			<div
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				<Check />
			</div>
		);
	} else {
		return (
			<div
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				{pinkey}
			</div>
		);
	}
};
