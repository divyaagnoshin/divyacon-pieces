import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.sendr.io/api/v1";
export declare function sendrApiCall<T extends HttpMessageBody>({ token, method, path, body, queryParams, }: {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare function flattenObject(obj: Record<string, unknown> | null | undefined, prefix?: string): Record<string, unknown>;
export declare const sheetDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const campaignDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const pageTemplateDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const webhookDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
//# sourceMappingURL=index.d.ts.map