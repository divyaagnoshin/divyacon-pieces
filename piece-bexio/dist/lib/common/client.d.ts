import { HttpMethod } from '@agnocon/pieces-common';
export declare class BexioClient {
    private auth;
    constructor(auth: {
        access_token: string;
    });
    makeRequest<T>(method: HttpMethod, endpoint: string, data?: unknown, queryParams?: Record<string, string>): Promise<T>;
    get<T>(endpoint: string, queryParams?: Record<string, string>): Promise<T>;
    post<T>(endpoint: string, data: unknown, queryParams?: Record<string, string>): Promise<T>;
    patch<T>(endpoint: string, data: unknown): Promise<T>;
    delete<T>(endpoint: string): Promise<T>;
}
//# sourceMappingURL=client.d.ts.map