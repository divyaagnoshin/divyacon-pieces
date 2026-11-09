"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessCentralAPIClient = void 0;
exports.makeClient = makeClient;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
const BUSINESS_CENTRAL_HOSTS = {
    'login.microsoftonline.com': 'api.businesscentral.dynamics.com',
    'login.microsoftonline.us': 'api.businesscentral.dynamics.us',
};
function getBusinessCentralHost(cloud) {
    var _a;
    return (_a = BUSINESS_CENTRAL_HOSTS[cloud !== null && cloud !== void 0 ? cloud : 'login.microsoftonline.com']) !== null && _a !== void 0 ? _a : BUSINESS_CENTRAL_HOSTS['login.microsoftonline.com'];
}
class BusinessCentralAPIClient {
    constructor(environment, accessToken, cloud) {
        this.environment = environment;
        this.accessToken = accessToken;
        this.cloud = cloud;
    }
    makeRequest(method_1, resourceUri_1, query_1) {
        return tslib_1.__awaiter(this, arguments, void 0, function* (method, resourceUri, query, body = undefined) {
            const host = getBusinessCentralHost(this.cloud);
            const baseUrl = `https://${host}/v2.0/${this.environment}/api/v2.0`;
            const params = {};
            const headers = {};
            if (query) {
                for (const [key, value] of Object.entries(query)) {
                    if (value !== null && value !== undefined) {
                        params[key] = String(value);
                    }
                }
            }
            if (method === pieces_common_1.HttpMethod.PATCH || method === pieces_common_1.HttpMethod.DELETE) {
                headers['If-Match'] = '*';
            }
            const request = {
                method: method,
                url: baseUrl + resourceUri,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: this.accessToken,
                },
                headers,
                queryParams: params,
                body: body,
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return response.body;
        });
    }
    listCompanies() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, '/companies');
        });
    }
    createRecord(endpoint, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, endpoint, undefined, request);
        });
    }
    updateRecord(endpoint, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.PATCH, endpoint, undefined, request);
        });
    }
    getRecord(endpoint) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, endpoint);
        });
    }
    deleteRecord(endpoint) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.DELETE, endpoint);
        });
    }
    filterRecords(companyId, recordType, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/companies(${companyId})/${recordType}`, params);
        });
    }
}
exports.BusinessCentralAPIClient = BusinessCentralAPIClient;
function makeClient(auth) {
    var _a, _b, _c;
    const client = new BusinessCentralAPIClient((_b = (_a = auth.props) === null || _a === void 0 ? void 0 : _a['environment']) !== null && _b !== void 0 ? _b : '', auth.access_token, (_c = auth.props) === null || _c === void 0 ? void 0 : _c['cloud']);
    return client;
}
//# sourceMappingURL=client.js.map