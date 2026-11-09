export declare const createTimeEntryOnTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    taskId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    hours: import("@agnocon/pieces-framework").NumberProperty<true>;
    minutes: import("@agnocon/pieces-framework").NumberProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    isBillable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-time-entry-on-task.d.ts.map