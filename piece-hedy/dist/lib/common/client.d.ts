import { HttpMethod } from '@agnocon/pieces-common';
import { HedyResponse } from './types';
export interface PaginationOptions {
    returnAll?: boolean;
    limit?: number;
    after?: string;
    before?: string;
    topicId?: string;
    format?: 'standard' | 'zapier';
}
interface RequestOptions {
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, unknown>;
}
export declare class HedyApiClient {
    private readonly apiKey;
    private readonly baseUrl;
    constructor(apiKey: string, region?: string);
    request<T>(options: RequestOptions): Promise<HedyResponse<T>>;
    paginate<T>(path: string, options?: PaginationOptions): Promise<T[]>;
    private performRequest;
    private withRetry;
    private shouldRetry;
    private delay;
}
export declare function createClient(auth: unknown): HedyApiClient;
export declare function unwrapResource<T>(result: HedyResponse<T>): T;
export {};
//# sourceMappingURL=client.d.ts.map