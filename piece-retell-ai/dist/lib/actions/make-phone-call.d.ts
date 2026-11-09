export declare const makePhoneCall: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    fromNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    toNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    overrideAgentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    overrideAgentVersion: import("@agnocon/pieces-framework").NumberProperty<false>;
    metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
    dynamicVariables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    customSipHeaders: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=make-phone-call.d.ts.map