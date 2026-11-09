import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function trustApiRequest<T extends HttpMessageBody>({ apiKey, method, path, body, queryParams, headers, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
    headers?: Record<string, string>;
}): Promise<HttpResponse<T>>;
//# sourceMappingURL=client.d.ts.map