"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseWebhookPayload = parseWebhookPayload;
function parseWebhookPayload(payload) {
    const result = {
        contacts: [],
        messages: [],
        statuses: [],
    };
    if (!payload || typeof payload !== 'object') {
        return result;
    }
    const body = payload;
    const entry = body['entry'];
    if (!Array.isArray(entry)) {
        return result;
    }
    for (const e of entry) {
        const changes = e['changes'];
        if (!Array.isArray(changes))
            continue;
        for (const change of changes) {
            const value = change['value'];
            if (!value)
                continue;
            const metadata = value['metadata'];
            if (metadata) {
                result.phoneNumberId = metadata['phone_number_id'];
                result.displayPhoneNumber = metadata['display_phone_number'];
            }
            const contacts = value['contacts'];
            if (Array.isArray(contacts)) {
                result.contacts.push(...contacts);
            }
            const messages = value['messages'];
            if (Array.isArray(messages)) {
                result.messages.push(...messages);
            }
            const statuses = value['statuses'];
            if (Array.isArray(statuses)) {
                result.statuses.push(...statuses);
            }
        }
    }
    return result;
}
//# sourceMappingURL=webhook.js.map