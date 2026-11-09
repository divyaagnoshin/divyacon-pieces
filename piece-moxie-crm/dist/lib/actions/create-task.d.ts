export declare const moxieCreateTaskAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    projectName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    status: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    priority: import("@agnocon/pieces-framework").NumberProperty<false>;
    tasks: import("@agnocon/pieces-framework").ArrayProperty<false>;
    assignedTo: import("@agnocon/pieces-framework").ArrayProperty<false>;
    customValues: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-task.d.ts.map