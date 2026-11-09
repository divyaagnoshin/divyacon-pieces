export declare const customApiCall: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccountJson: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    url: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccountJson: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }> | undefined>;
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<import("@agnocon/pieces-common").HttpMethod, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<import("@agnocon/pieces-common").HttpMethod, true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false> | import("@agnocon/pieces-framework").ObjectProperty<true>;
    queryParams: import("@agnocon/pieces-framework").ObjectProperty<false> | import("@agnocon/pieces-framework").ObjectProperty<true>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    body: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccountJson: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }> | undefined>;
    response_is_binary: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    failsafe: import("@agnocon/pieces-framework").CheckboxProperty<false> | import("@agnocon/pieces-framework").CheckboxProperty<true>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    followRedirects: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=raw-request.d.ts.map