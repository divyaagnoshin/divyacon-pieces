import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { instantlyAiAuth } from '../auth';
export declare const BASE_URL = "https://api.instantly.ai/api/v2";
export declare function makeRequest({ endpoint, method, apiKey, body, queryParams, }: {
    endpoint: string;
    method: HttpMethod;
    apiKey: AppConnectionValueForAuthProperty<typeof instantlyAiAuth>;
    body?: Record<string, unknown>;
    queryParams?: Record<string, string | number | boolean>;
}): Promise<any>;
//# sourceMappingURL=client.d.ts.map