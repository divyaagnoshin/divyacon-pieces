import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export type TotalCMSAuthType = AppConnectionValueForAuthProperty<typeof cmsAuth>;
export declare const cmsAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    license: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map