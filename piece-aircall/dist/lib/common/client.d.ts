import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.aircall.io/v1";
export declare function makeRequest(auth: {
    username: string;
    password: string;
}, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map