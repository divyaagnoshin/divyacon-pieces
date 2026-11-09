import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { OAuth2Client } from 'google-auth-library';
export declare const googleFormsScopes: string[];
export declare const googleFormsAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[];
export type GoogleFormsAuthValue = AppConnectionValueForAuthProperty<typeof googleFormsAuth>;
export declare function createGoogleClient(auth: GoogleFormsAuthValue): Promise<OAuth2Client>;
export declare const getAccessToken: (auth: GoogleFormsAuthValue) => Promise<string>;
export declare const googleFormsCommon: {
    include_team_drives: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    form_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
};
//# sourceMappingURL=common.d.ts.map