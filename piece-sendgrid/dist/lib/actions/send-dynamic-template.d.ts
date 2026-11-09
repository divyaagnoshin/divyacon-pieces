export declare const sendDynamicTemplate: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    dataResidency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    to: import("@agnocon/pieces-framework").ArrayProperty<true>;
    from_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    template_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    template_data: import("@agnocon/pieces-framework").JsonProperty<true>;
    reply_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=send-dynamic-template.d.ts.map