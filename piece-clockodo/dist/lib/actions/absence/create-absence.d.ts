declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    date_since: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    date_until: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    half_days: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    approved: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    sick_note: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
export default _default;
//# sourceMappingURL=create-absence.d.ts.map