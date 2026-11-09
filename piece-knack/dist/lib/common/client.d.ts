import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { knackAuth } from './auth';
export type KnackAuthProps = {
    apiKey: string;
    applicationId: string;
};
export type KnackApiCallParams = {
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
    auth: AppConnectionValueForAuthProperty<typeof knackAuth>;
};
export declare function knackApiCall<T extends HttpMessageBody>({ method, resourceUri, query, body, auth, }: KnackApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map