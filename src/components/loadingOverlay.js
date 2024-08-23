import React from 'react';
import styles from './loadingOverlay.module.css';

export default function LoadingOverlay({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinner} />
    </div>
  );
}
