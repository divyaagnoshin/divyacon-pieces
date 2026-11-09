import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { OAuth2Client } from 'google-auth-library';
export declare const googleDriveScopes: string[];
export declare const googleDriveAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[];
export type GoogleDriveAuthValue = AppConnectionValueForAuthProperty<typeof googleDriveAuth>;
export declare function createGoogleClient(auth: GoogleDriveAuthValue): Promise<OAuth2Client>;
export declare const getAccessToken: (auth: GoogleDriveAuthValue) => Promise<string>;
//# sourceMappingURL=auth.d.ts.map