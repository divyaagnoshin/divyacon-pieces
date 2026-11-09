export declare const updateRecordAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    applicationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    object: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        applicationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    recordId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    recordFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        applicationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=update-record.d.ts.map