"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kustomerUtils = void 0;
function parseRequiredString({ value, fieldName, }) {
    if (typeof value !== 'string' || value.trim().length === 0) {
        throw new Error(`${fieldName} is required.`);
    }
    return value.trim();
}
function parseJsonObject({ value, fieldName, }) {
    if (!isKustomerJsonObject(value)) {
        throw new Error(`${fieldName} must be a JSON object.`);
    }
    return value;
}
function isKustomerJsonObject(value) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }
    return Object.values(value).every(isKustomerJsonValue);
}
function isKustomerJsonValue(value) {
    if (typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        value === null) {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isKustomerJsonValue);
    }
    return isKustomerJsonObject(value);
}
exports.kustomerUtils = {
    parseRequiredString,
    parseJsonObject,
};
//# sourceMappingURL=utils.js.map