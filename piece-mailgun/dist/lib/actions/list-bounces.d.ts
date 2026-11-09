export declare const listBounces: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    domain: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-bounces.d.ts.map