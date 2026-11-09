import { HttpMessageBody, HttpMethod, HttpResponse, QueryParams } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { produktlyAuth } from './auth';
export declare function produktlyApiCall<T extends HttpMessageBody>({ auth, method, path, body, queryParams, }: {
    auth: ProduktlyAuth;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: QueryParams;
}): Promise<HttpResponse<T>>;
export declare const PRODUKTLY_BASE_URL = "https://api.produktly.com/api/v1";
export type ProduktlyAuth = AppConnectionValueForAuthProperty<typeof produktlyAuth>;
//# sourceMappingURL=client.d.ts.map