export declare const uploadFile: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    channel: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
}>;
//# sourceMappingURL=upload-file.d.ts.map