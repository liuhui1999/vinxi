import {
	H3Error,
	H3Event,
	MIMES,
	appendCorsHeaders,
	appendCorsPreflightHeaders,
	appendHeader,
	appendHeaders,
	appendResponseHeader,
	appendResponseHeaders,
	assertMethod,
	callNodeListener,
	clearResponseHeaders,
	clearSession,
	createApp,
	createAppEventHandler,
	createError,
	createEvent,
	createRouter,
	defaultContentType,
	defineEventHandler,
	defineLazyEventHandler,
	defineNodeListener,
	defineNodeMiddleware,
	defineRequestMiddleware,
	defineResponseMiddleware,
	deleteCookie,
	dynamicEventHandler,
	eventHandler,
	fetchWithEvent,
	fromNodeMiddleware,
	fromPlainHandler,
	fromWebHandler,
	getCookie,
	getHeader,
	getHeaders,
	getMethod,
	getProxyRequestHeaders,
	getQuery,
	getRequestFingerprint,
	getRequestHeader,
	getRequestHeaders,
	getRequestHost,
	getRequestIP,
	getRequestPath,
	getRequestProtocol,
	getRequestURL,
	getRequestWebStream,
	getResponseHeader,
	getResponseHeaders,
	getResponseStatus,
	getResponseStatusText,
	getRouterParam,
	getRouterParams,
	getSession,
	getValidatedQuery,
	getValidatedRouterParams,
	handleCacheHeaders,
	handleCors,
	isCorsOriginAllowed,
	isError,
	isEvent,
	isEventHandler,
	isMethod,
	isPreflightRequest,
	isStream,
	isWebResponse,
	lazyEventHandler,
	parseCookies,
	promisifyNodeListener,
	proxyRequest,
	readBody,
	readFormData,
	readMultipartFormData,
	readRawBody,
	readValidatedBody,
	removeResponseHeader,
	sanitizeStatusCode,
	sanitizeStatusMessage,
	sealSession,
	send,
	sendError,
	sendNoContent,
	sendProxy,
	sendRedirect,
	sendStream,
	sendWebResponse,
	serveStatic,
	setCookie,
	setHeader,
	setHeaders,
	setResponseHeader,
	setResponseHeaders,
	setResponseStatus,
	splitCookiesString,
	toEventHandler,
	toNodeListener,
	toPlainHandler,
	toWebHandler,
	toWebRequest as toWebRequestH3,
	unsealSession,
	updateSession,
	use,
	useBase,
	useSession,
	writeEarlyHints,
} from "h3";

/**
 *
 * @param {import('h3').H3Event} event
 * @param {string} key
 * @param {any} value
 */
export function setContext(event, key, value) {
	event.context[key] = value;
}

/**
 *
 * @param {import('h3').H3Event} event
 * @param {string} key
 */
export function getContext(event, key) {
	return event.context[key];
}

/**
 *
 * @param {{ onRequest?: import("h3")._RequestMiddleware | import("h3")._RequestMiddleware[]; onBeforeResponse?: import("h3")._ResponseMiddleware | import("h3")._ResponseMiddleware[] }} options
 * @returns
 */
export function defineMiddleware(options) {
	return options;
}

export function toWebRequest(event) {
	event.web ??= {
		request: toWebRequestH3(event),
		url: getRequestURL(event)
	};
	return event.web.request;
}

export {
	H3Error,
	H3Event,
	MIMES,
	appendCorsHeaders,
	appendCorsPreflightHeaders,
	appendHeader,
	appendHeaders,
	appendResponseHeader,
	appendResponseHeaders,
	assertMethod,
	callNodeListener,
	clearResponseHeaders,
	clearSession,
	createApp,
	createAppEventHandler,
	createError,
	createEvent,
	createRouter,
	defaultContentType,
	defineEventHandler,
	defineLazyEventHandler,
	defineNodeListener,
	defineNodeMiddleware,
	defineRequestMiddleware,
	defineResponseMiddleware,
	deleteCookie,
	dynamicEventHandler,
	eventHandler,
	fetchWithEvent,
	fromNodeMiddleware,
	fromPlainHandler,
	fromWebHandler,
	getCookie,
	getHeader,
	getHeaders,
	getMethod,
	getProxyRequestHeaders,
	getQuery,
	getRequestFingerprint,
	getRequestHeader,
	getRequestHeaders,
	getRequestHost,
	getRequestIP,
	getRequestPath,
	getRequestProtocol,
	getRequestURL,
	getRequestWebStream,
	getResponseHeader,
	getResponseHeaders,
	getResponseStatus,
	getResponseStatusText,
	getRouterParam,
	getRouterParams,
	getSession,
	getValidatedQuery,
	getValidatedRouterParams,
	handleCacheHeaders,
	handleCors,
	isCorsOriginAllowed,
	isError,
	isEvent,
	isEventHandler,
	isMethod,
	isPreflightRequest,
	isStream,
	isWebResponse,
	lazyEventHandler,
	parseCookies,
	promisifyNodeListener,
	proxyRequest,
	readBody,
	readFormData,
	readMultipartFormData,
	readRawBody,
	readValidatedBody,
	removeResponseHeader,
	sanitizeStatusCode,
	sanitizeStatusMessage,
	sealSession,
	send,
	sendError,
	sendNoContent,
	sendProxy,
	sendRedirect,
	sendStream,
	sendWebResponse,
	serveStatic,
	setCookie,
	setHeader,
	setHeaders,
	setResponseHeader,
	setResponseHeaders,
	setResponseStatus,
	splitCookiesString,
	toEventHandler,
	toNodeListener,
	toPlainHandler,
	toWebHandler,
	unsealSession,
	updateSession,
	use,
	useBase,
	useSession,
	writeEarlyHints,
};
