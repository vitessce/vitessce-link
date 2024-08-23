/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  QueryParamProvider,
} from 'use-query-params';
import ConfigEditor from '../components/ConfigEditor.js';
import { baseJson } from '../utils/config-examples.js';
import { useHashParam, useSetHashParams } from '../utils/use-hash-param.js';

function IndexWithHashParams() {
  const setHashParams = useSetHashParams();
  const [url] = useHashParam('url', undefined, 'string');
  const [edit] = useHashParam('edit', false, 'boolean');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [validConfig, setValidConfig] = useState(null);

  const [pendingJson, setPendingJson] = useState(baseJson);
  const [studyIdInput, setStudyIdInput] = useState(null);

  function clearConfigs() {
    setValidConfig(null);
    setPendingJson(baseJson);
  }


  useEffect(() => {
    let unmounted = false;
    async function processParams() {
      if (url) {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (unmounted) {
            return;
          }
          if (response.ok) {
            const responseText = await response.text();
            if (unmounted) {
              return;
            }
              try {
                const responseJson = JSON.parse(responseText);
                responseJson.studyId = studyIdInput;
                console.log(responseJson);
                setValidConfig(responseJson);
              } catch (e) {
                setError({
                  title: 'Error parsing JSON',
                  message: 'Error executing JSON.parse',
                });
              }
            setLoading(false);
          } else {
            setError({
              title: 'Fetch response not OK',
              message: response.statusText,
            });
            setLoading(false);
            clearConfigs();
          }
        } catch (e) {
          setError({
            title: 'Fetch error',
            message: e.message,
          });
          setLoading(false);
          clearConfigs();
        }
      } else {
        setError(null);
        setLoading(false);
        clearConfigs();
      }
    }
    processParams();
    return () => {
      unmounted = true;
    };
  }, [edit, url, setError, studyIdInput]);


  function setUrlFromEditor(nextUrl) {
    setHashParams({
      dataset: undefined,
      url: nextUrl,
      edit: false,
    });
  }
  console.log("config output", validConfig)

  return (edit ? (
    <>
      <ConfigEditor
        pendingJson={pendingJson}
        setPendingJson={setPendingJson}
        error={error}
        setError={setError}
        loading={loading}
        setLoading={setLoading}
        setUrl={setUrlFromEditor}
        setStudyIdInput={setStudyIdInput}
      />
    </>
  ) : validConfig ? ( 
    // to remove this and add Eric's Vitessce component here
    <div>
        <p>Vitessce Placeholder</p>
    </div>
  ) : (!loading ? (
    <p>Error in configuration</p>
  ) : (
    <p>Loading...</p>
  )));
}


export default function Home() {
  return (
    <QueryParamProvider>
      <IndexWithHashParams />
    </QueryParamProvider>
  );
}
