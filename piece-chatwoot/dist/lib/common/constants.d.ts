export declare const CHATWOOT_DEFAULT_BASE_URL = "https://app.chatwoot.com";
export declare function chatwootEndpoints(baseUrl: string, accountId: number): {
    readonly WEBHOOKS: `${string}/api/v1/accounts/${number}/webhooks`;
    readonly WEBHOOK_BY_ID: (webhookId: number) => string;
    readonly CONVERSATION_MESSAGES: (conversationId: number) => string;
    readonly PROFILE: `${string}/auth/sign_in`;
};
export declare const CHATWOOT_AUTH_HEADER = "api_access_token";
//# sourceMappingURL=constants.d.ts.map