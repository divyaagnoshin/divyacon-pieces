export declare const simplybookAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export type SimplybookAuth = {
    companyLogin: string;
    userLogin: string;
    userPassword: string;
};
/**
 * Get access token for Simplybook Admin API
 *
 * Uses getUserToken method with user credentials for Admin API authentication.
 * Headers: X-Company-Login, X-User-Token
 *
 * @param auth - SimplybookAuth object with user credentials
 * @returns The user token to be used in X-User-Token header
 */
export declare function getAccessToken(auth: SimplybookAuth): Promise<string>;
/**
 * Make a JSON-RPC call to Simplybook Admin API
 *
 * Uses the Admin API endpoint (https://user-api.simplybook.me/admin) with X-User-Token header.
 * For public/client API methods, set usePublicEndpoint to true.
 *
 * @param auth - SimplybookAuth object
 * @param method - The JSON-RPC method name to call
 * @param params - Array of parameters for the method
 * @param usePublicEndpoint - Use public endpoint instead of admin (default: false)
 * @returns The result from the JSON-RPC call
 */
export declare function makeJsonRpcCall<T = any>(auth: SimplybookAuth, method: string, params?: any[], usePublicEndpoint?: boolean): Promise<T>;
//# sourceMappingURL=auth.d.ts.map