import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function frillApiCall<T extends HttpMessageBody>({ token, method, path, body, queryParams, }: {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string | number | boolean | undefined>;
}): Promise<HttpResponse<T>>;
export declare function frillPaginatedApiCall<T>({ token, path, queryParams, limit, }: {
    token: string;
    path: string;
    queryParams?: Record<string, string | number | boolean | undefined>;
    limit?: number;
}): Promise<T[]>;
export declare function flattenObject(obj: Record<string, unknown>, prefix?: string): Record<string, unknown>;
export declare const frillDropdowns: {
    ideaDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    ideaDropdownOptional: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    statusDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    topicDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    announcementCategoryDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    followerDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=index.d.ts.map