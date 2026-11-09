declare function generateWebhookSecret(): string;
declare function verifySimplyprintSignature(header: string | undefined, secret: string | undefined): boolean;
declare function extractSecretHeader(headers: Record<string, string | undefined>): string | undefined;
export declare const simplyprintSignature: {
    generateWebhookSecret: typeof generateWebhookSecret;
    verifySimplyprintSignature: typeof verifySimplyprintSignature;
    extractSecretHeader: typeof extractSecretHeader;
};
export {};
//# sourceMappingURL=signature.d.ts.map