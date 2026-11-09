import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export type GorgiasAuth = AppConnectionValueForAuthProperty<typeof gorgiasAuth>;
export declare function normalizeGorgiasDomain(input: string): string;
export declare function getGorgiasBaseUrl(domain: string): string;
export declare const gorgiasAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
//# sourceMappingURL=auth.d.ts.map