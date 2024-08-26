import React from 'react';
import { useEffect, useState } from 'react'
import { useDebounce } from "use-debounce";

import styles from './configEditor.module.css';
import { STUDY_ID_LENGTH, INPUT_DEBOUNCE_SECONDS } from '../utils/constants.js';

export default function StudyIdInput({ onValidateStudyId }) {
  const [studyId, setStudyId] = useState(Number(null)); 
  const [debouncedStudyId] = useDebounce(studyId, INPUT_DEBOUNCE_SECONDS);


  useEffect(() => {
    if(debouncedStudyId)
      onValidateStudyId(debouncedStudyId);
  }, [debouncedStudyId, onValidateStudyId]);

  const handleInputChange = (e) => {
    setStudyId(e.target.value);
  };
  return (
    <>
      <p className={styles.viewConfigInputUrlOrFileText} htmlFor="inputField"> Enter your study id
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

