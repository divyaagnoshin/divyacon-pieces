import { AppConnectionType } from '@agnocon/pieces-framework';
export declare const TeableAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[];
export type TeableAuthValue = {
    type: AppConnectionType.OAUTH2;
    access_token: string;
} | {
    type: AppConnectionType.CUSTOM_AUTH;
    props: {
        token: string;
        baseUrl?: string;
    };
};
export declare function getTeableToken(auth: TeableAuthValue): string;
export declare function getTeableBaseUrl(auth: TeableAuthValue): string;
//# sourceMappingURL=auth.d.ts.map