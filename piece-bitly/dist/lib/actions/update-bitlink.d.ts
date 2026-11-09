export declare const updateBitlinkAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    group_guid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    bitlink: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    archived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    app_uri_path: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    install_url: import("@agnocon/pieces-framework").LongTextProperty<false>;
    os: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    install_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=update-bitlink.d.ts.map