export declare const startWorkflow: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    workflow_template: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    linked_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    linked_record: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    label: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    starts_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    visible_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    workflow_milestones: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=start-workflow.d.ts.map