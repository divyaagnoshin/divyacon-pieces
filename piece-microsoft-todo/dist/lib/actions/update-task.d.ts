export declare const updateTaskAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    task_list_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    task_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    body_content: import("@agnocon/pieces-framework").LongTextProperty<false>;
    importance: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    due_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    reminder_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    start_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    categories: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-task.d.ts.map