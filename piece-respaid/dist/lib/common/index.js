"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respaidTriggersCommon = exports.respaidActionsCommon = exports.respaidCommon = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
exports.respaidCommon = {
    baseUrl: 'https://backend.widr.app/api/workflow',
    getHeadersStructure: (auth) => ({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-API-KEY': auth
    }),
};
exports.respaidActionsCommon = {
    getPayloadBodyStructure: (propsValue) => ({
        type: 'active_pieces',
        payload: JSON.stringify(Object.assign(Object.assign(Object.assign(Object.assign({}, (propsValue.unique_identifier && { unique_identifier: propsValue.unique_identifier })), (propsValue.invoice_number && { invoice_number: propsValue.invoice_number })), (propsValue.amount && { amount: propsValue.amount })), (propsValue.email && { email: propsValue.email })))
    }),
    validateProps: (propsValue) => {
        const { unique_identifier, email } = propsValue;
        if (!unique_identifier && !email) {
            throw new Error('You must provide either a unique_identifier OR email.');
        }
    }
};
exports.respaidTriggersCommon = {
    onEnable: (eventType) => (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('Trigger enabled, subscribing to webhook');
            yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `${exports.respaidCommon.baseUrl}/webhook/subscribe`,
                headers: exports.respaidCommon.getHeadersStructure(context.auth.secret_text),
                body: {
                    type: 'active_pieces',
                    event_type: eventType,
                    target_url: context.webhookUrl,
                },
            });
        }
        catch (error) {
            console.error('Error subscribing to webhook:', error);
            throw new Error('Failed to subscribe to webhook');
        }
    }),
    onDisable: (eventType) => (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('Trigger disabled, unsubscribing from webhook');
            yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.DELETE,
                url: `${exports.respaidCommon.baseUrl}/webhook/unsubscribe`,
                headers: exports.respaidCommon.getHeadersStructure(context.auth.secret_text),
                body: {
                    type: 'active_pieces',
                    event_type: eventType,
                    target_url: context.webhookUrl,
                },
            });
        }
        catch (error) {
            console.error('Error unsubscribing from webhook:', error);
            throw new Error('Failed to unsubscribe to webhook');
        }
    }),
    getPayload: (context) => {
        return typeof context.payload.body === 'string'
            ? JSON.parse(context.payload.body)
            : context.payload;
    }
};
//# sourceMappingURL=index.js.map