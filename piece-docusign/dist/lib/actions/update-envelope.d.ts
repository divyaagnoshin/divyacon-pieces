export declare const updateEnvelope: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    impersonatedUserId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    scopes: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    envelopeId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    operation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    voidedReason: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailSubject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailBlurb: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=update-envelope.d.ts.map