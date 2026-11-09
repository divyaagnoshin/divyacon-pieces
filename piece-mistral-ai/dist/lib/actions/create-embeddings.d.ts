export declare const createEmbeddings: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    gatewayId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    gatewayAuthToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    mistralApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    input: import("@agnocon/pieces-framework").ArrayProperty<true>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-embeddings.d.ts.map