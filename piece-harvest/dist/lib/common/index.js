"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callHarvestApi = callHarvestApi;
exports.filterDynamicFields = filterDynamicFields;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
function callHarvestApi(method_1, apiUrl_1, accessToken_1) {
    return tslib_1.__awaiter(this, arguments, void 0, function* (method, apiUrl, accessToken, queryParams = undefined, body = undefined, headers = undefined) {
        return yield pieces_common_1.httpClient.sendRequest({
            method: method,
            url: `https://api.harvestapp.com/v2/${apiUrl}`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: accessToken,
            },
            headers,
            body,
            queryParams,
        });
    });
}
//Remove null/undefined values and create an array to be used for queryparams
function filterDynamicFields(dynamicFields) {
    const fields = {};
    const props = Object.entries(dynamicFields);
    for (const [propertyKey, propertyValue] of props) {
        if (propertyValue !== null &&
            propertyValue !== undefined &&
            propertyValue !== '' &&
            !(typeof propertyValue === 'string' && propertyValue.trim() === '')) {
            fields[propertyKey] = propertyValue;
        }
    }
    return fields;
}
//# sourceMappingURL=index.js.map