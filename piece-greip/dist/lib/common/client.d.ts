import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { greipAuth } from './auth';
export type GreipApiCallParams = {
    method: HttpMethod;
    path: string;
    queryParams?: Record<string, string | number | string[] | undefined>;
    body?: any;
    auth: AppConnectionValueForAuthProperty<typeof greipAuth>;
};
export declare function greipApiCall<T extends HttpMessageBody>({ method, path, queryParams, body, auth, }: GreipApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map