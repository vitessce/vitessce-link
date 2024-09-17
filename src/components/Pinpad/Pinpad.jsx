import React, { useState } from 'react';
import styles from './Pinpad.module.css'
import {PINPAD_MUI_KEYS, LINK_ID_LENGTH, VITESSCE_LINK_SITE} from '../../utils/constants'
import {exampleConfigHeadset} from '../../utils/config-examples'
import {PinpadKey}  from '../Pinpadkey';
export const Pinpad = ({ loginEndpoint, redirectTo }) => {
  const [value, setValue] = useState('');


  const handleKeyPress = (key) => {
    console.log(key)
    if (key === PINPAD_MUI_KEYS.BACKSPACE) {
      setValue(value.slice(0, -1));
    } else if (key === PINPAD_MUI_KEYS.DONE) {
      attemptLogin();
    } else if (value.length < LINK_ID_LENGTH && !isNaN(key)) {
      setValue(value + key);
    }
  };

  const updateValueText = () => {
    // This is managed via the `value` state directly in the JSX
  };

  const attemptLogin = () => {
    if (value.length === LINK_ID_LENGTH) {
      exampleConfigHeadset.layout[0].props.linkID = value
      const conf = JSON.stringify(exampleConfigHeadset, null, 2);
      const nextUrl = `data:,${encodeURIComponent(conf)}`;
      window.location.href = `${VITESSCE_LINK_SITE}${nextUrl}`;
    } else {
      alert('Please enter a 4-digit PIN');
    }
  };

  const padLayout = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    PINPAD_MUI_KEYS.BACKSPACE, '0', PINPAD_MUI_KEYS.DONE
  ];

  return (
        <main className={styles.pinLoginContainer}>
            <div className={styles.pinLogin}>
                <div className={styles.pinInput}>

                <label className={styles.pinInputLabel}
				// className={`${styles.}`}
				htmlFor="inputField"
                >
                    Enter your Link ID and press &#x2713;
                </label>
                <input
                    type="text"
                    id="inputField"
                    className={styles.pinInputBox}
                    placeholder={`${LINK_ID_LENGTH}-Digit Id`}
                    maxLength={LINK_ID_LENGTH}
                    value={value}
                    readOnly
                />
                </div>


                <div className={styles.pinLogin__numpad}>
                    {padLayout.map(key => (
                            <PinpadKey pinkey={key} key={key} onHandleKeyPress={handleKeyPress}/>
                    ))}
                </div>
                </div>
        </main>
    );
};
