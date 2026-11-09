export declare class OutsetaClient {
    private readonly baseUrl;
    private readonly authHeader;
    constructor(auth: OutsetaAuth);
    get<T>(path: string): Promise<T>;
    put<T>(path: string, body: unknown): Promise<T>;
    post<T>(path: string, body: unknown): Promise<T>;
    delete<T>(path: string): Promise<T>;
    getAllPages<T>(basePath: string, pageSize?: number): Promise<T[]>;
    private request;
}
type OutsetaAuth = {
    domain: string;
    apiKey: string;
    apiSecret: string;
};
export {};
//# sourceMappingURL=client.d.ts.map