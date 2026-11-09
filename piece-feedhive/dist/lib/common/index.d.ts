import { HttpMessageBody, HttpMethod, HttpResponse } from '@agnocon/pieces-common';
export declare const feedhiveCommon: {
    socialsMultiDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    labelsMultiDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    postDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    apiCall: typeof apiCall;
    flattenPost: typeof flattenPost;
};
declare function apiCall<T extends HttpMessageBody>({ token, method, path, body, queryParams, }: {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
declare function flattenPost(post: Record<string, unknown>): Record<string, unknown>;
export {};
//# sourceMappingURL=index.d.ts.map