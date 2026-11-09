import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export type NinjaPipeAuth = {
    base_url: string;
    api_key: string;
};
export declare function getAuth(context: {
    auth: unknown;
}): NinjaPipeAuth;
export declare function ninjapipeApiCall<T extends HttpMessageBody>({ auth, method, path, body, queryParams, }: {
    auth: NinjaPipeAuth;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string | number | boolean | undefined>;
}): Promise<HttpResponse<T>>;
export declare function extractItems(response: unknown): unknown[];
export declare function flattenObject(obj: Record<string, unknown>, prefix?: string): Record<string, unknown>;
export declare function flattenCustomFields(record: Record<string, unknown>): Record<string, unknown>;
export declare function flattenArray(items: unknown[]): Record<string, unknown>[];
export declare function toDateOnly(value: unknown): string | undefined;
export declare function safeParseJson(value: unknown, fieldName: string): unknown;
export declare const ninjapipeCommon: {
    countryDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    pipelineDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    contactDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    companyDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    projectDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    projectDropdownRequired: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    taskDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    taskStatusDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    priorityDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    projectStatusDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    budgetCategoryDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    budgetPeriodDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    budgetStatusDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    orderStatusDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    paymentStatusDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    pipelineDropdownRequired: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    contactDropdownRequired: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    companyDropdownRequired: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    dealDropdownRequired: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    productDropdownRequired: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    budgetDropdownRequired: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    orderDropdownRequired: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    limitProperty: import("@agnocon/pieces-framework").NumberProperty<false>;
    statusFilterProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    searchProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ownerFilterProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
//# sourceMappingURL=index.d.ts.map