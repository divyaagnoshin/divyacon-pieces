export declare const smtpAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    port: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    TLS: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
export declare const smtp: import("@agnocon/pieces-framework").Piece<import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    port: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    TLS: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>>;
//# sourceMappingURL=index.d.ts.map