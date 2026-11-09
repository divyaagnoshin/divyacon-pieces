export interface PinchPaymentsAuthCredentials {
    username: string;
    password: string;
    environment: string;
}
export interface PinchPaymentsTokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}
export declare function getPinchPaymentsToken(credentials: PinchPaymentsAuthCredentials): Promise<PinchPaymentsTokenResponse>;
export declare const pinchPaymentsAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=auth.d.ts.map