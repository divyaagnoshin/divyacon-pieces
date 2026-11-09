import { HttpMethod, QueryParams } from "@agnocon/pieces-common";
export declare const uscreenApiUrl = "https://api.uscreen.io/v1";
export declare const uscreenPublisherApiUrl = "https://uscreen.io/publisher_api/v1";
export interface UscreenProduct {
    id: number;
    name: string;
}
export interface UscreenInvoice {
    id: string;
    title: string;
    total: string;
    amount: string;
    discount: string;
    offer_id: string;
    customer_name: string;
    customer_email: string;
    status: string;
    paid_at: string;
    created_at: string;
    [key: string]: unknown;
}
export declare class UscreenClient {
    private apiKey;
    constructor(apiKey: string);
    /**
     * Makes an authenticated request to the Uscreen PUBLISHER API.
     */
    makeRequest<T>(method: HttpMethod, url: string, body?: object, query?: QueryParams): Promise<T>;
    /**
     * Fetches a paginated list of invoices, sorted by payment date.
     */
    getInvoices(params: {
        sort_by: string;
        status: string;
        per_page?: number;
    }): Promise<{
        items: UscreenInvoice[];
    }>;
    /**
     * Fetches a list of offers (subscriptions).
     */
    getOffers(): Promise<UscreenProduct[]>;
    /**
     * Fetches a list of programs (bundles).
     */
    getPrograms(): Promise<UscreenProduct[]>;
    getCustomers(): Promise<{
        id: number;
        email: string;
    }[]>;
}
//# sourceMappingURL=client.d.ts.map