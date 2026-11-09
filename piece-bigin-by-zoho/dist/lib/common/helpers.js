"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDropdownError = handleDropdownError;
exports.getSafeLabel = getSafeLabel;
exports.formatDateTime = formatDateTime;
exports.formatDateOnly = formatDateOnly;
exports.getZohoBiginAccountAuthorizationUrl = getZohoBiginAccountAuthorizationUrl;
function handleDropdownError(msg) {
    return {
        disabled: true,
        options: [],
        placeholder: msg,
    };
}
function getSafeLabel(item) {
    var _a, _b;
    if (item.First_Name || item.Last_Name) {
        return `${(_a = item.First_Name) !== null && _a !== void 0 ? _a : ''} ${(_b = item.Last_Name) !== null && _b !== void 0 ? _b : ''}`.trim();
    }
    return ((item === null || item === void 0 ? void 0 : item.Deal_Name) || (item === null || item === void 0 ? void 0 : item.Pipeline_Name) || (item === null || item === void 0 ? void 0 : item.Account_Name) || (item === null || item === void 0 ? void 0 : item.id));
}
function formatDateTime(input) {
    const date = new Date(input);
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date provided');
    }
    return date.toISOString().replace(/\.\d{3}Z$/, '+00:00');
}
function formatDateOnly(input) {
    const date = new Date(input);
    const pad = (n) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
function getZohoBiginAccountAuthorizationUrl(region) {
    if (region === 'CN') {
        return 'https://accounts.zoho.com.cn';
    }
    return 'https://accounts.zoho.com';
}
//# sourceMappingURL=helpers.js.map