export declare const query: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<import("@agnocon/pieces-common").HttpMethod, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<import("@agnocon/pieces-common").HttpMethod, true>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    queryParams: import("@agnocon/pieces-framework").ObjectProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<true>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    variables: import("@agnocon/pieces-framework").JsonProperty<false>;
    use_proxy: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    proxy_settings: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    failsafe: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=query.d.ts.map