export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    companyId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    taskName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    projectId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    hours: import("@agnocon/pieces-framework").NumberProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    rate: import("@agnocon/pieces-framework").NumberProperty<false>;
    taskType: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sacCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    taskTaxJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-task.d.ts.map