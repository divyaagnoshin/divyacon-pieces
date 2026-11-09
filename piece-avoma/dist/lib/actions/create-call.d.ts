export declare const createCall: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    external_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    user_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    source: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    direction: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    start_at: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    frm: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    recording_url: import("@agnocon/pieces-framework").LongTextProperty<true>;
    participants: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    end_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    frm_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    to_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    answered: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    is_voicemail: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    additional_details: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-call.d.ts.map