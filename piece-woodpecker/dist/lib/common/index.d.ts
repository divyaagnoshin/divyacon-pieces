import { HttpMethod } from '@agnocon/pieces-common';
export declare const API_BASE_URL = "https://api.woodpecker.co/rest";
export declare const WEBHOOK_EVENTS: {
    readonly PROSPECT_REPLIED: "prospect_replied";
    readonly PROSPECT_BLACKLISTED: "prospect_blacklisted";
    readonly PROSPECT_OPTOUT: "prospect_opt_out";
    readonly PROSPECT_BOUNCED: "prospect_bounced";
    readonly PROSPECT_INVALID: "prospect_invalid";
    readonly PROSPECT_AUTOREPLIED: "prospect_autoreplied";
    readonly PROSPECT_SAVED: "prospect_saved";
    readonly PROSPECT_NONRESPONSIVE: "prospect_non_responsive";
    readonly LINK_CLICKED: "link_clicked";
    readonly EMAIL_OPENED: "email_opened";
    readonly PROSPECT_INTERESTED: "prospect_interested";
    readonly PROSPECT_MAYBE_LATER: "prospect_maybe_later";
    readonly PROSPECT_NOT_INTERESTED: "prospect_not_interested";
    readonly EMAIL_SENT: "campaign_sent";
    readonly FOLLOWUP_AFTER_AUTOREPLY: "followup_after_autoreply";
    readonly SECONDARY_REPLIED: "secondary_replied";
    readonly CAMPAIGN_COMPLETED: "campaign_completed";
    readonly TASK_CREATED: "task_created";
    readonly TASK_DONE: "task_done";
    readonly TASK_IGNORED: "task_ignored";
};
export type WebhookEvent = (typeof WEBHOOK_EVENTS)[keyof typeof WEBHOOK_EVENTS];
export declare function subscribeWebhook(auth: string, webhookUrl: string, event: WebhookEvent): Promise<void>;
export declare function unsubscribeWebhook(auth: string, webhookUrl: string, event: WebhookEvent): Promise<void>;
export declare const campaignsDropdown: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const woodpeckerClient: {
    makeRequest<T>(auth: string, method: HttpMethod, endpoint: string, body?: unknown, queryParams?: Record<string, string>): Promise<T>;
};
//# sourceMappingURL=index.d.ts.map