"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInstabaseApiCall = exports.createInstabaseHeaders = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
const createInstabaseHeaders = (auth) => {
    const headers = {
        'Authorization': `Bearer ${auth.props.apiToken}`,
        'Content-Type': 'application/json',
    };
    if (auth.props.ibContext) {
        headers['IB-Context'] = auth.props.ibContext;
    }
    return headers;
};
exports.createInstabaseHeaders = createInstabaseHeaders;
const makeInstabaseApiCall = (auth_1, endpoint_1, ...args_1) => tslib_1.__awaiter(void 0, [auth_1, endpoint_1, ...args_1], void 0, function* (auth, endpoint, method = pieces_common_1.HttpMethod.GET, body) {
    const url = `${auth.props.apiRoot}${endpoint}`;
    const headers = (0, exports.createInstabaseHeaders)(auth);
    const response = yield pieces_common_1.httpClient.sendRequest({
        method,
        url,
        headers,
        body,
        authentication: {
            type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
            token: auth.props.apiToken,
        },
    });
    return response.body;
});
exports.makeInstabaseApiCall = makeInstabaseApiCall;
//# sourceMappingURL=index.js.map