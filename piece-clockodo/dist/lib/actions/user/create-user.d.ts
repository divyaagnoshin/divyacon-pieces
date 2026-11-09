declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    role: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    team_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    wage_type: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    can_generally_see_absences: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    can_generally_manage_absences: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    can_add_customers: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
export default _default;
//# sourceMappingURL=create-user.d.ts.map