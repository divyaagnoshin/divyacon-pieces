export declare const send_iMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    fallback: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    fallback_when: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=imessage.d.ts.map