export declare const subscribeWebhook: (auth: string, storeId: string, events: string[], targetUrl: string, secret: string) => Promise<any>;
export declare const unsubscribeWebhook: (auth: string, webhookId: string) => Promise<void>;
export declare const getStores: (auth: string) => Promise<any>;
export declare const createStoreDropdownProperty: () => import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const generateWebhookSecret: () => string;
export declare const createWebhookTriggerKey: (eventName: string) => string;
//# sourceMappingURL=webhook.d.ts.map