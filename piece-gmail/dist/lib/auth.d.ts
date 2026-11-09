import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { OAuth2Client } from 'google-auth-library';
export declare const gmailScopes: string[];
export declare const gmailAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[];
export type GmailAuthValue = AppConnectionValueForAuthProperty<typeof gmailAuth>;
export declare function createGoogleClient(auth: GmailAuthValue): Promise<OAuth2Client>;
export declare const getAccessToken: (auth: GmailAuthValue) => Promise<string>;
export declare function getUserEmail(auth: GmailAuthValue, authClient: OAuth2Client): Promise<string | undefined>;
//# sourceMappingURL=auth.d.ts.map