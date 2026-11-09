import { HttpMethod } from '@agnocon/pieces-common';
export declare function makeRequest<T = unknown>({ token, method, path, body, }: MakeRequestParams): Promise<T>;
export declare const BASE_URL = "https://api.bochaai.com/v1";
type MakeRequestParams = {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
};
export {};
//# sourceMappingURL=client.d.ts.map