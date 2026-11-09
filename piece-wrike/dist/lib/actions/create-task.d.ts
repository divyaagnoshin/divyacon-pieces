export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    folderId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    importance: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    assignees: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    due_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    customFields: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-task.d.ts.map