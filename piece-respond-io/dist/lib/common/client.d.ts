import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { respondIoAuth } from './auth';
export type RespondIoApiCallParams = {
    method: HttpMethod;
    url: string;
    body?: unknown;
    auth: AppConnectionValueForAuthProperty<typeof respondIoAuth>;
};
export declare function respondIoApiCall<T extends HttpMessageBody>({ method, url, body, auth }: RespondIoApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map