export declare const runMultipleQueries: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    sqlTexts: import("@agnocon/pieces-framework").ArrayProperty<true>;
    binds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    useTransaction: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    application: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=run-multiple-queries.d.ts.map