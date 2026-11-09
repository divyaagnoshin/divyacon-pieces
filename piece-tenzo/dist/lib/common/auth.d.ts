import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const tenzoAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    appId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[];
export type TenzoAuthValue = AppConnectionValueForAuthProperty<typeof tenzoAuth>;
//# sourceMappingURL=auth.d.ts.map