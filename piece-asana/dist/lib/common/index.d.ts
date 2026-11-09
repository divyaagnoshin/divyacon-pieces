import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare const asanaCommon: {
    workspace: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    assignee: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export declare function getUsers(accessToken: string, workspace: string): Promise<{
    gid: string;
    name: string;
}[]>;
export declare function getTags(accessToken: string, workspace: string): Promise<{
    gid: string;
    name: string;
}[]>;
export declare function callAsanaApi<T extends HttpMessageBody = any>(method: HttpMethod, apiUrl: string, accessToken: string, body: any | undefined): Promise<HttpResponse<T>>;
//# sourceMappingURL=index.d.ts.map