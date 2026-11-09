import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const umamiAuth: (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[];
export type UmamiAuthValue = AppConnectionValueForAuthProperty<typeof umamiAuth>;
export declare function getBaseUrl(auth: UmamiAuthValue): string;
export declare function getAuthHeaders(auth: UmamiAuthValue): Record<string, string>;
//# sourceMappingURL=auth.d.ts.map