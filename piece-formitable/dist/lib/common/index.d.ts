import { HttpMethod } from '@agnocon/pieces-common';
export declare const formitableCommon: {
    baseUrl: string;
    restaurant: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export interface Restaurant {
    uid: string;
    name: string;
}
export interface WebhookResponse {
    uid: string;
    events: string[];
    url: string;
    secretKey: string;
}
export declare function formitableApiCall<T>({ apiKey, method, endpoint, body, queryParams, }: {
    apiKey: string;
    method: HttpMethod;
    endpoint: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<T>;
export declare function createWebhook({ apiKey, restaurantUid, webhookUrl, events, secretKey, }: {
    apiKey: string;
    restaurantUid: string;
    webhookUrl: string;
    events: string[];
    secretKey: string;
}): Promise<WebhookResponse>;
export declare function deleteWebhook({ apiKey, restaurantUid, webhookUid, }: {
    apiKey: string;
    restaurantUid: string;
    webhookUid: string;
}): Promise<void>;
//# sourceMappingURL=index.d.ts.map