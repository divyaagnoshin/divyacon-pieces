export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    due_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    staff: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    completed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    case: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-task.d.ts.map