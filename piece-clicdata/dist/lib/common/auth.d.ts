import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const clicdataAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[];
export type ClicdataAuthValue = AppConnectionValueForAuthProperty<typeof clicdataAuth>;
//# sourceMappingURL=auth.d.ts.map