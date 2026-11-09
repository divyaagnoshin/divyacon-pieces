export declare const sendSurveyInvitationEmailAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    survey_code: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    salutation: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    send_reminder: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=send-survey-invitation-email.d.ts.map