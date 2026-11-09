"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseUrl = getBaseUrl;
exports.getApiUrl = getApiUrl;
exports.getAuthHeaders = getAuthHeaders;
const auth_1 = require("../auth");
function getBaseUrl(auth) {
    const baseUrl = auth.props.baseUrl;
    if (baseUrl) {
        let url = baseUrl;
        if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
            url = `https://${baseUrl}`;
        }
        return url.replace(/\/$/, '');
    }
    return auth_1.API_BASE_URL_DEFAULT;
}
function getApiUrl(auth, endpoint) {
    const baseUrl = getBaseUrl(auth);
    if (baseUrl.includes('/api/v2') || baseUrl.endsWith('/v2')) {
        const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
        return `${baseUrl}${cleanEndpoint}`;
    }
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return `${baseUrl}/v2${cleanEndpoint}`;
}
function getAuthHeaders(auth) {
    const apiKey = auth.props.apiKey;
    return {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };
}
//# sourceMappingURL=auth.js.map