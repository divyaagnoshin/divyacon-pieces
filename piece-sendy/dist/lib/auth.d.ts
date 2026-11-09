import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export type SendyAuthType = AppConnectionValueForAuthProperty<typeof sendyAuth>;
export declare const sendyAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    brandId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map