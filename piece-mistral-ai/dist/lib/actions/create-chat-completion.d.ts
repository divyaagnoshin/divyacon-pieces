export declare const createChatCompletion: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    gatewayId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    gatewayAuthToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    mistralApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        gatewayId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        gatewayAuthToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        mistralApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    top_p: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_tokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    random_seed: import("@agnocon/pieces-framework").NumberProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-chat-completion.d.ts.map