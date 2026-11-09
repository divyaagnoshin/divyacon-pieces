"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructDatadogBaseHeaders = exports.constructDatadogBaseUrl = exports.getDatadogConfiguration = void 0;
const datadog_api_client_1 = require("@datadog/datadog-api-client");
const getDatadogConfiguration = (auth) => {
    const configuration = datadog_api_client_1.client.createConfiguration({
        authMethods: Object.assign({ apiKeyAuth: auth.props.apiKey }, (auth.props.appKey ? { appKeyAuth: auth.props.appKey } : {})),
    });
    configuration.setServerVariables({
        site: auth.props.site,
    });
    return configuration;
};
exports.getDatadogConfiguration = getDatadogConfiguration;
const constructDatadogBaseUrl = (auth, subdomain = 'api', version = 'v2') => {
    return `https://${subdomain}.${auth.props.site}/api/${version}`;
};
exports.constructDatadogBaseUrl = constructDatadogBaseUrl;
const constructDatadogBaseHeaders = (auth) => {
    return Object.assign({ Accept: 'application/json', 'DD-API-KEY': auth.props.apiKey }, (auth.props.appKey ? { 'DD-APPLICATION-KEY': auth.props.appKey } : {}));
};
exports.constructDatadogBaseHeaders = constructDatadogBaseHeaders;
//# sourceMappingURL=helpers.js.map