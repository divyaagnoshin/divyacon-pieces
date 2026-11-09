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
}>;
export default _default;
//# sourceMappingURL=delete-project.d.ts.map