"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPolling = buildPolling;
exports.buildProjectTasksPolling = buildProjectTasksPolling;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
const common_1 = require("../common");
function buildPolling(path, timestampField) {
    return {
        strategy: pieces_common_1.DedupeStrategy.TIMEBASED,
        items: (_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ auth }) {
            const a = (0, common_1.getAuth)({ auth });
            const response = yield (0, common_1.ninjapipeApiCall)({
                auth: a,
                method: pieces_common_1.HttpMethod.GET,
                path,
                queryParams: { limit: '100', sort: timestampField, order: 'desc' },
            });
            const items = (0, common_1.extractItems)(response.body);
            return items.map((item) => {
                var _a, _b;
                const record = item;
                const ts = ((_b = (_a = record[timestampField]) !== null && _a !== void 0 ? _a : record['created_at']) !== null && _b !== void 0 ? _b : record['updated_at']);
                return {
                    epochMilliSeconds: ts ? new Date(ts).getTime() : Date.now(),
                    data: (0, common_1.flattenCustomFields)(record),
                };
            });
        }),
    };
}
function buildProjectTasksPolling(timestampField) {
    return {
        strategy: pieces_common_1.DedupeStrategy.TIMEBASED,
        items: (_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ auth, propsValue }) {
            const projectId = propsValue.projectId;
            if (!projectId)
                return [];
            const a = (0, common_1.getAuth)({ auth });
            const response = yield (0, common_1.ninjapipeApiCall)({
                auth: a,
                method: pieces_common_1.HttpMethod.GET,
                path: `/projects/${projectId}/tasks`,
                queryParams: { sort_by: timestampField, sort_order: 'desc' },
            });
            const items = (0, common_1.extractItems)(response.body);
            return items.map((item) => {
                var _a, _b;
                const record = item;
                const ts = ((_b = (_a = record[timestampField]) !== null && _a !== void 0 ? _a : record['created_at']) !== null && _b !== void 0 ? _b : record['updated_at']);
                return {
                    epochMilliSeconds: ts ? new Date(ts).getTime() : Date.now(),
                    data: (0, common_1.flattenCustomFields)(record),
                };
            });
        }),
    };
}
//# sourceMappingURL=common.js.map