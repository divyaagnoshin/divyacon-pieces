import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
interface NetSuiteAuth {
    accountId: string;
    consumerKey: string;
    consumerSecret: string;
    tokenId: string;
    tokenSecret: string;
}
interface MakeRequestParams {
    method: HttpMethod;
    url: string;
    queryParams?: QueryParams;
    body?: unknown;
}
export declare class NetSuiteClient {
    private auth;
    constructor(auth: NetSuiteAuth);
    get baseUrl(): string;
    makeRequest<T>({ method, url, queryParams, body, }: MakeRequestParams): Promise<T>;
    makePaginatedRequest<T>({ method, url, body, }: Omit<MakeRequestParams, 'queryParams'>): Promise<T[]>;
}
export {};
//# sourceMappingURL=client.d.ts.map