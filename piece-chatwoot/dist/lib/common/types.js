"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatwootAuth = getChatwootAuth;
/** Normalize auth from either V0 (props only) or V1 (connection value with type + props) */
function getChatwootAuth(auth) {
    var _a, _b, _c;
    return {
        baseUrl: (_a = auth.props.baseUrl) !== null && _a !== void 0 ? _a : '',
        accountId: (_b = auth.props.accountId) !== null && _b !== void 0 ? _b : 0,
        apiAccessToken: (_c = auth.props.apiAccessToken) !== null && _c !== void 0 ? _c : '',
    };
}
//# sourceMappingURL=types.js.map