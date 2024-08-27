import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { useHashParam, useSetHashParams } from "../utils/use-hash-param.js";
import { baseJson } from "../utils/config-examples.js";
import { ConfigEditor } from "./../components/ConfigEditor";
import { QueryParamProvider } from "use-query-params";

const fetcher = (url) => fetch(url).then((res) => res.json());

function IndexWithHashParams() {
    const setHashParams = useSetHashParams();
    const [url] = useHashParam('url', undefined, 'string');
    const [edit] = useHashParam('edit', false, 'boolean');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [validConfig, setValidConfig] = useState(null);
    const [pendingJson, setPendingJson] = useState(baseJson);
    const [studyIdInput, setStudyIdInput] = useState(null);

    const { isValidating } = useSWR(url, fetcher, {
    
        onError: (err) => {
                setError({
                    title: 'Fetch error',
                    message: err.message,
                });
        },
        onSuccess: (data) => {
            if (data) {
                data.studyId = studyIdInput;
                const nextUrl = `data:,${encodeURIComponent(JSON.stringify(data))}`
                setUrlFromEditor(nextUrl)
                setValidConfig(data);
            }
            setLoading(false);
        },
    });

    useEffect(() => {
        console.log("useEffect", url)
        if(url){
            setLoading(true)
            setUrlFromEditor
        }
        else {
            setError(null);
            setLoading(false);
            setValidConfig(null);
            setPendingJson(baseJson);
        }
    }, [edit, url, setError, studyIdInput]);

    function setUrlFromEditor(nextUrl) {
        setHashParams({
            dataset: undefined,
            url: nextUrl,
            edit: false,
        });
    }

    if (edit) {
        return (
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
        );
    }

    if (validConfig) {
        return (
            <div>
                <p>Vitessce Placeholder</p>
            </div>
        );
    }

    if (loading || isValidating) {
        return <p>Loading...</p>;
    }

    return <p>Error in configuration</p>;
}

export default function Home() {
    return (
        <QueryParamProvider>
            <IndexWithHashParams />
        </QueryParamProvider>
    );
}
