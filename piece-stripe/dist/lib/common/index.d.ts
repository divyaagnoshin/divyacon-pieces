import { Stripe } from 'stripe';
export declare const getClient: (apiKey: string) => Stripe;
export declare const stripeCommon: {
    baseUrl: string;
    subscribeWebhook: (eventName: string, webhookUrl: string, apiKey: string) => Promise<{
        id: string;
    }>;
    unsubscribeWebhook: (webhookId: string, apiKey: string) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    invoice: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    customer: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    product: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    price: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    subscription: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    payout: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    paymentIntent: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    paymentLink: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=index.d.ts.map