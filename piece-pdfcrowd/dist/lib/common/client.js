"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONVERTER_VERSION = exports.BASE_URL = void 0;
exports.getConvertUrl = getConvertUrl;
exports.getAuthHeader = getAuthHeader;
exports.BASE_URL = 'https://api.pdfcrowd.com/api';
exports.DEFAULT_CONVERTER_VERSION = '24.04';
function getConvertUrl(version) {
    return `https://api.pdfcrowd.com/convert/${version || exports.DEFAULT_CONVERTER_VERSION}/`;
}
function getAuthHeader(auth) {
    return 'Basic ' + Buffer.from(`${auth.username}:${auth.password}`).toString('base64');
}
//# sourceMappingURL=client.js.map