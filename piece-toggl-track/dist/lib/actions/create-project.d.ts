export declare const createProject: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    workspace_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    client_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    is_private: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    billable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    template: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    external_reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    auto_estimates: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    estimated_hours: import("@agnocon/pieces-framework").NumberProperty<false>;
    rate: import("@agnocon/pieces-framework").NumberProperty<false>;
    fixed_fee: import("@agnocon/pieces-framework").NumberProperty<false>;
    start_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    end_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-project.d.ts.map