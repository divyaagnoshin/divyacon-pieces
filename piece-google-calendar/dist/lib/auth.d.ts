import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { OAuth2Client } from 'google-auth-library';
export declare const googleCalendarScopes: string[];
export declare const googleCalendarAuth: (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[];
export type GoogleCalendarAuthValue = AppConnectionValueForAuthProperty<typeof googleCalendarAuth>;
export declare function createGoogleClient(auth: GoogleCalendarAuthValue): Promise<OAuth2Client>;
export declare const getAccessToken: (auth: GoogleCalendarAuthValue) => Promise<string>;
//# sourceMappingURL=auth.d.ts.map