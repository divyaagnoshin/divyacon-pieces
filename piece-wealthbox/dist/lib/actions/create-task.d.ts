export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    due_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<"Low" | "Medium" | "High", false>;
    complete: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    link_type: import("@agnocon/pieces-framework").StaticDropdownProperty<"Contact" | "Opportunity" | "Project", false>;
    linked_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    category: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    visible_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    due_later: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-task.d.ts.map