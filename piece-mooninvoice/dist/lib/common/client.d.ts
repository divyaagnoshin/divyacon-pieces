import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://www.mooninvoice.com/api_mi/public";
export declare function getAccessToken(email: string, secretKey: string): Promise<string>;
export declare function makeRequest(accessToken: string, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map