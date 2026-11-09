export declare const BASE_URL = "https://api.zagomail.com";
export declare const API_ENDPOINTS: {
    CREATE_SUBSCRIBER: string;
    UPDATE_SUBSCRIBER: string;
    UNSUBSCRIBE_SUBSCRIBER: string;
    SEARCH_SUBSCRIBER_BY_EMAIL: string;
    GET_SUBSCRIBER: string;
    GET_CAMPAIGNS: string;
    ADD_TAG_TO_SUBSCRIBER: string;
    GET_TAGS: string;
    CREATE_TAG: string;
    CREATE_WEBHOOK: string;
    DELETE_WEBHOOK: string;
    LIST_ALL_LISTS: string;
    GET_LIST_FIELDS: string;
};
export type WebhookResponse = {
    id: string;
    event_type: string;
    target_url: string;
    form_id: string | null;
    tag_id: string | null;
    link_url: string | null;
};
export type StoredWebhookId = {
    webhookId: string;
};
export interface Tag {
    ztag_id: string;
    ztag_name: string;
    customer_id: number;
    created_on: Date;
}
//# sourceMappingURL=constants.d.ts.map