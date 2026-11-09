import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
import { LetmepostAuth } from './auth';
export declare function letmepostApiCall<T extends HttpMessageBody>({ auth, method, path, body, queryParams, headers, }: {
    auth: LetmepostAuth;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
    headers?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare const letmepostCommon: {
    accountsDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
};
export type { LetmepostAuth } from './auth';
//# sourceMappingURL=index.d.ts.map