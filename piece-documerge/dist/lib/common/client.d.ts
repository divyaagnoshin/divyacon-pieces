import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
export declare class DocuMergeClient {
    private readonly apiKey;
    constructor(apiKey: string);
    makeRequest<T>(method: HttpMethod, endpoint: string, body?: unknown, queryParams?: QueryParams): Promise<T>;
    get<T>(endpoint: string, queryParams?: QueryParams): Promise<T>;
    post<T>(endpoint: string, body?: unknown, queryParams?: QueryParams): Promise<T>;
    patch<T>(endpoint: string, body?: unknown, queryParams?: QueryParams): Promise<T>;
    put<T>(endpoint: string, body?: unknown, queryParams?: QueryParams): Promise<T>;
    delete<T>(endpoint: string, queryParams?: QueryParams): Promise<T>;
    makeBinaryRequest(method: HttpMethod, endpoint: string, body?: unknown, queryParams?: QueryParams): Promise<ArrayBuffer>;
}
//# sourceMappingURL=client.d.ts.map