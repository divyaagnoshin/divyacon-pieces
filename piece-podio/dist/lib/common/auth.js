"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccessToken = getAccessToken;
exports.getRefreshToken = getRefreshToken;
exports.isTokenExpired = isTokenExpired;
exports.validateAuthData = validateAuthData;
exports.getTokenType = getTokenType;
exports.getAuthorizationHeader = getAuthorizationHeader;
function getAccessToken(auth) {
    return auth.access_token;
}
function getRefreshToken(auth) {
    var _a;
    return (_a = auth.data) === null || _a === void 0 ? void 0 : _a['refresh_token'];
}
function isTokenExpired(auth) {
    var _a, _b;
    if (!((_a = auth.data) === null || _a === void 0 ? void 0 : _a['expires_in']) || !((_b = auth.data) === null || _b === void 0 ? void 0 : _b['claimed_at'])) {
        return false;
    }
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    const expiresIn = auth.data['expires_in'];
    const claimedAt = auth.data['claimed_at'];
    const refreshThreshold = 15 * 60; // 15 minutes buffer
    return secondsSinceEpoch + refreshThreshold >= claimedAt + expiresIn;
}
function validateAuthData(auth) {
    if (!auth) {
        return { valid: false, error: 'Authentication data is missing' };
    }
    if (!auth.access_token) {
        return { valid: false, error: 'Access token is missing' };
    }
    if (isTokenExpired(auth)) {
        return { valid: false, error: 'Access token has expired' };
    }
    return { valid: true };
}
function getTokenType(auth) {
    var _a;
    return ((_a = auth.data) === null || _a === void 0 ? void 0 : _a['token_type']) || 'Bearer';
}
function getAuthorizationHeader(auth) {
    const tokenType = getTokenType(auth);
    const accessToken = getAccessToken(auth);
    return `${tokenType} ${accessToken}`;
}
//# sourceMappingURL=auth.js.map