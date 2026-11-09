export declare const importTransaction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    server_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sync_id: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    encryption_password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    account_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    payee_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    amount: import("@agnocon/pieces-framework").NumberProperty<false>;
    category: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    imported_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    transfer_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    cleared: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    imported_payee: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=import-transaction.d.ts.map