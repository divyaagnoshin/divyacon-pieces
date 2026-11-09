"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callOperation = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@agnocon/pieces-framework");
const auth_1 = require("../auth");
const common_1 = require("../common");
const fields_1 = require("../common/fields");
const modules_1 = require("../common/modules");
const props_1 = require("../common/props");
exports.callOperation = (0, pieces_framework_1.createAction)({
    auth: auth_1.workdayAuth,
    name: 'call_operation',
    displayName: 'Call Operation',
    description: 'Calls a Workday REST sub-resource or SOAP operation (e.g. approve, close, submit).',
    audience: 'both',
    aiMetadata: {
        description: 'Invokes a Workday operation that has no dedicated action, in one of two modes: a REST sub-resource call (POST, PUT, or PATCH against a business-object path such as /jobRequisitions/{id}/close) or a raw SOAP operation against a named web service such as Staffing. Use as the escape hatch for verbs like approve, close, or submit, and prefer the specific action (e.g. Approve Task, Update Business Object) whenever one exists. Requires the operation name, plus the SOAP service name when running in SOAP mode. Not idempotent: each call submits the operation as a fresh event.',
        idempotent: false,
    },
    props: Object.assign(Object.assign({}, props_1.sharedModuleProps), { operationType: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Operation Type',
            required: true,
            defaultValue: 'rest',
            options: {
                disabled: false,
                options: [
                    { label: 'REST sub-resource', value: 'rest' },
                    { label: 'SOAP operation', value: 'soap' },
                ],
            },
        }), operationName: props_1.operationNameProperty, soapService: pieces_framework_1.Property.ShortText({
            displayName: 'SOAP Service Name',
            description: 'Required for SOAP operations, e.g. `Staffing` or `Human_Resources`.',
            required: false,
        }), httpMethod: pieces_framework_1.Property.StaticDropdown({
            displayName: 'HTTP Method',
            required: false,
            defaultValue: 'POST',
            options: {
                disabled: false,
                options: [
                    { label: 'POST', value: 'POST' },
                    { label: 'PUT', value: 'PUT' },
                    { label: 'PATCH', value: 'PATCH' },
                ],
            },
        }), body: pieces_framework_1.Property.Json({
            displayName: 'Request Body (JSON)',
            description: 'JSON payload for REST operations.',
            required: false,
        }), soapBody: pieces_framework_1.Property.LongText({
            displayName: 'SOAP Body (XML)',
            description: 'Raw SOAP operation XML, used only for SOAP operations. Leave empty to send an empty operation element.',
            required: false,
        }) }),
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            var _b;
            if (propsValue.operationType === 'soap') {
                if (!propsValue.soapService) {
                    throw new Error('SOAP Service Name is required for SOAP operations.');
                }
                const xml = propsValue.soapBody && propsValue.soapBody.trim().length > 0
                    ? propsValue.soapBody
                    : `<${propsValue.operationName} xmlns:bsvc="urn:com.workday/bsvc"/>`;
                const result = yield (0, common_1.workdaySoapRequest)(auth, propsValue.soapService, xml);
                return (0, fields_1.flattenRecord)(result);
            }
            const bo = propsValue.businessObject;
            const config = (0, modules_1.resolveBusinessObject)(propsValue.module, bo.objectType, bo.customPath, bo.customService);
            const path = propsValue.operationName.startsWith('/')
                ? propsValue.operationName
                : `${config.path}/${propsValue.operationName}`;
            const method = ((_b = propsValue.httpMethod) !== null && _b !== void 0 ? _b : 'POST');
            const body = propsValue.body && typeof propsValue.body === 'object'
                ? propsValue.body
                : undefined;
            const response = yield (0, common_1.workdayRequest)(auth, method, path, body, undefined, config.service);
            return (0, fields_1.flattenRecord)(response.body);
        });
    },
});
//# sourceMappingURL=call-operation.js.map