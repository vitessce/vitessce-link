import React from "react";
import styles from "./configEditor.module.css";
import { STUDY_ID_LENGTH } from "../utils/constants.js";

export default function StudyIdInput({ onInputError, onInputChange }) {
	const handleInputChange = (e) => {
		const { value } = e.target;
		if (value === "") {
			onInputError("Study ID cannot be empty");
		} else if (!/^\d+$/.test(value)) {
			onInputError("Study ID must be numbers only");
		} else if (
			value.length < STUDY_ID_LENGTH ||
			value.length > STUDY_ID_LENGTH
		) {
			onInputError(`Study ID must be ${STUDY_ID_LENGTH} digits`);
		} else onInputError(null);
		onInputChange(value);
	};
	return (
		<>
			<p className={styles.viewConfigInputUrlOrFileText} htmlFor="inputField">
				{" "}
				Enter your study id
				<span className={styles.requiredField}>*</span>
			</p>
			<input
				type="text"
				id="inputField"
				className={styles.viewConfigUrlInput}
				placeholder={`${STUDY_ID_LENGTH}-Digit Id`}
				onChange={handleInputChange}
			/>
		</>
	);
}
