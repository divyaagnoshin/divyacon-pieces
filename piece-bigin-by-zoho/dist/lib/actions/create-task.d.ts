export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    owner: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    enableRecurring: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    recurringInfo: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    enableReminder: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reminderInfo: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    relatedModule: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    relatedTo: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tag: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-task.d.ts.map