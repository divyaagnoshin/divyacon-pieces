"use strict";
var _GristAPIClient_domaiUrl, _GristAPIClient_apiKey;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GristAPIClient = void 0;
exports.transformTableColumnValues = transformTableColumnValues;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
class GristAPIClient {
    constructor(options) {
        _GristAPIClient_domaiUrl.set(this, void 0);
        _GristAPIClient_apiKey.set(this, void 0);
        tslib_1.__classPrivateFieldSet(this, _GristAPIClient_domaiUrl, options.domainUrl, "f");
        tslib_1.__classPrivateFieldSet(this, _GristAPIClient_apiKey, options.apiKey, "f");
    }
    makeRequest(method_1, resourceUri_1, headers_1, query_1) {
        return tslib_1.__awaiter(this, arguments, void 0, function* (method, resourceUri, headers, query, body = undefined) {
            const baseUrl = tslib_1.__classPrivateFieldGet(this, _GristAPIClient_domaiUrl, "f").replace(/\/$/, '');
            const params = {};
            if (query) {
                for (const [key, value] of Object.entries(query)) {
                    if (value !== null && value !== undefined) {
                        params[key] = String(value);
                    }
                }
            }
            const request = {
                method: method,
                url: baseUrl + '/api' + resourceUri,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: tslib_1.__classPrivateFieldGet(this, _GristAPIClient_apiKey, "f"),
                },
                headers,
                queryParams: params,
                body: body,
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return response.body;
        });
    }
    listOrgs() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/orgs`);
        });
    }
    listWorkspaces(orgId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/orgs/${orgId}/workspaces`);
        });
    }
    getWorkspace(workspaceId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/workspaces/${workspaceId}`);
        });
    }
    listDocumentTables(docId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/docs/${docId}/tables`);
        });
    }
    listTableColumns(docId, tableId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/docs/${docId}/tables/${tableId}/columns`);
        });
    }
    addRecordsToTable(docId, tableId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, `/docs/${docId}/tables/${tableId}/records`, undefined, {}, request);
        });
    }
    updateRcordsInTable(docId, tableId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.PATCH, `/docs/${docId}/tables/${tableId}/records`, undefined, {}, request);
        });
    }
    listRecordsFromTable(docId, tableId, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/docs/${docId}/tables/${tableId}/records`, undefined, query);
        });
    }
    listDocumentAttachments(docId, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/docs/${docId}/attachments`, {}, query);
        });
    }
    getDocumentAttachmentMetadata(docId, attachmentId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.GET, `/docs/${docId}/attachments/${attachmentId}`);
        });
    }
    createDocumentWebhook(docId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.POST, `/docs/${docId}/webhooks`, undefined, {}, request);
        });
    }
    deleteDocumentWebhook(docId, webhookId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.makeRequest(pieces_common_1.HttpMethod.DELETE, `/docs/${docId}/webhooks/${webhookId}`);
        });
    }
}
exports.GristAPIClient = GristAPIClient;
_GristAPIClient_domaiUrl = new WeakMap(), _GristAPIClient_apiKey = new WeakMap();
function transformTableColumnValues({ tableColumnSchema, tableColumnValues, }) {
    const fields = {};
    for (const column of tableColumnSchema.columns) {
        const columnId = column.id;
        const columnType = column.fields.type;
        const columnValue = tableColumnValues[columnId];
        if (columnValue !== undefined && columnValue !== '') {
            if (columnType === 'Attachments') {
                const attachmentsArray = Array.isArray(columnValue)
                    ? columnValue
                    : JSON.parse(columnValue);
                if (Array.isArray(attachmentsArray) && attachmentsArray.length > 0) {
                    fields[columnId] = ['L', ...attachmentsArray.map(Number)];
                }
            }
            else if (columnType === 'ChoiceList') {
                if (Array.isArray(columnValue) && columnValue.length > 0) {
                    fields[columnId] = ['L', ...columnValue];
                }
            }
            else if (columnType === 'Int' || columnType === 'Numeric') {
                fields[columnId] = Number(columnValue);
            }
            else if (columnType.startsWith('RefList')) {
                const refListArray = Array.isArray(columnValue)
                    ? columnValue
                    : JSON.parse(columnValue);
                if (Array.isArray(refListArray) && refListArray.length > 0) {
                    fields[columnId] = ['L', ...refListArray.map(Number)];
                }
            }
            else if (columnType.startsWith('Ref')) {
                fields[columnId] = Number(columnValue);
            }
            else {
                fields[columnId] = columnValue;
            }
        }
    }
    return fields;
}
//# sourceMappingURL=helpers.js.map