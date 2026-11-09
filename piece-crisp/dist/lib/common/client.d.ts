import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { crispAuth } from './auth';
export declare const BASE_URL = "https://api.crisp.chat/v1";
export type CrispApiCallParams = {
    auth: AppConnectionValueForAuthProperty<typeof crispAuth>;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare function crispApiCall<T extends HttpMessageBody>({ auth, method, resourceUri, query, body, }: CrispApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map