import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.serpstat.com/v4";
export interface SerpstatApiCallProps {
    apiToken: string;
    method: HttpMethod;
    resourceUri: string;
    queryParams?: Record<string, any>;
    body?: any;
}
export declare const serpstatApiCall: ({ apiToken, method, resourceUri, queryParams, body, }: SerpstatApiCallProps) => Promise<any>;
//# sourceMappingURL=client.d.ts.map