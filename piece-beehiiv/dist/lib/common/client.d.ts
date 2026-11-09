import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export declare const BEEHIIV_API_URL = "https://api.beehiiv.com/v2";
export type BeehiivApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare function beehiivApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: BeehiivApiCallParams): Promise<T>;
export declare function BeehiivPaginatedApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: BeehiivApiCallParams): Promise<T[]>;
export interface WebhookPayload {
    data: Record<string, any>;
    event_timestamp: number;
    event_type: string;
    uid: string;
}
//# sourceMappingURL=client.d.ts.map