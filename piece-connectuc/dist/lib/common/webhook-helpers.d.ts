import { BaseContext, InputPropertyMap, PieceAuthProperty } from '@agnocon/pieces-framework';
export declare const CONNECTUC_BASE_URL = "https://api.connectuc.io/activepieces";
export declare const CONNECTUC_WEBHOOK_TRIGGER_KEY = "connectuc_webhook";
interface WebhookResponse {
    id: string;
}
interface RegisterWebhookParams<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, Props extends InputPropertyMap> {
    auth: {
        access_token: string;
    };
    webhookUrl: string;
    event?: string;
    events?: string[];
    context: BaseContext<PieceAuth, Props>;
}
interface UnregisterWebhookParams<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, Props extends InputPropertyMap> {
    auth: {
        access_token: string;
    };
    webhookUrl: string;
    context: BaseContext<PieceAuth, Props>;
}
export declare function registerConnectUCWebhook<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, Props extends InputPropertyMap>(params: RegisterWebhookParams<PieceAuth, Props>): Promise<WebhookResponse>;
export declare function unregisterConnectUCWebhook<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, Props extends InputPropertyMap>(params: UnregisterWebhookParams<PieceAuth, Props>): Promise<void>;
export {};
//# sourceMappingURL=webhook-helpers.d.ts.map