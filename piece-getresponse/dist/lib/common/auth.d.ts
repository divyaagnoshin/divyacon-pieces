import { AppConnectionType } from '@agnocon/pieces-framework';
export declare const getresponseAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[];
export type GetResponseAuthValue = {
    type: AppConnectionType.OAUTH2;
    access_token: string;
} | {
    type: AppConnectionType.CUSTOM_AUTH;
    props: {
        apiKey: string;
    };
};
//# sourceMappingURL=auth.d.ts.map