export type RazorpayCredentials = {
    keyID: string;
    keySecret: string;
};
export declare const generateRazorpayAuthHeader: (credentials: RazorpayCredentials) => Promise<{
    Authorization: string;
}>;
export declare const razorpayURL: {
    apiURL: string;
};
//# sourceMappingURL=utils.d.ts.map