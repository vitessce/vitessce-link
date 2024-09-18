import React from "react";
import styles from "./ErrorDiv.module.css";

interface ErrorDivProps {
	errorMessage: string | null;
}
export const ErrorDiv: React.FC<ErrorDivProps> = ({ errorMessage }) => {
	if (!errorMessage) {
		return null;
	}
	return (
		<div className={styles.vitessceAppLoadError}>
			<pre>{errorMessage}</pre>
		</div>
	);
};
