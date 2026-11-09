export declare const getBudget: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    server_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sync_id: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    encryption_password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    month: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    year: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=get-budget.d.ts.map