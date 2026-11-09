export declare const findUser: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    user_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    role: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find_user.d.ts.map