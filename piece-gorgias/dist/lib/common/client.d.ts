import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { GorgiasAuth } from '../auth';
export type GorgiasPaginationMeta = {
    prev_cursor?: string | null;
    next_cursor?: string | null;
};
export type GorgiasListResponse<T> = {
    data: T[];
    object: string;
    uri: string;
    meta: GorgiasPaginationMeta;
};
export type GorgiasCustomer = {
    id: number;
    email?: string;
    name?: string;
    channels?: Array<{
        address?: string;
    }>;
    [key: string]: unknown;
};
export type GorgiasRequestParams = {
    auth: GorgiasAuth;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
};
export declare function gorgiasApiCall<T extends HttpMessageBody>({ auth, method, resourceUri, query, body, }: GorgiasRequestParams): Promise<T>;
export declare function findCustomerByEmail(auth: GorgiasAuth, email: string): Promise<GorgiasCustomer | null>;
//# sourceMappingURL=client.d.ts.map