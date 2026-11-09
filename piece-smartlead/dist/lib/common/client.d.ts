import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://server.smartlead.ai/api/v1";
export declare function smartleadRequest<T = Record<string, unknown>>({ endpoint, method, apiKey, body, queryParams, }: {
    endpoint: string;
    method: HttpMethod;
    apiKey: string;
    body?: Record<string, unknown>;
    queryParams?: Record<string, string | number | boolean>;
}): Promise<T>;
//# sourceMappingURL=client.d.ts.map