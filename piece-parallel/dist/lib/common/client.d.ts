import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
declare function callApi<TResponse extends HttpMessageBody>({ apiKey, method, path, body, queryParams, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<TResponse>;
export declare const parallelClient: {
    request: typeof callApi;
};
export declare const PARALLEL_BASE_URL = "https://api.parallel.ai";
export declare const TASK_PROCESSORS: {
    label: string;
    value: string;
}[];
export declare const FINDALL_GENERATORS: {
    label: string;
    value: string;
}[];
export {};
//# sourceMappingURL=client.d.ts.map