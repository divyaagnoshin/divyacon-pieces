import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const vercelAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    teamId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
export type VercelAuthValue = AppConnectionValueForAuthProperty<typeof vercelAuth>;
//# sourceMappingURL=auth.d.ts.map