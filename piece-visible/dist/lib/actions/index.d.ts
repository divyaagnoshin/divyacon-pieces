export declare const visibleActions: (import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    companyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    websiteUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    primaryContactId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    companyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactListIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
}> | import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    companyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    frequency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    unit: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    url: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true> | undefined>;
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<import("@agnocon/pieces-common").HttpMethod, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<import("@agnocon/pieces-common").HttpMethod, true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false> | import("@agnocon/pieces-framework").ObjectProperty<true>;
    queryParams: import("@agnocon/pieces-framework").ObjectProperty<false> | import("@agnocon/pieces-framework").ObjectProperty<true>;
    body_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    body: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true> | undefined>;
    response_is_binary: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    failsafe: import("@agnocon/pieces-framework").CheckboxProperty<false> | import("@agnocon/pieces-framework").CheckboxProperty<true>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    followRedirects: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>)[];
//# sourceMappingURL=index.d.ts.map