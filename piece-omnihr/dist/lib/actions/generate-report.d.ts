export declare const generateReport: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    origin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    reportTemplateId: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        origin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    snapshotOptions: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        origin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    mapFieldNames: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=generate-report.d.ts.map