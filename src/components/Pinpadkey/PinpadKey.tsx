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
			<button
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				<Backspace />
			</button>
		);
	} else if (pinkey === PINPAD_MUI_KEYS.DONE) {
		return (
			<button
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				<Check />
			</button>
		);
	} else {
		return (
			<button
				className={`${styles.pinLoginKey}`}
				onClick={() => onHandleKeyPress(pinkey)}
			>
				{pinkey}
			</button>
		);
	}
};
