// /* eslint-disable no-param-reassign */

import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const getHashSearchParams = (location) => {
	const hash = location.hash.slice(1);
	const [prefix, query] = hash.split("?");
	return [prefix, new URLSearchParams(query)];
};

const getTypedHashParam = (key, varType, location) => {
	// eslint-disable-next-line no-unused-vars
	const [_, searchParams] = getHashSearchParams(location);
	const val = searchParams.get(key);
	let typedVal = val;
	if (varType === "boolean") {
		try {
			typedVal = JSON.parse(val);
		} catch (e) {
			typedVal = false;
		}
	}
	return typedVal;
};

export const useHashParam = (key, defaultValue, varType) => {
	const location = useLocation();
	const navigate = useNavigate();
	const [innerValue, setInnerValue] = useState(() =>
		getTypedHashParam(key, varType, location),
	);

	useEffect(() => {
		const handleHashChange = () => {
			const nextValue = getTypedHashParam(key, varType, location);
			setInnerValue(nextValue !== null ? nextValue : defaultValue);
		};

		window.addEventListener("hashchange", handleHashChange);

		handleHashChange();

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, [key, varType, location, defaultValue]);

	const setValue = useCallback(
		(value) => {
			const [prefix, searchParams] = getHashSearchParams(location);
			if (typeof value === "function") {
				searchParams.set(key, value(searchParams.get(key)));
			} else if (value === undefined || value === "") {
				searchParams.delete(key);
			} else {
				searchParams.set(key, value);
			}
			const search = searchParams.toString();
			navigate(`${prefix}?${search}`, { replace: true });
		},
		[key, location, navigate],
	);

	return [innerValue !== undefined ? innerValue : defaultValue, setValue];
};

export const useSetHashParams = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (values) => {
		const [prefix, searchParams] = getHashSearchParams(location);

		Object.entries(values).forEach(([key, value]) => {
			if (typeof value === "undefined" || value === "") {
				searchParams.delete(key);
			} else {
				searchParams.set(key, value);
			}
		});

		const search = searchParams.toString();
		const newHash = search ? `${prefix}?${search}` : prefix;

		// Use navigate to update the URL
		navigate(`#${newHash}`, { replace: true });
	};
};
