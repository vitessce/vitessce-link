import React, {ChangeEvent} from "react";
import styles from "../ConfigEditor/ConfigEditor.module.css";
import { STUDY_ID_LENGTH } from "../../utils/constants.ts";

interface StudyIdInputProps {
	onInputError: (errorMessage: string | null) => void;
	onInputChange: (value: string) => void;
  }

  
export const StudyIdInput : React.FC<StudyIdInputProps> = ({ onInputError, onInputChange }) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (value.trim()?.length === STUDY_ID_LENGTH) {
			if (!/^\d+$/.test(value)) {
				onInputError("Team ID must be numbers only");
			} else {
				onInputChange(value);
				onInputError(null);
			}
		} else {
			onInputError(`Team ID must be ${STUDY_ID_LENGTH} digits`);
		}
	};

	return (
		<>
			<label
				className={`${styles.viewConfigInputUrlOrFileText} ${styles.requiredField}`}
				htmlFor="inputField"
			>
				{" "}
				Enter your Team ID
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
