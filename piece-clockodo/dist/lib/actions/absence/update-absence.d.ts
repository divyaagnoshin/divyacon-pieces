declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    absence_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    date_since: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    date_until: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    half_days: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    sick_note: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
export default _default;
//# sourceMappingURL=update-absence.d.ts.map