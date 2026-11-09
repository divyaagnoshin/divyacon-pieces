export type VerifyEmailMode = 'power' | 'quick';
export declare const verifySingleEmail: (email: string, mode: string, apiKey: string) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare const verifyEmails: (emails: string[], taskName: string, apiKey: string) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare function verifyEmailsResult(taskId: string, apiKey: string): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
//# sourceMappingURL=send-util.d.ts.map