import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.zeplin.dev/v1";
export declare function makeRequest<T>(access_token: string, method: HttpMethod, path: string, body?: unknown): Promise<T>;
//# sourceMappingURL=client.d.ts.map