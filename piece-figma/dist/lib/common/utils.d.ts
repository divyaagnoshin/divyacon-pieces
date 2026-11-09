export declare const figmaGetRequest: ({ token, url, }: FigmaGetRequestParams) => Promise<{
    success: boolean;
    request_body: any;
    response_body: any;
}>;
export declare const figmaPostRequestWithMessage: ({ token, url, message, }: FigmaPostRequestWithMessageParams) => Promise<{
    success: boolean;
    request_body: FigmaPostRequestWithMessageBody | undefined;
    response_body: any;
}>;
export declare const figmaWebhookPostRequest: ({ token, url, eventType, teamId, endpoint, passcode, }: FigmaWebhookPostRequestParams) => Promise<{
    success: boolean;
    request_body: FigmaWebhookPostRequestBody | undefined;
    response_body: any;
}>;
export declare const figmaDeleteRequest: ({ token, url, }: FigmaGetRequestParams) => Promise<{
    success: boolean;
    request_body: any;
    response_body: any;
}>;
type FigmaGetRequestParams = {
    token: string;
    url: string;
};
type FigmaPostRequestWithMessageParams = {
    token: string;
    url: string;
    message: string;
};
type FigmaPostRequestWithMessageBody = {
    message: string;
};
type FigmaWebhookPostRequestParams = {
    token: string;
    url: string;
    eventType: string;
    teamId: string;
    endpoint: string;
    passcode: string;
};
type FigmaWebhookPostRequestBody = {
    event_type: string;
    team_id: string;
    endpoint: string;
    passcode: string;
};
export {};
//# sourceMappingURL=utils.d.ts.map