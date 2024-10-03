import { useState, useEffect, useCallback } from "react";
import { ErrorDiv } from "../ErrorDiv";

import styles from "./Pinpad.module.css";
import {
	PINPAD_MUI_KEYS,
	LINK_ID_LENGTH,
	VITESSCE_LINK_SITE,
	PAD_LAYOUT,
} from "../../utils/constants";
import { exampleConfigHeadset } from "../../utils/config-examples";
import { PinpadKey } from "../Pinpadkey";

type ErrorType = string | null;

export const Pinpad = () => {
	const [linkId, setLinkId] = useState<string>("");
	const [error, setError] = useState<ErrorType>(null);

	// To remove the error as soon as we hit the digit limit
	useEffect(() => {
		if (linkId.length === LINK_ID_LENGTH) {
			setError(null);
		}
	}, [linkId]);

	const attemptLogin = useCallback(() => {
		if (linkId.length === LINK_ID_LENGTH) {
			setError(null);
			let configuration = exampleConfigHeadset;
			if (configuration?.layout?.length > 0 && configuration.layout[0]?.props) {
				configuration.layout[0].props.linkID = linkId;
			}
			const conf = JSON.stringify(configuration, null, 2);
			const nextUrl = `data:,${encodeURIComponent(conf)}`;
			window.location.href = `${VITESSCE_LINK_SITE}${nextUrl}`;
		} else {
			setError("Enter a valid Link ID");
		}
	}, [linkId]);

	const handleKeyPress = useCallback(
		(key: string) => {
			if (key === PINPAD_MUI_KEYS.DONE) {
				attemptLogin();
			} else {
				setLinkId((prevLinkId) => {
					if (key === PINPAD_MUI_KEYS.BACKSPACE) {
						return prevLinkId.slice(0, -1);
					}
					if (prevLinkId.length < LINK_ID_LENGTH && !isNaN(Number(key))) {
						return prevLinkId + key;
					}
					return prevLinkId;
				});
			}
		},
		[attemptLogin],
	);

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
					{PAD_LAYOUT.map((key) => (
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
