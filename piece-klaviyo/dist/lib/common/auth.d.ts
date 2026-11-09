import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const klaviyoAuth: (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>)[];
export type KlaviyoAuthValue = AppConnectionValueForAuthProperty<typeof klaviyoAuth>;
export declare function getAuthorizationHeader(auth: KlaviyoAuthValue): string;
//# sourceMappingURL=auth.d.ts.map