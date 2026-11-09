export declare const sendOneLog: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    appKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    site: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    message: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    ddsource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ddtags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    hostname: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    service: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalProperties: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=send-one-log.d.ts.map