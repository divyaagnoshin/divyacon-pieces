export declare const createFormEntryAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    formIdentifier: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    formFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-form-entry.d.ts.map