import { HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
declare function callFileApi({ apiKey, endpoint, body, }: {
    apiKey: string;
    endpoint: string;
    body: Record<string, unknown>;
}): Promise<HttpResponse<ArrayBuffer>>;
declare function callJsonApi<T extends HttpMessageBody>({ apiKey, endpoint, body, }: {
    apiKey: string;
    endpoint: string;
    body: Record<string, unknown>;
}): Promise<HttpResponse<T>>;
declare function fileNameFromHeaders(headers: Record<string, string | string[] | undefined> | undefined, fallback: string): string;
export declare const pdf4meCommon: {
    BASE_URL: string;
    callFileApi: typeof callFileApi;
    callJsonApi: typeof callJsonApi;
    fileNameFromHeaders: typeof fileNameFromHeaders;
};
export {};
//# sourceMappingURL=index.d.ts.map