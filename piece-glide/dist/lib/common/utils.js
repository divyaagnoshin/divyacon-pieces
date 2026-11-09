"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRequiredString = parseRequiredString;
exports.parseGlideRow = parseGlideRow;
exports.parseGlideRows = parseGlideRows;
exports.flattenGlideRows = flattenGlideRows;
function parseRequiredString(value, fieldName) {
    if (typeof value !== 'string' || value.trim().length === 0) {
        throw new Error(`${fieldName} is required.`);
    }
    return value.trim();
}
function parseGlideRow(value) {
    if (!isGlideRow(value)) {
        throw new Error('Row must be a JSON object.');
    }
    return value;
}
function parseGlideRows(value) {
    if (!Array.isArray(value) || !value.every((row) => isGlideRow(row))) {
        throw new Error('Rows must be an array of JSON objects.');
    }
    return value;
}
function flattenGlideRows(rows) {
    return normalizeRecords(rows.map(flattenRecord));
}
function flattenRecord(value) {
    const flattened = {};
    flattenIntoRecord(value, '', flattened);
    return flattened;
}
function normalizeRecords(records) {
    const keys = new Set();
    for (const record of records) {
        for (const key of Object.keys(record)) {
            keys.add(key);
        }
    }
    const normalizedKeys = Array.from(keys);
    return records.map((record) => {
        var _a;
        const normalized = {};
        for (const key of normalizedKeys) {
            normalized[key] = (_a = record[key]) !== null && _a !== void 0 ? _a : null;
        }
        return normalized;
    });
}
function flattenIntoRecord(value, prefix, flattened) {
    if (value === undefined) {
        if (prefix) {
            flattened[prefix] = null;
        }
        return;
    }
    if (value === null ||
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean') {
        if (prefix) {
            flattened[prefix] = value;
        }
        return;
    }
    if (Array.isArray(value)) {
        if (prefix) {
            flattened[prefix] = formatArrayValue(value);
        }
        return;
    }
    for (const [key, nestedValue] of Object.entries(value)) {
        const nextPrefix = prefix ? `${prefix}_${key}` : key;
        flattenIntoRecord(nestedValue, nextPrefix, flattened);
    }
}
function formatArrayValue(values) {
    if (values.length === 0) {
        return null;
    }
    return values
        .map((value) => {
        var _a;
        if (value === null) {
            return 'null';
        }
        if (typeof value === 'string' ||
            typeof value === 'number' ||
            typeof value === 'boolean') {
            return String(value);
        }
        if (Array.isArray(value)) {
            return (_a = formatArrayValue(value)) !== null && _a !== void 0 ? _a : '';
        }
        return JSON.stringify(flattenRecord(value));
    })
        .join(', ');
}
function isGlideRow(value) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }
    return Object.values(value).every((item) => isGlideRowValue(item));
}
function isGlideRowValue(value) {
    if (value === null ||
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean') {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every((item) => isGlideRowValue(item));
    }
    return isGlideRow(value);
}
//# sourceMappingURL=utils.js.map