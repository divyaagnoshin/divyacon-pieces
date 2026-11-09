import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://panel.letscalendar.com/api/lc";
export declare function getAccessToken(client_key: string, secret_key: string): Promise<string>;
export declare function makeRequest(accessToken: string, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map