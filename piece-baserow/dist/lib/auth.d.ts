import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const baserowAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>;
export declare const baserowAuthHelpers: {
    isJwtAuth: (auth: BaserowAuthValue) => boolean;
};
export type BaserowAuthValue = AppConnectionValueForAuthProperty<typeof baserowAuth>;
//# sourceMappingURL=auth.d.ts.map