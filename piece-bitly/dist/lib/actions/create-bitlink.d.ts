export declare const createBitlinkAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    long_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    group_guid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    domain: {
        defaultValue: string;
        displayName: string;
        description?: string | undefined;
        auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
            accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/pieces-framework").CustomAuthConnectionValue<import("@agnocon/pieces-framework").StaticPropsValue<{
                accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
            }>> | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<string>>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.DROPDOWN;
        required: false;
    };
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    force_new_link: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    app_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    app_uri_path: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    install_url: import("@agnocon/pieces-framework").LongTextProperty<false>;
    install_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-bitlink.d.ts.map