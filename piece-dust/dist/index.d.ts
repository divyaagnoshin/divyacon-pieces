import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const dustAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
export type DustAuthType = AppConnectionValueForAuthProperty<typeof dustAuth>['props'];
export declare const dust: import("@agnocon/pieces-framework").Piece<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    workspaceId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>>;
//# sourceMappingURL=index.d.ts.map