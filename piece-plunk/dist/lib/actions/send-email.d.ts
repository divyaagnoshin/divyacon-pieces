export declare const sendTransactionalEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    secretKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    publicKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    reply: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subscribed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map