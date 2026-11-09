export declare const unsubscribeProfile: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[], {
    list_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
    profile_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
    unsubscribe_email: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    unsubscribe_sms: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    unsubscribe_sms_transactional: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=unsubscribe-profile.d.ts.map