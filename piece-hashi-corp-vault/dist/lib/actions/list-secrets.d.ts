export declare const listSecrets: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    authMethod: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    roleId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    secretId: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    appRolePath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    namespace: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiVersion: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    secretEngine: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    listPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=list-secrets.d.ts.map