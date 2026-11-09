export declare const deleteEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>, {
    mailbox: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    }>>;
    uid: import("@agnocon/pieces-framework").NumberProperty<true>;
    permanentDeletionNotice: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}>;
//# sourceMappingURL=delete-email.d.ts.map