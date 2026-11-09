import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function deftformApiCall<T extends HttpMessageBody>({ token, method, path, body, queryParams, }: {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare function getApiToken(context: {
    auth: {
        secret_text: string;
    };
}): string;
export declare function flattenObject(obj: Record<string, unknown>, prefix?: string): Record<string, unknown>;
export declare const DeftformCommon: {
    formDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=index.d.ts.map