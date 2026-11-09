export declare const downloadView: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    siteContentUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    personalAccessTokenName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    personalAccessTokenSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    viewId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        siteContentUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        personalAccessTokenName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        personalAccessTokenSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    maxAge: import("@agnocon/pieces-framework").NumberProperty<false>;
    resolution: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    vizWidth: import("@agnocon/pieces-framework").NumberProperty<false>;
    vizHeight: import("@agnocon/pieces-framework").NumberProperty<false>;
    pageType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    orientation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=download-view.d.ts.map