import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
import { PostizAuth } from './auth';
export declare function postizApiCall<T extends HttpMessageBody>({ auth, method, path, body, queryParams, }: {
    auth: PostizAuth;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare const postizCommon: {
    integrationDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
};
export type { PostizAuth } from './auth';
//# sourceMappingURL=index.d.ts.map