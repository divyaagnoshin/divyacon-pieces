export declare const createMember: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    note: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    newsletters: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-member.d.ts.map