import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.ninox.com/v1";
export declare function makeRequest<T>(api_key: string, method: HttpMethod, path: string, body?: unknown, headers?: Record<string, string> | string): Promise<T>;
//# sourceMappingURL=client.d.ts.map