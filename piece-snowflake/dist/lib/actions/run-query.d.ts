export declare const runQuery: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    sqlText: import("@agnocon/pieces-framework").LongTextProperty<true>;
    binds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    application: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=run-query.d.ts.map