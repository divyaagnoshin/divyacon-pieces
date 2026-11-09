export interface ParsedWebhook {
    phoneNumberId?: string;
    displayPhoneNumber?: string;
    contacts: Array<Record<string, unknown>>;
    messages: Array<Record<string, unknown>>;
    statuses: Array<Record<string, unknown>>;
}
export declare function parseWebhookPayload(payload: unknown): ParsedWebhook;
//# sourceMappingURL=webhook.d.ts.map