import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { linkupAuth } from './auth';
export type LinkupApiCallParams = {
    method: HttpMethod;
    path: string;
    queryParams?: Record<string, string | number | string[] | undefined>;
    body?: any;
    auth: AppConnectionValueForAuthProperty<typeof linkupAuth>;
};
export declare function linkupApiCall<T extends HttpMessageBody>({ method, path, queryParams, body, auth, }: LinkupApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map