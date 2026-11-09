import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://sofya.co/v1";
type MakeRequestParams = {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
};
export declare function makeRequest<T = unknown>({ token, method, path, body, }: MakeRequestParams): Promise<T>;
export {};
//# sourceMappingURL=client.d.ts.map