import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function youtrackApiCall<T extends HttpMessageBody>({ baseUrl, token, method, path, body, queryParams, headers, }: {
    baseUrl: string;
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
    headers?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare function requireYoutrackAuth(auth: unknown): {
    baseUrl: string;
    apiToken: string;
};
export declare function getYoutrackUserTimeZoneId(baseUrl: string, token: string): Promise<string | null>;
export declare function formatYoutrackDateTimeLiteral(epochMs: number, timeZoneId: string | null): string;
export declare function flattenObject(obj: Record<string, unknown>, prefix?: string): Record<string, unknown>;
export declare function normalizeCustomFields(value: unknown): unknown[] | undefined;
export declare function flattenIssue(issue: Record<string, unknown>): Record<string, unknown>;
export declare function dropdownError(prefix: string, error: unknown): {
    disabled: boolean;
    options: never[];
    placeholder: string;
};
export declare const projectDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const issueDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const tagDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const userDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const ISSUE_FIELDS: string;
//# sourceMappingURL=index.d.ts.map