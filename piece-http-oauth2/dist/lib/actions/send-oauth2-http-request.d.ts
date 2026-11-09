import { HttpMethod } from '@agnocon/pieces-common';
export declare const httpOauth2RequestAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<HttpMethod, true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    queryParams: import("@agnocon/pieces-framework").ObjectProperty<false>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    body: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    use_proxy: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    proxy_settings: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    failsafe: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=send-oauth2-http-request.d.ts.map