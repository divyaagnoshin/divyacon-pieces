import { HttpMethod } from '@agnocon/pieces-common';
export declare const BUTTONDOWN_BASE_URL = "https://api.buttondown.com/v1";
type QueryValue = string | number | boolean | Array<string | number | boolean> | undefined;
export interface ButtondownRequest {
    auth: string;
    method: HttpMethod;
    path: string;
    query?: Record<string, QueryValue>;
    body?: unknown;
    headers?: Record<string, string | undefined>;
}
export interface ButtondownPagedResponse<T> {
    results: T[];
    count: number;
    next?: string | null;
    previous?: string | null;
}
export declare const buttondownRequest: <TResponse>({ auth, method, path, query, body, headers, }: ButtondownRequest) => Promise<TResponse>;
export {};
//# sourceMappingURL=client.d.ts.map