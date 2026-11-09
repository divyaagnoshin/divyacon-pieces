export declare const createSignatureRequestAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    files: import("@agnocon/pieces-framework").ArrayProperty<true>;
    signers: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    elements: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    brand_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    subject_signer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    message_signer: import("@agnocon/pieces-framework").LongTextProperty<false>;
    expiration_days: import("@agnocon/pieces-framework").NumberProperty<false>;
    lock_order: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    signer_reminders: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    signer_reminder_days_cycle: import("@agnocon/pieces-framework").NumberProperty<false>;
    certified: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-signature-request.d.ts.map