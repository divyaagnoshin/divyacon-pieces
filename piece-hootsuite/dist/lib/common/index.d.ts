import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare function hootsuiteApiCall<T extends HttpMessageBody>({ auth, method, path, body, queryParams, }: {
    auth: OAuth2PropertyValue;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
//# sourceMappingURL=index.d.ts.map