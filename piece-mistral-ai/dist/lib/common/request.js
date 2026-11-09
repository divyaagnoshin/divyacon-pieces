"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mistralRequest = void 0;
const pieces_framework_1 = require("@agnocon/pieces-framework");
function isGatewayAuth(auth) {
    return auth.type === pieces_framework_1.AppConnectionType.CUSTOM_AUTH;
}
function getConfig(auth) {
    const a = auth;
    if (isGatewayAuth(a)) {
        const { accountId, gatewayId, gatewayAuthToken, mistralApiKey } = a.props;
        const headers = {};
        if (gatewayAuthToken) {
            headers['cf-aig-authorization'] = `Bearer ${gatewayAuthToken}`;
        }
        if (mistralApiKey) {
            headers['Authorization'] = `Bearer ${mistralApiKey}`;
        }
        return {
            baseUrl: `https://gateway.ai.cloudflare.com/v1/${encodeURIComponent(accountId)}/${encodeURIComponent(gatewayId)}/mistral/v1`,
            headers,
        };
    }
    return {
        baseUrl: 'https://api.mistral.ai/v1',
        headers: { Authorization: `Bearer ${a.secret_text}` },
    };
}
exports.mistralRequest = { getConfig };
//# sourceMappingURL=request.js.map