export declare const getChannelHistory: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    info: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    channel: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    oldest: import("@agnocon/pieces-framework").NumberProperty<false>;
    latest: import("@agnocon/pieces-framework").NumberProperty<false>;
    inclusive: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    includeAllMetadata: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=get-channel-history.d.ts.map