export declare const findUserAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    search_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    role: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    organization: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    external_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    custom_query: import("@agnocon/pieces-framework").LongTextProperty<false>;
    sort_by: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sort_order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find-user.d.ts.map