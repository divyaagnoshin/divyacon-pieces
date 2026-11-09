export declare const webhookInstructions: (eventLabel: string) => string;
export declare const toolFilterProperty: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
type WebhookEnvelope = {
    event?: string;
    data?: {
        task?: {
            tool?: string;
        } & Record<string, unknown>;
        signature?: Record<string, unknown>;
        signer?: Record<string, unknown>;
    } & Record<string, unknown>;
} & Record<string, unknown>;
export declare function extractEnvelope(body: unknown): WebhookEnvelope | null;
export declare function matchesEvent({ body, expectedEvent, }: {
    body: unknown;
    expectedEvent: string;
}): WebhookEnvelope | null;
export declare function matchesToolFilter({ envelope, tools, }: {
    envelope: WebhookEnvelope;
    tools?: string[] | null;
}): boolean;
export {};
//# sourceMappingURL=common.d.ts.map