import styles from "./errorDiv.module.css";

export const ErrorDiv = ({ errorMessage }) => {
	if (!errorMessage) {
		return null;
	}
	return (
		<div className={styles.vitessceAppLoadError}>
			<pre>{errorMessage}</pre>
		</div>
	);
};
