import { HttpMethod } from '@agnocon/pieces-common';
export declare const MEISTERTASK_API_URL = "https://www.meistertask.com/api";
export declare const meisterTaskCommon: {
    baseUrl: string;
    project: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    section: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    task_id: import("@agnocon/pieces-framework").DropdownProperty<{
        name: string;
        id: string;
    }, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    label: import("@agnocon/pieces-framework").DropdownProperty<{
        name: string;
        id: string;
    }, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    person: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export declare function makeRequest(method: HttpMethod, url: string, token: string, body?: any): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
//# sourceMappingURL=common.d.ts.map