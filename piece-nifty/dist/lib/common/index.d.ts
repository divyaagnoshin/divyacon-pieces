import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare const nitfyCommon: {
    portfolio: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    milestone: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export declare function callNitfyApi<T extends HttpMessageBody>(method: HttpMethod, apiUrl: string, accessToken: string, body: any | undefined): Promise<HttpResponse<T>>;
//# sourceMappingURL=index.d.ts.map