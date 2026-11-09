import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const LEVER_BASE_URL = "https://api.lever.co/v1";
export declare const leverAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
export type LeverAuth = AppConnectionValueForAuthProperty<typeof leverAuth>;
export declare const lever: import("@agnocon/pieces-framework").Piece<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
//# sourceMappingURL=index.d.ts.map