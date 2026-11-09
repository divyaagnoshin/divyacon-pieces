import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const confluenceAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    confluenceDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export type confluenceAuthValue = AppConnectionValueForAuthProperty<typeof confluenceAuth>;
//# sourceMappingURL=auth.d.ts.map