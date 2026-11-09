import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const imapAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
export type ImapAuth = AppConnectionValueForAuthProperty<typeof imapAuth>;
//# sourceMappingURL=auth.d.ts.map