export declare class QuickbaseClient {
    private readonly baseUrl;
    private readonly userToken;
    private readonly realmHostname;
    constructor(realmHostname: string, userToken: string);
    private makeRequest;
    private isRetryableError;
    private sleep;
    get<T>(endpoint: string): Promise<T>;
    post<T>(endpoint: string, data?: any): Promise<T>;
    patch<T>(endpoint: string, data: any): Promise<T>;
    delete<T>(endpoint: string, data?: any): Promise<T>;
}
//# sourceMappingURL=client.d.ts.map