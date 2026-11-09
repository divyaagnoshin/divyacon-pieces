import { RequestOptions, SerpApiConfig, SerpApiResponse } from '../types';
export interface SerpApiClientConfig {
    /** Base URL for SerpApi */
    baseUrl?: string;
    /** Default timeout for requests */
    defaultTimeout?: number;
    /** Default number of retries */
    defaultRetries?: number;
    /** Default delay between retries (ms) */
    defaultRetryDelay?: number;
    /** Enable request/response logging */
    enableLogging?: boolean;
}
export declare class SerpApiClient {
    private readonly baseUrl;
    private readonly defaultTimeout;
    private readonly defaultRetries;
    private readonly defaultRetryDelay;
    private readonly enableLogging;
    constructor(config?: SerpApiClientConfig);
    executeSearch<T = any>(config: SerpApiConfig, options?: RequestOptions): Promise<SerpApiResponse<T>>;
    validateApiKey(apiKey: string): Promise<boolean>;
    private executeWithRetry;
    private makeHttpRequest;
    private buildQueryParams;
    private transformResponse;
    private handleHttpError;
    private shouldNotRetry;
    private calculateRetryDelay;
    private sleep;
    private sanitizeParamsForLogging;
    getClientInfo(): SerpApiClientConfig;
}
//# sourceMappingURL=serp-api-client.d.ts.map