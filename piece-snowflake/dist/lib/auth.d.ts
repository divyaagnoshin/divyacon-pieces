export declare const snowflakeOAuth2Auth: import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>;
export declare const snowflakeCustomAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
export declare const snowflakeAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[];
//# sourceMappingURL=auth.d.ts.map