export declare const subscribeMultipleAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    brandId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    lists: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        brandId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ipaddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    referrer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    gdpr: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    silent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=subscribe-multiple.d.ts.map