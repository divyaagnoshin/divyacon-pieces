import { Broadcast, CustomField, Form, Purchase, Sequence, Subscriber, Tag, Webhook } from './types';
export declare const fetchBroadcasts: (auth: string, page: number) => Promise<Broadcast[]>;
export declare const fetchCustomFields: (auth: string) => Promise<CustomField[]>;
export declare const fetchForms: (auth: string) => Promise<Form[]>;
export declare const fetchPurchases: (auth: string, page: number) => Promise<Purchase[]>;
export declare const fetchSequences: (auth: string) => Promise<Sequence[]>;
export declare const fetchSubscriperById: (auth: string, subscriberId: string) => Promise<Subscriber>;
export declare const fetchSubscriberByEmail: (auth: string, email_address: string) => Promise<Subscriber>;
export declare const fetchSubscribedTags: (auth: string, subscriberId: string) => Promise<Tag[]>;
export declare const fetchTags: (auth: string) => Promise<Tag[]>;
export declare const createWebhook: (auth: string, payload: object) => Promise<Webhook>;
export declare const removeWebhook: (auth: string, ruleId: number) => Promise<true>;
//# sourceMappingURL=service.d.ts.map