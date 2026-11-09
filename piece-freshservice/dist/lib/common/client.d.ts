import { HttpMethod, HttpResponse, HttpMessageBody } from '@agnocon/pieces-common';
import { freshserviceAuth } from '../../';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
type FreshserviceAuth = AppConnectionValueForAuthProperty<typeof freshserviceAuth>;
declare function buildBaseUrl(domain: string): string;
export declare function freshserviceApiCall<T extends HttpMessageBody>({ method, endpoint, auth, body, queryParams, }: {
    method: HttpMethod;
    endpoint: string;
    auth: FreshserviceAuth;
    body?: HttpMessageBody;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export { buildBaseUrl };
//# sourceMappingURL=client.d.ts.map