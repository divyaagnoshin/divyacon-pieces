import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { OAuth2Client } from 'google-auth-library';
export declare const googleDocsScopes: string[];
export declare const googleDocsAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[];
export type GoogleDocsAuthValue = AppConnectionValueForAuthProperty<typeof googleDocsAuth>;
export declare function createGoogleClient(auth: GoogleDocsAuthValue): Promise<OAuth2Client>;
export declare const getAccessToken: (auth: GoogleDocsAuthValue) => Promise<string>;
//# sourceMappingURL=auth.d.ts.map