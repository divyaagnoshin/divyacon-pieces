"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outlookCommon = void 0;
const microsoft_graph_client_1 = require("@microsoft/microsoft-graph-client");
const microsoft_cloud_1 = require("./microsoft-cloud");
function createClient(auth) {
    const cloud = (0, microsoft_cloud_1.getMicrosoftCloudFromAuth)(auth);
    return microsoft_graph_client_1.Client.initWithMiddleware({
        authProvider: {
            getAccessToken: () => Promise.resolve(auth.access_token),
        },
        baseUrl: (0, microsoft_cloud_1.getGraphBaseUrl)(cloud),
    });
}
/**
 * Delegated connections act as the signed-in user (`/me`). App-only
 * (client-credentials) tokens have no user context, so they must address a
 * specific mailbox via `/users/{id}`. Presence of the `mailbox` prop is what
 * distinguishes the two, since the piece cannot read the connection's grant type.
 */
function mailboxPrefix(auth) {
    var _a, _b;
    const mailbox = (_b = (_a = auth.props) === null || _a === void 0 ? void 0 : _a['mailbox']) === null || _b === void 0 ? void 0 : _b.trim();
    return mailbox ? `/users/${encodeURIComponent(mailbox)}` : '/me';
}
exports.outlookCommon = { createClient, mailboxPrefix };
//# sourceMappingURL=client.js.map