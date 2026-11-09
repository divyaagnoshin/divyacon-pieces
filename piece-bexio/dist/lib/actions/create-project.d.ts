export declare const createProjectAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    document_nr: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    comment: import("@agnocon/pieces-framework").LongTextProperty<false>;
    pr_state_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    pr_project_type_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contact_sub_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    pr_invoice_type_id: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    pr_invoice_type_amount: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    pr_budget_type_id: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    pr_budget_type_amount: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-project.d.ts.map