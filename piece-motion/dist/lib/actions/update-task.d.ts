export declare const updateTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    taskId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    statusId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    projectId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    assigneeId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    labels: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=update-task.d.ts.map