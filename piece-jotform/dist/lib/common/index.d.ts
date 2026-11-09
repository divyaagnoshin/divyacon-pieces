import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { jotformAuth } from '../..';
export declare const jotformCommon: {
    baseUrl: (region: string) => "https://eu-api.jotform.com" | "https://hipaa-api.jotform.com" | "https://api.jotform.com";
    form: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    getUserForms: (apiKey: string, region: string) => Promise<any>;
    subscribeWebhook: (formId: any, webhookUrl: string, authentication: AppConnectionValueForAuthProperty<typeof jotformAuth>) => Promise<void>;
    unsubscribeWebhook: (formId: any, webhookUrl: string, authentication: AppConnectionValueForAuthProperty<typeof jotformAuth>) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
export interface JotformForm {
    id: string;
    username: string;
    title: string;
    height: string;
    status: string;
    created_at: string;
    updated_at: string;
    last_submission: string;
    new: string;
    count: string;
    type: string;
    favorite: string;
    archived: string;
    url: string;
}
export interface WebhookInformation {
    jotformWebhook: string;
}
//# sourceMappingURL=index.d.ts.map