import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { wufooAuth } from '../auth';
export type WufooAuthProps = AppConnectionValueForAuthProperty<typeof wufooAuth>;
export type WufooApiCallParams = {
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
    auth: WufooAuthProps;
};
export declare function wufooApiCall<T extends HttpMessageBody>({ method, resourceUri, query, body, auth, }: WufooApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map