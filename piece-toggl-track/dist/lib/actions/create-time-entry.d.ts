export declare const createTimeEntry: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    start: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    duration: import("@agnocon/pieces-framework").NumberProperty<true>;
    stop: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    task_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    project_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    billable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    user_id: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-time-entry.d.ts.map