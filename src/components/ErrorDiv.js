import styles from "./errorDiv.module.css";

const ErrorDiv = ({ errorMessage }) => {
	return (
		<div className={styles.vitessceAppLoadError}>
			<pre>{errorMessage}</pre>
		</div>
	);
};

export default ErrorDiv;
