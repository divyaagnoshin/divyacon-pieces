export declare const moxieCreateProjectAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    portalAccess: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    showTimeWorkedInPortal: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    feeType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    amount: import("@agnocon/pieces-framework").NumberProperty<false>;
    estimateMax: import("@agnocon/pieces-framework").NumberProperty<false>;
    estimateMin: import("@agnocon/pieces-framework").NumberProperty<false>;
    taxable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-project.d.ts.map