import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare function getAccessToken(auth: OAuth2PropertyValue): string;
export declare function getRefreshToken(auth: OAuth2PropertyValue): string | undefined;
export declare function isTokenExpired(auth: OAuth2PropertyValue): boolean;
export declare function validateAuthData(auth: OAuth2PropertyValue): {
    valid: boolean;
    error?: string;
};
export declare function getTokenType(auth: OAuth2PropertyValue): string;
export declare function getAuthorizationHeader(auth: OAuth2PropertyValue): string;
//# sourceMappingURL=auth.d.ts.map