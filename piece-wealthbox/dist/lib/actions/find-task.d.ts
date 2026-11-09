export declare const findTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    task_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resource_record: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    assigned_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    assigned_to_team: import("@agnocon/pieces-framework").NumberProperty<false>;
    created_by: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    completed: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    task_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    updated_since: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    updated_before: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    return_single_result: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=find-task.d.ts.map