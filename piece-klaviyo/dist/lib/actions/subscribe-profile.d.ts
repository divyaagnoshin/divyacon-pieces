export declare const subscribeProfile: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[], {
    list_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
    profile_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[]>;
    subscribe_email: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    subscribe_sms: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    historical_import: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    consented_at: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    custom_source: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=subscribe-profile.d.ts.map