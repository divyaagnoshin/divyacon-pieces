export interface CashgramAuthCredentials {
    clientId: string;
    clientSecret: string;
}
export interface CashgramTokenResponse {
    success: boolean;
    token?: string;
    error?: any;
    message?: string;
}
/**
 * Generate bearer token for Cashgram operations using client credentials and public key
 *
 * This implementation uses crypto to generate the proper x-cf-signature.
 */
export declare function generateCashgramToken(credentials: CashgramAuthCredentials, environment: 'sandbox' | 'production'): Promise<CashgramTokenResponse>;
/**
 * Validate authentication credentials based on auth type
 */
export declare function validateAuthCredentials(authType: string, credentials: {
    clientId?: string;
    clientSecret?: string;
}): {
    isValid: boolean;
    error?: string;
};
/**
 * Legacy function for backward compatibility
 * @deprecated Use validateAuthCredentials instead
 */
export declare function validateCashgramCredentials(credentials: CashgramAuthCredentials): {
    isValid: boolean;
    error?: string;
};
export declare const cashfreePaymentsAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=cashgram-auth.d.ts.map