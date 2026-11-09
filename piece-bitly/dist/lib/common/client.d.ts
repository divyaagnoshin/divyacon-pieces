import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export type BitlyAuthProps = {
    accessToken: string;
};
export type BitlyApiCallParams = {
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
    auth: BitlyAuthProps;
};
export declare function bitlyApiCall<T extends HttpMessageBody>({ method, resourceUri, query, body, auth, }: BitlyApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map