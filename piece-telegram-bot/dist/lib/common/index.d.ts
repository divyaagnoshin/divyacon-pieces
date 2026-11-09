import { telegramBotAuth } from '../..';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export type SetWebhookRequest = {
    ip_address: string;
    max_connections: number;
    allowed_updates: string[];
    drop_pending_updates: boolean;
    secret_token: string;
};
export declare const telegramCommons: {
    getApiUrl: (auth: AppConnectionValueForAuthProperty<typeof telegramBotAuth>, methodName: string) => string;
    subscribeWebhook: (botToken: string, webhookUrl: string, overrides?: Partial<SetWebhookRequest>) => Promise<void>;
    unsubscribeWebhook: (botToken: string) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    chatIdInstructions: () => import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    formatLinkInstructions: () => import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    chatIdProp: () => import("@agnocon/pieces-framework").ShortTextProperty<true>;
    messageThreadIdProp: () => import("@agnocon/pieces-framework").ShortTextProperty<false>;
    parseModeProp: () => import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    replyMarkupProp: () => import("@agnocon/pieces-framework").JsonProperty<false>;
    disableNotificationProp: () => import("@agnocon/pieces-framework").CheckboxProperty<false>;
    protectContentProp: () => import("@agnocon/pieces-framework").CheckboxProperty<false>;
    replyToMessageIdProp: () => import("@agnocon/pieces-framework").NumberProperty<false>;
    resolveParseMode: (value: string | undefined) => string | undefined;
};
//# sourceMappingURL=index.d.ts.map