export declare const updateTaskAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    projectId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    taskId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    content: import("@agnocon/pieces-framework").LongTextProperty<false>;
    desc: import("@agnocon/pieces-framework").LongTextProperty<false>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
}>;
//# sourceMappingURL=update-task.d.ts.map