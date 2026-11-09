import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export type BrowseAiAuthProps = {
    apiKey: string;
};
export type BrowseAiApiCallParams = {
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: unknown;
    auth: BrowseAiAuthProps;
};
export declare function browseAiApiCall<T extends HttpMessageBody>({ method, resourceUri, query, body, auth, }: BrowseAiApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map