declare enum AuthType {
    NONE = "NONE",
    BASIC = "BASIC",
    BEARER_TOKEN = "BEARER_TOKEN"
}
export declare const httpSendRequestAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<import("@agnocon/pieces-common").HttpMethod, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<import("@agnocon/pieces-common").HttpMethod, true>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<true>;
    queryParams: import("@agnocon/pieces-framework").ObjectProperty<true>;
    authType: import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<AuthType, true>;
    authFields: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    body: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
    response_is_binary: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    use_proxy: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    proxy_settings: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    followRedirects: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    failureMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
export {};
//# sourceMappingURL=send-http-request-action.d.ts.map