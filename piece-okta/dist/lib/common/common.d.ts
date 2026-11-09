import { HttpMethod } from '@agnocon/pieces-common';
export declare const oktaAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare function makeOktaRequest(auth: any, endpoint: string, method?: HttpMethod, body?: any): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare const userIdDropdown: (groupusers?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
export declare const groupIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
//# sourceMappingURL=common.d.ts.map