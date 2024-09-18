import React from 'react';
import styles from "./LoadingOverlay.module.css";

interface LoadingOverlayProps {
	isLoading: boolean;
  }

  
export const LoadingOverlay : React.FC<LoadingOverlayProps> = ({ isLoading  }) => {
	if (!isLoading) return null;

	return (
		<div className={styles.loadingOverlay}>
			<div className={styles.spinner} />
		</div>
	);
};
