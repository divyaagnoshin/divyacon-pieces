export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    task_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    state: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    due_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    task_configuration: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-task.d.ts.map