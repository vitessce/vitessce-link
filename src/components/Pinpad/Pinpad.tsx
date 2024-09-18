import { useState, useEffect } from "react";
import { ErrorDiv } from "../ErrorDiv/ErrorDiv";

import styles from "./Pinpad.module.css";
import {
	PINPAD_MUI_KEYS,
	LINK_ID_LENGTH,
	VITESSCE_LINK_SITE,
} from "../../utils/constants";
import { exampleConfigHeadset } from "../../utils/config-examples";
import { PinpadKey } from "../Pinpadkey";

type ErrorType = string | null;

export const Pinpad = () => {
	const [linkId, setLinkId] = useState<string>("");
	const [error, setError] = useState<ErrorType>(null);

	const handleKeyPress = (key:string) => {
		if (key === PINPAD_MUI_KEYS.BACKSPACE) {
			setLinkId(() => linkId.slice(0, -1));
		} else if (key === PINPAD_MUI_KEYS.DONE) {
			attemptLogin();
		} else if (linkId.length < LINK_ID_LENGTH && !isNaN(Number(key))) {
			setLinkId(() => linkId + key);
		}
	};

	// To remove the error as soon as we hit the digit limit
	useEffect(() => {
		if (linkId.length === LINK_ID_LENGTH) {
			setError(null);
		}
	}, [linkId]);

	const attemptLogin = () => {
		// TODO: Do we want to put other checks in place, such as matching linkId?
		if (linkId.length === LINK_ID_LENGTH) {
			setError(() => null);
			const layoutItem = exampleConfigHeadset.layout[0];
        	if (layoutItem && layoutItem.props) {
            	layoutItem.props.linkId = linkId; 
        	}
			const conf = JSON.stringify(exampleConfigHeadset, null, 2);
			const nextUrl = `data:,${encodeURIComponent(conf)}`;
			window.location.href = `${VITESSCE_LINK_SITE}${nextUrl}`;
		} else {
			setError(() => "Enter a valid Link ID");
		}
	};

	const padLayout = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		PINPAD_MUI_KEYS.BACKSPACE,
		"0",
		PINPAD_MUI_KEYS.DONE,
	];

	return (
		<main className={styles.pinLoginContainer}>
			<div className={styles.pinErrorContainer}>
				{error && <ErrorDiv errorMessage={error} />}
			</div>
			<div className={styles.pinLogin}>
				<div className={styles.pinInput}>
					<label className={styles.pinInputLabel} htmlFor="inputField">
						Enter your Link ID and press &#x2713;
					</label>
					<input
						type="text"
						id="inputField"
						className={styles.pinInputBox}
						placeholder={`${LINK_ID_LENGTH}-Digit Id`}
						maxLength={LINK_ID_LENGTH}
						value={linkId}
						readOnly
					/>
				</div>

				<div className={styles.pinLoginNumpad}>
					{padLayout.map((key) => (
						<PinpadKey
							pinkey={key}
							key={key}
							onHandleKeyPress={handleKeyPress}
						/>
					))}
				</div>
			</div>
		</main>
	);
};
