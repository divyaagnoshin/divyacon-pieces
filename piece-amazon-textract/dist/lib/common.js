"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTextractClient = createTextractClient;
exports.buildDocumentInput = buildDocumentInput;
exports.parseAnalysisBlocks = parseAnalysisBlocks;
exports.parseTextBlocks = parseTextBlocks;
exports.parseExpenseDocuments = parseExpenseDocuments;
exports.parseIdentityDocuments = parseIdentityDocuments;
exports.formatTextractError = formatTextractError;
const client_textract_1 = require("@aws-sdk/client-textract");
// ─── Client Factory ───────────────────────────────────────────────────────────
function createTextractClient(auth) {
    return new client_textract_1.TextractClient({
        credentials: {
            accessKeyId: auth.accessKeyId,
            secretAccessKey: auth.secretAccessKey,
        },
        region: auth.region,
    });
}
// ─── Document Input Builder ───────────────────────────────────────────────────
function buildDocumentInput(file, s3Bucket, s3Key) {
    if (file) {
        return { Bytes: new Uint8Array(file.data) };
    }
    if (s3Bucket && s3Key) {
        return { S3Object: { Bucket: s3Bucket, Name: s3Key } };
    }
    throw new Error('You must provide either a file or an S3 bucket and key.');
}
// ─── Block Tree Parsers ───────────────────────────────────────────────────────
function buildBlockIndex(blocks) {
    const index = new Map();
    for (const block of blocks) {
        if (block.Id)
            index.set(block.Id, block);
    }
    return index;
}
function getChildIds(block, relationshipType) {
    var _a, _b;
    return ((_b = (_a = block.Relationships) === null || _a === void 0 ? void 0 : _a.filter((r) => r.Type === relationshipType).flatMap((r) => { var _a; return (_a = r.Ids) !== null && _a !== void 0 ? _a : []; })) !== null && _b !== void 0 ? _b : []);
}
function getBlockText(block, blockIndex) {
    const wordIds = getChildIds(block, client_textract_1.RelationshipType.CHILD);
    return wordIds
        .map((id) => blockIndex.get(id))
        .filter((b) => b !== undefined && b.BlockType === client_textract_1.BlockType.WORD)
        .map((b) => { var _a; return (_a = b.Text) !== null && _a !== void 0 ? _a : ''; })
        .join(' ')
        .trim();
}
function getValueBlock(keyBlock, blockIndex) {
    var _a;
    const valueIds = getChildIds(keyBlock, client_textract_1.RelationshipType.VALUE);
    for (const id of valueIds) {
        const block = blockIndex.get(id);
        if ((block === null || block === void 0 ? void 0 : block.BlockType) === client_textract_1.BlockType.KEY_VALUE_SET &&
            ((_a = block.EntityTypes) === null || _a === void 0 ? void 0 : _a.includes(client_textract_1.EntityType.VALUE))) {
            return block;
        }
    }
    return undefined;
}
function parseAnalysisBlocks(blocks) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    const blockIndex = buildBlockIndex(blocks);
    const lines = [];
    const keyValuePairs = [];
    const tableMap = new Map();
    const signatures = [];
    const queryResults = [];
    for (const block of blocks) {
        switch (block.BlockType) {
            case client_textract_1.BlockType.LINE:
                lines.push({
                    text: (_a = block.Text) !== null && _a !== void 0 ? _a : '',
                    confidence: (_b = block.Confidence) !== null && _b !== void 0 ? _b : 0,
                    pageNumber: (_c = block.Page) !== null && _c !== void 0 ? _c : 1,
                });
                break;
            case client_textract_1.BlockType.KEY_VALUE_SET:
                if ((_d = block.EntityTypes) === null || _d === void 0 ? void 0 : _d.includes(client_textract_1.EntityType.KEY)) {
                    const valueBlock = getValueBlock(block, blockIndex);
                    const keyText = getBlockText(block, blockIndex);
                    const valueText = valueBlock
                        ? getBlockText(valueBlock, blockIndex)
                        : '';
                    if (keyText) {
                        keyValuePairs.push({
                            key: keyText,
                            value: valueText,
                            keyConfidence: (_e = block.Confidence) !== null && _e !== void 0 ? _e : 0,
                            valueConfidence: (_f = valueBlock === null || valueBlock === void 0 ? void 0 : valueBlock.Confidence) !== null && _f !== void 0 ? _f : 0,
                        });
                    }
                }
                break;
            case client_textract_1.BlockType.TABLE:
                if (block.Id)
                    tableMap.set(block.Id, block);
                break;
            case client_textract_1.BlockType.SIGNATURE:
                signatures.push({
                    pageNumber: (_g = block.Page) !== null && _g !== void 0 ? _g : 1,
                    confidence: (_h = block.Confidence) !== null && _h !== void 0 ? _h : 0,
                });
                break;
            case client_textract_1.BlockType.QUERY: {
                const queryText = (_k = (_j = block.Query) === null || _j === void 0 ? void 0 : _j.Text) !== null && _k !== void 0 ? _k : '';
                const answerIds = getChildIds(block, client_textract_1.RelationshipType.ANSWER);
                let answerText = '';
                let answerConfidence = 0;
                for (const id of answerIds) {
                    const answerBlock = blockIndex.get(id);
                    if ((answerBlock === null || answerBlock === void 0 ? void 0 : answerBlock.BlockType) === client_textract_1.BlockType.QUERY_RESULT) {
                        answerText = (_l = answerBlock.Text) !== null && _l !== void 0 ? _l : '';
                        answerConfidence = (_m = answerBlock.Confidence) !== null && _m !== void 0 ? _m : 0;
                        break;
                    }
                }
                if (queryText) {
                    queryResults.push({
                        query: queryText,
                        answer: answerText,
                        confidence: answerConfidence,
                        pageNumber: (_o = block.Page) !== null && _o !== void 0 ? _o : 1,
                    });
                }
                break;
            }
        }
    }
    const tables = [];
    for (const tableBlock of tableMap.values()) {
        const cellIds = getChildIds(tableBlock, client_textract_1.RelationshipType.CHILD);
        const rowMap = new Map();
        for (const cellId of cellIds) {
            const cellBlock = blockIndex.get(cellId);
            if (!cellBlock || cellBlock.BlockType !== client_textract_1.BlockType.CELL)
                continue;
            const rowIndex = (_p = cellBlock.RowIndex) !== null && _p !== void 0 ? _p : 1;
            const colIndex = (_q = cellBlock.ColumnIndex) !== null && _q !== void 0 ? _q : 1;
            const isHeader = (_s = (_r = cellBlock.EntityTypes) === null || _r === void 0 ? void 0 : _r.includes(client_textract_1.EntityType.COLUMN_HEADER)) !== null && _s !== void 0 ? _s : false;
            const cellText = getBlockText(cellBlock, blockIndex);
            const cell = {
                text: cellText,
                rowIndex,
                columnIndex: colIndex,
                confidence: (_t = cellBlock.Confidence) !== null && _t !== void 0 ? _t : 0,
                isHeader,
            };
            if (!rowMap.has(rowIndex))
                rowMap.set(rowIndex, []);
            rowMap.get(rowIndex).push(cell);
        }
        const sortedRows = Array.from(rowMap.entries())
            .sort(([a], [b]) => a - b)
            .map(([, cells]) => cells.sort((a, b) => a.columnIndex - b.columnIndex));
        tables.push({
            rows: sortedRows,
            pageNumber: (_u = tableBlock.Page) !== null && _u !== void 0 ? _u : 1,
        });
    }
    const pageCount = Math.max(0, ...blocks
        .filter((b) => b.BlockType === client_textract_1.BlockType.PAGE)
        .map((b) => { var _a; return (_a = b.Page) !== null && _a !== void 0 ? _a : 0; }));
    return {
        rawText: lines.map((l) => l.text).join('\n'),
        lines,
        keyValuePairs,
        tables,
        signatures,
        queryResults,
        pageCount: pageCount || 1,
    };
}
function parseTextBlocks(blocks) {
    var _a, _b, _c;
    const lines = [];
    for (const block of blocks) {
        if (block.BlockType === client_textract_1.BlockType.LINE) {
            lines.push({
                text: (_a = block.Text) !== null && _a !== void 0 ? _a : '',
                confidence: (_b = block.Confidence) !== null && _b !== void 0 ? _b : 0,
                pageNumber: (_c = block.Page) !== null && _c !== void 0 ? _c : 1,
            });
        }
    }
    const pageCount = Math.max(0, ...blocks
        .filter((b) => b.BlockType === client_textract_1.BlockType.PAGE)
        .map((b) => { var _a; return (_a = b.Page) !== null && _a !== void 0 ? _a : 0; }));
    return {
        rawText: lines.map((l) => l.text).join('\n'),
        lines,
        pageCount: pageCount || 1,
    };
}
function parseExpenseDocuments(expenseDocs) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    const result = {
        vendor: {},
        lineItems: [],
        rawSummaryFields: [],
    };
    for (const doc of expenseDocs) {
        for (const field of (_a = doc.SummaryFields) !== null && _a !== void 0 ? _a : []) {
            const type = (_c = (_b = field.Type) === null || _b === void 0 ? void 0 : _b.Text) !== null && _c !== void 0 ? _c : '';
            const value = (_e = (_d = field.ValueDetection) === null || _d === void 0 ? void 0 : _d.Text) !== null && _e !== void 0 ? _e : '';
            const confidence = (_g = (_f = field.ValueDetection) === null || _f === void 0 ? void 0 : _f.Confidence) !== null && _g !== void 0 ? _g : 0;
            result.rawSummaryFields.push({ type, value, confidence });
            switch (type) {
                case 'VENDOR_NAME':
                    result.vendor.name = value;
                    break;
                case 'VENDOR_ADDRESS':
                    result.vendor.address = value;
                    break;
                case 'VENDOR_PHONE':
                    result.vendor.phone = value;
                    break;
                case 'INVOICE_RECEIPT_DATE':
                    result.invoiceDate = value;
                    break;
                case 'DUE_DATE':
                    result.dueDate = value;
                    break;
                case 'SUBTOTAL':
                    result.subtotal = value;
                    break;
                case 'TAX':
                    result.tax = value;
                    break;
                case 'TIP':
                    result.tip = value;
                    break;
                case 'TOTAL':
                    result.total = value;
                    break;
                case 'INVOICE_RECEIPT_ID':
                    result.invoiceNumber = value;
                    break;
            }
        }
        for (const group of (_h = doc.LineItemGroups) !== null && _h !== void 0 ? _h : []) {
            for (const lineItem of (_j = group.LineItems) !== null && _j !== void 0 ? _j : []) {
                const item = {};
                for (const field of (_k = lineItem.LineItemExpenseFields) !== null && _k !== void 0 ? _k : []) {
                    const type = (_m = (_l = field.Type) === null || _l === void 0 ? void 0 : _l.Text) !== null && _m !== void 0 ? _m : '';
                    const value = (_p = (_o = field.ValueDetection) === null || _o === void 0 ? void 0 : _o.Text) !== null && _p !== void 0 ? _p : '';
                    switch (type) {
                        case 'ITEM':
                            item.description = value;
                            break;
                        case 'QUANTITY':
                            item.quantity = value;
                            break;
                        case 'UNIT_PRICE':
                            item.unitPrice = value;
                            break;
                        case 'PRICE':
                            item.price = value;
                            break;
                        case 'PRODUCT_CODE':
                            item.productCode = value;
                            break;
                    }
                }
                result.lineItems.push(item);
            }
        }
    }
    return result;
}
function parseIdentityDocuments(identityDocs) {
    var _a, _b, _c, _d, _e, _f, _g;
    const result = { allFields: [] };
    for (const doc of identityDocs) {
        for (const field of (_a = doc.IdentityDocumentFields) !== null && _a !== void 0 ? _a : []) {
            const type = (_c = (_b = field.Type) === null || _b === void 0 ? void 0 : _b.Text) !== null && _c !== void 0 ? _c : '';
            const value = (_e = (_d = field.ValueDetection) === null || _d === void 0 ? void 0 : _d.Text) !== null && _e !== void 0 ? _e : '';
            const confidence = (_g = (_f = field.ValueDetection) === null || _f === void 0 ? void 0 : _f.Confidence) !== null && _g !== void 0 ? _g : 0;
            result.allFields.push({ type, value, confidence });
            switch (type) {
                case 'DOCUMENT_TYPE':
                    result.documentType = value;
                    break;
                case 'FIRST_NAME':
                    result.firstName = value;
                    break;
                case 'LAST_NAME':
                    result.lastName = value;
                    break;
                case 'MIDDLE_NAME':
                    result.middleName = value;
                    break;
                case 'SUFFIX':
                    result.suffix = value;
                    break;
                case 'DATE_OF_BIRTH':
                    result.dateOfBirth = value;
                    break;
                case 'EXPIRATION_DATE':
                    result.dateOfExpiry = value;
                    break;
                case 'DATE_OF_ISSUE':
                    result.dateOfIssue = value;
                    break;
                case 'DOCUMENT_NUMBER':
                    result.idNumber = value;
                    break;
                case 'ADDRESS':
                    result.address = value;
                    break;
                case 'COUNTY':
                    result.county = value;
                    break;
                case 'PLACE_OF_BIRTH':
                    result.placeOfBirth = value;
                    break;
                case 'MRZ_CODE':
                    result.mrzCode = value;
                    break;
            }
        }
    }
    return result;
}
// ─── Error Formatter ──────────────────────────────────────────────────────────
function formatTextractError(error) {
    var _a, _b, _c;
    const err = error;
    const name = (_a = err.name) !== null && _a !== void 0 ? _a : 'UnknownError';
    switch (name) {
        case 'ThrottlingException':
            return 'Request was throttled by AWS Textract. Please try again in a moment.';
        case 'AccessDeniedException':
            return 'Access denied. Ensure your AWS credentials have the required Textract permissions.';
        case 'InvalidS3ObjectException':
            return 'The specified S3 object could not be read. Check the bucket name, key, and permissions.';
        case 'UnsupportedDocumentException':
            return 'The document format or page count is not supported. Synchronous analysis supports JPEG, PNG, and single-page PDF or TIFF via S3. For multi-page PDFs, use the Start Document Analysis action.';
        case 'DocumentTooLargeException':
            return 'The document exceeds the maximum allowed size. Use S3 for large documents.';
        case 'BadDocumentException':
            return 'The document could not be read. Ensure the file is a valid image or PDF.';
        case 'ProvisionedThroughputExceededException':
            return 'You have exceeded your AWS Textract throughput quota. Please try again later.';
        case 'LimitExceededException':
            return 'You have reached the AWS Textract page limit for this document.';
        case 'InvalidJobIdException':
            return 'The specified job ID does not exist or belongs to a different account.';
        case 'InvalidKMSKeyException':
            return 'The KMS key is invalid or the account is not authorized to use it.';
        case 'HumanLoopQuotaExceededException':
            return 'The maximum number of active human review workflows has been exceeded. Please try again later.';
        case 'ValidationException':
            return `Validation error: ${(_b = err.message) !== null && _b !== void 0 ? _b : 'Check your input parameters.'}`;
        default:
            return (_c = err.message) !== null && _c !== void 0 ? _c : 'An unexpected error occurred.';
    }
}
//# sourceMappingURL=common.js.map