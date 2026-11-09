import { HttpMethod } from '@agnocon/pieces-common';
export declare function apiRequest({ auth, path, method, body, queryParams, }: {
    auth: any;
    path: string;
    method?: HttpMethod;
    body?: any;
    queryParams?: Record<string, string>;
}): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare const userFolderDropdown: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const userVideoDropdown: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
//# sourceMappingURL=common.d.ts.map