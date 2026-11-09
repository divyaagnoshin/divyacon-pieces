"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authQuery = authQuery;
exports.withAuthParams = withAuthParams;
exports.rethrowTrelloError = rethrowTrelloError;
/** Build the ?key=&token= auth query-param suffix the Trello REST API expects. */
function authQuery(auth) {
    return `?key=${auth.username}&token=${auth.password}`;
}
/** Auth params merged into a QueryParams object (for requests that pass queryParams). */
function withAuthParams(auth, params = {}) {
    return Object.assign(Object.assign({}, params), { key: auth.username, token: auth.password });
}
/** Map a Trello HTTP error to a clear, per-status message; rethrow otherwise. */
function rethrowTrelloError(error, notFoundHint) {
    var _a;
    const status = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status;
    if (status === 401 || status === 403) {
        throw new Error('Permission denied. Check the connection token and that the connected user has the required access (some board/organization actions require admin permission).');
    }
    if (status === 404) {
        throw new Error(notFoundHint);
    }
    if (status === 429) {
        throw new Error('Trello rate limit exceeded. Retry after a short delay.');
    }
    throw error;
}
//# sourceMappingURL=ai-common.js.map