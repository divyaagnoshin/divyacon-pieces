import { SignNowAuthValue } from './auth';
export declare function getUserId(token: string): Promise<string>;
export declare function registerWebhook(auth: SignNowAuthValue, event: string, entityId: string, callbackUrl: string): Promise<string>;
export declare function unregisterWebhook(auth: SignNowAuthValue, subscriptionId: string): Promise<void>;
//# sourceMappingURL=webhook.d.ts.map