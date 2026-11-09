import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { shortIoAuth } from './auth';
export type ShortioAuthProps = AppConnectionValueForAuthProperty<typeof shortIoAuth>;
export type ShortioApiCallParams = {
    method: HttpMethod;
    resourceUri?: string;
    url?: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: unknown;
    auth: ShortioAuthProps;
};
export declare function shortIoApiCall<T extends HttpMessageBody>({ method, resourceUri, url, query, body, auth, }: ShortioApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map