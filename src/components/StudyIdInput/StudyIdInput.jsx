import React from "react";
import styles from "../ConfigEditor/ConfigEditor.module.css";
import { STUDY_ID_LENGTH } from "../../utils/constants.js";

export const StudyIdInput = ({ onInputError, onInputChange }) => {
	const handleInputChange = (e) => {
		const { value } = e.target;
		if (value.trim()?.length === STUDY_ID_LENGTH) {
			if (!/^\d+$/.test(value)) {
				onInputError("Study ID must be numbers only");
			} else {
				onInputChange(value);
				onInputError(null);
			}
		} else {
			onInputError(`Study ID must be ${STUDY_ID_LENGTH} digits`);
		}
	};

	return (
		<>
			<label
				className={`${styles.viewConfigInputUrlOrFileText} ${styles.requiredField}`}
				htmlFor="inputField"
			>
				{" "}
				Enter your study id
			</label>
			<input
				type="text"
				id="inputField"
				className={styles.viewConfigUrlInput}
				placeholder={`${STUDY_ID_LENGTH}-Digit Id`}
				onChange={handleInputChange}
				maxLength={STUDY_ID_LENGTH}
			/>
		</>
	);
};
