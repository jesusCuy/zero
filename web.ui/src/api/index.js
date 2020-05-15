import fetchs from "./fetchs";
import axios from "axios";

export const UNAUTHORIZED_STATUS_CODE = 401;
export const ABORT_ERROR_NAME = "AbortError";
export const UNHANDLED_CALLBACK = () => true;

export const tryAbort = (...abortControllers) => {
	abortControllers.forEach(abortController => {
		if (abortController) {
			abortController.abort();
		}
	});
};

export const buildAPICall = call => {
	const {
		build
	} = call;

	return (params, options) => {
		const {
			options: fetchOptions,
			endpoint
		} = build(params, options);

		const {
			responseFormat = (response) => response.data
        } = options || {};
        
		const headers = fetchOptions.headers;

		return axios({
			method: fetchOptions.method,
			url: endpoint,
			data: fetchOptions.body,
			headers: headers
		})
			.then((response) => {
				if (response.status === 200) {
					return responseFormat(response);
				}
				const error = new Error(`Request error: ${response.status} (${response.statusText})`);
				error.response = response;

				throw error;
			}, (error) => {
				throw error;
			});
	};
};

export const generateAPI = () => {
	const api = {};

	fetchs.forEach(call => {
		api[call.name] = buildAPICall(call);
	});

	return api;
};

export default generateAPI();