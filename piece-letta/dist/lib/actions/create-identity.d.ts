export declare const createIdentity: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    identifierKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    identityType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    projectId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    properties: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-identity.d.ts.map