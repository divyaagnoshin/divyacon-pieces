import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://enterprise.api.chainaware.ai";
export declare function makeRequest<T>(request: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
}): Promise<T>;
//# sourceMappingURL=client.d.ts.map