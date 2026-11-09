export declare const deleteBouncesBulk: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    domain: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    scope: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=delete-bounces-bulk.d.ts.map