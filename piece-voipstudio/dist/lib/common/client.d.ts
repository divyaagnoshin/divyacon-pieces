import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://l7api.com/v1.2/voipstudio";
export declare function makeRequest<T>(auth_token: string, method: HttpMethod, path: string, body?: unknown): Promise<T>;
//# sourceMappingURL=client.d.ts.map