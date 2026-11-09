import { PaddleAuthType } from '../auth';
declare function validateAuth({ apiKey, }: {
    apiKey: string;
}): Promise<void>;
declare function listCustomers({ auth, limit, email, status, }: {
    auth: PaddleAuthType;
    limit?: number;
    email?: string;
    status?: PaddleCustomerStatus;
}): Promise<PaddleCustomer[]>;
declare function listSubscriptions({ auth, limit, customerId, status, }: {
    auth: PaddleAuthType;
    limit?: number;
    customerId?: string;
    status?: PaddleSubscriptionStatus;
}): Promise<PaddleSubscription[]>;
declare function listPrices({ auth, limit, recurring, }: {
    auth: PaddleAuthType;
    limit?: number;
    recurring?: boolean;
}): Promise<PaddlePrice[]>;
declare function getSubscription({ auth, subscriptionId, }: {
    auth: PaddleAuthType;
    subscriptionId: string;
}): Promise<PaddleSubscription>;
declare function updateSubscription({ auth, subscriptionId, request, }: {
    auth: PaddleAuthType;
    subscriptionId: string;
    request: Record<string, unknown>;
}): Promise<PaddleSubscription>;
declare function listAddresses({ auth, customerId, }: {
    auth: PaddleAuthType;
    customerId: string;
}): Promise<Array<{
    id: string;
}>>;
declare function createNotificationSetting({ auth, url, subscribedEvents, }: {
    auth: PaddleAuthType;
    url: string;
    subscribedEvents: string[];
}): Promise<{
    id: string;
}>;
declare function deleteNotificationSetting({ auth, notificationSettingId, }: {
    auth: PaddleAuthType;
    notificationSettingId: string;
}): Promise<void>;
declare function cancelSubscription({ auth, subscriptionId, request, }: {
    auth: PaddleAuthType;
    subscriptionId: string;
    request: Record<string, unknown>;
}): Promise<PaddleSubscription>;
declare function createTransaction({ auth, request, }: {
    auth: PaddleAuthType;
    request: Record<string, unknown>;
}): Promise<PaddleTransaction>;
declare function getBaseUrl({ apiKey, }: {
    apiKey: string;
}): string;
declare const paddleClient: {
    cancelSubscription: typeof cancelSubscription;
    createNotificationSetting: typeof createNotificationSetting;
    createTransaction: typeof createTransaction;
    deleteNotificationSetting: typeof deleteNotificationSetting;
    getBaseUrl: typeof getBaseUrl;
    getSubscription: typeof getSubscription;
    listAddresses: typeof listAddresses;
    listCustomers: typeof listCustomers;
    listPrices: typeof listPrices;
    listSubscriptions: typeof listSubscriptions;
    updateSubscription: typeof updateSubscription;
    validateAuth: typeof validateAuth;
};
type PaddleCustomer = {
    id: string;
    name?: string | null;
    email?: string | null;
    status?: PaddleCustomerStatus;
};
type PaddlePrice = {
    id: string;
    name?: string | null;
    description?: string | null;
    status?: string | null;
    unit_price?: {
        amount?: string | null;
        currency_code?: string | null;
    };
};
type PaddleSubscription = {
    id: string;
    customer_id?: string | null;
    status?: PaddleSubscriptionStatus;
    items?: Array<{
        price?: {
            id?: string | null;
            name?: string | null;
        };
        quantity?: number | null;
    }>;
};
type PaddleTransaction = {
    id: string;
    status?: string | null;
    checkout?: {
        url?: string | null;
    } | null;
};
type PaddleCustomerStatus = 'active' | 'archived';
type PaddleSubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'paused' | 'trialing';
export { paddleClient };
//# sourceMappingURL=client.d.ts.map