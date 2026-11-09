import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const signNowOAuth2Auth: import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>;
export declare const signNowApiKeyAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
export declare const signNowAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[];
export type SignNowAuthValue = AppConnectionValueForAuthProperty<typeof signNowAuth>;
/**
 * Returns the bearer token for API requests regardless of which auth method was used.
 */
export declare function getSignNowBearerToken(auth: SignNowAuthValue): string;
//# sourceMappingURL=auth.d.ts.map