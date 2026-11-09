import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const savvyCalAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[];
export type SavvyCalAuthValue = AppConnectionValueForAuthProperty<typeof savvyCalAuth>;
export declare function getToken(auth: SavvyCalAuthValue): string;
//# sourceMappingURL=auth.d.ts.map