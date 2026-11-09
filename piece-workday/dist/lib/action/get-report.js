"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReport = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@agnocon/pieces-framework");
const auth_1 = require("../auth");
const common_1 = require("../common");
const fields_1 = require("../common/fields");
const props_1 = require("../common/props");
exports.getReport = (0, pieces_framework_1.createAction)({
    auth: auth_1.workdayAuth,
    name: 'get_report',
    displayName: 'Get Report',
    description: 'Fetches a Workday report by ID or web service alias.',
    audience: 'both',
    aiMetadata: {
        description: 'Runs a published Workday custom report, addressed by its report ID or web service alias, and returns its rows, optionally passing report prompt values as JSON. Use when the data is already shaped by a report definition in the tenant; prefer Find Records (WQL) or Get Report using WQL (Batch) when the query can be expressed in WQL instead. Read-only and idempotent.',
        idempotent: true,
    },
    props: {
        reportId: props_1.reportIdProperty,
        reportParameters: pieces_framework_1.Property.Json({
            displayName: 'Report Parameters (JSON)',
            description: 'Optional report prompt values as JSON key-value pairs.',
            required: false,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            const report = yield (0, common_1.workdayGetReport)(auth, propsValue.reportId, propsValue.reportParameters);
            const rows = Array.isArray(report['data'])
                ? report['data']
                : Array.isArray(report['Report_Entry'])
                    ? report['Report_Entry']
                    : [report];
            return {
                total_count: rows.length,
                report_id: propsValue.reportId,
                records: rows.map((row) => (0, fields_1.flattenRecord)(row)),
            };
        });
    },
});
//# sourceMappingURL=get-report.js.map