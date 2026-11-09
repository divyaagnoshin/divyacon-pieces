export declare const sendANewSms: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_login: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    sender: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    purpose: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    send_at: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    with_replies: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=send-a-new-sms.d.ts.map