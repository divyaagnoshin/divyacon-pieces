export declare const getPendingApprovables: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    oauthServerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    realm: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    approvableType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    passwordAdapter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    count: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    top: import("@agnocon/pieces-framework").NumberProperty<false>;
    skip: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=get-pending-approvables.d.ts.map