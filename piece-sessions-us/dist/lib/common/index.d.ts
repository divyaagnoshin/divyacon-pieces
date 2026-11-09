import { AiMetadata, TriggerStrategy } from '@agnocon/pieces-framework';
export declare const baseUrl = "https://api.app.sessions.us/api";
export declare const properties: {
    permission: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
};
export declare function getTimezones(): Promise<string[]>;
export declare function getEvents(auth: string): Promise<{
    id: string;
    session: {
        name: string;
    };
}[]>;
export declare function slugify(string: string): string;
export declare function createWebhook(trigger: SessionsUsWebhookTrigger, auth: string, webhookUrl: string, permission: string): Promise<{
    id: string;
}>;
export declare function deleteWebhook(webhookId: string, auth: string): Promise<any>;
export declare enum SessionsUsWebhookTrigger {
    SESSION_CREATED = "SESSION_CREATED",
    SESSION_STARTED = "SESSION_STARTED",
    SESSION_ENDED = "SESSION_ENDED",
    BOOKING_CREATED = "BOOKING_CREATED",
    BOOKING_STARTED = "BOOKING_STARTED",
    BOOKING_ENDED = "BOOKING_ENDED",
    EVENT_CREATED = "EVENT_CREATED",
    EVENT_STARTED = "EVENT_STARTED",
    EVENT_ENDED = "EVENT_ENDED",
    EVENT_PUBLISHED = "EVENT_PUBLISHED",
    EVENT_NEW_REGISTRATION = "EVENT_NEW_REGISTRATION",
    TRANSCRIPT_READY = "TRANSCRIPT_READY",
    TAKEAWAY_READY = "TAKEAWAY_READY"
}
export declare function createSessionsUsWebhookTrigger(data: CreateWebhookTriggerDto): import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    permission: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    permission: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    permission: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    permission: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
export interface CreateWebhookTriggerDto {
    name: string;
    displayName: string;
    description: string;
    aiMetadata?: AiMetadata;
    sampleData?: unknown;
    trigger: SessionsUsWebhookTrigger;
    storeKey: string;
}
//# sourceMappingURL=index.d.ts.map