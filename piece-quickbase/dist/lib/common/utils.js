"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDeduplicationKey = generateDeduplicationKey;
exports.mapFieldsToRecord = mapFieldsToRecord;
exports.extractRecordValues = extractRecordValues;
exports.chunkArray = chunkArray;
exports.buildWhereClause = buildWhereClause;
exports.validateRequiredFields = validateRequiredFields;
function generateDeduplicationKey(recordId, lastModified) {
    return `${recordId}-${lastModified}`;
}
function mapFieldsToRecord(fieldsData, fields) {
    const record = {};
    for (const [key, value] of Object.entries(fieldsData)) {
        let fieldId;
        if (/^\d+$/.test(key)) {
            fieldId = key;
        }
        else {
            const field = fields.find(f => f.label.toLowerCase() === key.toLowerCase());
            if (field) {
                fieldId = field.id.toString();
            }
            else {
                throw new Error(`Field not found: ${key}`);
            }
        }
        record[fieldId] = { value };
    }
    return record;
}
function extractRecordValues(record) {
    const values = {};
    for (const [fieldId, fieldData] of Object.entries(record)) {
        values[fieldId] = fieldData.value;
    }
    return values;
}
function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}
function buildWhereClause(filters) {
    const conditions = [];
    for (const [fieldId, value] of Object.entries(filters)) {
        if (value === null || value === undefined) {
            continue;
        }
        if (typeof value === 'string') {
            conditions.push(`{${fieldId}.EX.'${value.replace(/'/g, "''")}'}`);
        }
        else if (typeof value === 'number') {
            conditions.push(`{${fieldId}.EX.${value}}`);
        }
        else if (typeof value === 'boolean') {
            conditions.push(`{${fieldId}.EX.${value}}`);
        }
        else if (Array.isArray(value)) {
            const arrayConditions = value.map(v => typeof v === 'string'
                ? `{${fieldId}.EX.'${v.replace(/'/g, "''")}'}`
                : `{${fieldId}.EX.${v}}`);
            conditions.push(`(${arrayConditions.join('OR')})`);
        }
    }
    return conditions.join('AND');
}
function validateRequiredFields(data, requiredFields) {
    const missingFields = requiredFields.filter(field => data[field] === undefined || data[field] === null || data[field] === '');
    if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
}
//# sourceMappingURL=utils.js.map