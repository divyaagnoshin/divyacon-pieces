import { HttpMethod } from '@agnocon/pieces-common';
type TelnyxRequestParams = {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: Record<string, unknown>;
};
export declare function telnyxRequest<TResponse>({ apiKey, method, path, body, }: TelnyxRequestParams): Promise<TResponse>;
export {};
//# sourceMappingURL=client.d.ts.map