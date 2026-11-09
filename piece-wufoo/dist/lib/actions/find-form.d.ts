export declare const findFormAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    formIdentifier: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    includeTodayCount: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=find-form.d.ts.map