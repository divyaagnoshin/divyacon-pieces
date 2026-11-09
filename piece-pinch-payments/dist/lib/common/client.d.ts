import { HttpMethod } from '@agnocon/pieces-common';
import { PinchPaymentsAuthCredentials } from './auth';
export declare function pinchPaymentsClient(credentials: PinchPaymentsAuthCredentials, method: HttpMethod, endpoint: string, body?: unknown, queryParams?: Record<string, string>): Promise<any>;
export interface PinchPayer {
    id?: string;
    firstName: string;
    lastName?: string;
    emailAddress: string;
    mobileNumber?: string;
    streetAddress?: string;
    suburb?: string;
    state?: string;
    postcode?: string;
    country?: string;
    companyName?: string;
    companyRegistrationNumber?: string;
    metadata?: string;
    source?: {
        sourceType: 'bank-account' | 'credit-card';
        token: string;
    };
}
export interface ListPayersParams {
    page?: number;
    pageSize?: number;
    filter?: string;
}
export declare function createOrUpdatePayer(credentials: PinchPaymentsAuthCredentials, payer: PinchPayer): Promise<any>;
export declare function listPayers(credentials: PinchPaymentsAuthCredentials, params?: ListPayersParams): Promise<any>;
export interface ListPlansParams {
    page?: number;
    pageSize?: number;
}
export declare function listPlans(credentials: PinchPaymentsAuthCredentials, params?: ListPlansParams): Promise<any>;
export interface CreateSubscriptionParams {
    planId: string;
    payerId: string;
    totalAmount?: number;
    startDate?: string;
    surcharge?: string[];
    sourceId?: string;
}
export declare function createSubscription(credentials: PinchPaymentsAuthCredentials, subscription: CreateSubscriptionParams): Promise<any>;
export interface CreateWebhookParams {
    uri: string;
    webhookFormat?: 'pascal-case' | 'camel-case';
    eventTypes?: string[];
}
export interface WebhookResponse {
    id: string;
    uri: string;
    secret: string;
    eventTypes: string[];
}
export declare function createWebhook(credentials: PinchPaymentsAuthCredentials, webhook: CreateWebhookParams): Promise<WebhookResponse>;
export declare function deleteWebhook(credentials: PinchPaymentsAuthCredentials, webhookId: string): Promise<void>;
//# sourceMappingURL=client.d.ts.map