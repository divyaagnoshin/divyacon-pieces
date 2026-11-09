export declare const createAndSendEnvelope: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    impersonatedUserId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    scopes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    emailSubject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    emailBlurb: import("@agnocon/pieces-framework").LongTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    documents: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    signers: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    carbonCopies: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-and-send-envelope.d.ts.map