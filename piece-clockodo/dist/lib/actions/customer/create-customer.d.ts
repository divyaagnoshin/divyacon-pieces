declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    company_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    company_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    active: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    billable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    color: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
}>;
export default _default;
//# sourceMappingURL=create-customer.d.ts.map