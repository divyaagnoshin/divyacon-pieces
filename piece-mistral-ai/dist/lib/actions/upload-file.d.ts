export declare const uploadFile: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    gatewayId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    gatewayAuthToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    mistralApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    purpose: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=upload-file.d.ts.map