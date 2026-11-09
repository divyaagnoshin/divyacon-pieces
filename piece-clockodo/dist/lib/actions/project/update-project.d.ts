declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    project_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    customer_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    billable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    budget: import("@agnocon/pieces-framework").NumberProperty<false>;
    budget_is_hours: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    budget_is_not_strict: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    completed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    billed_amount: import("@agnocon/pieces-framework").NumberProperty<false>;
    billing_complete: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
export default _default;
//# sourceMappingURL=update-project.d.ts.map