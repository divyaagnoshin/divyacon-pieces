export declare const createPhoneNumber: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    inboundAgentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    outboundAgentId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    inboundAgentVersion: import("@agnocon/pieces-framework").NumberProperty<false>;
    outboundAgentVersion: import("@agnocon/pieces-framework").NumberProperty<false>;
    areaCode: import("@agnocon/pieces-framework").NumberProperty<false>;
    nickname: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    inboundWebhookUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    numberProvider: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    countryCode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tollFree: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    phoneNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-phone-number.d.ts.map