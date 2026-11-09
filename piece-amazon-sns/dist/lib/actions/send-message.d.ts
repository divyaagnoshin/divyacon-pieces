export declare const sendMessageAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    topic: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=send-message.d.ts.map