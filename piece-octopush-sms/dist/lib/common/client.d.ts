import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.octopush.com/v1/public";
export declare function makeRequest<T>(api_key: string, api_login: string, method: HttpMethod, path: string, body?: unknown): Promise<T>;
//# sourceMappingURL=client.d.ts.map