export interface PromptHubClientOptions {
    baseUrl?: string;
    timeoutMs?: number;
    maxRetries?: number;
    initialBackoffMs?: number;
}
export declare class PromptHubClient {
    private readonly apiKey;
    private readonly baseUrl;
    private readonly timeoutMs;
    private readonly maxRetries;
    private readonly initialBackoffMs;
    constructor(apiKey: string, options?: PromptHubClientOptions);
    validateToken(): Promise<boolean>;
    getMe(): Promise<any>;
    listProjects(teamId: number, query?: Record<string, string | number | boolean | undefined>): Promise<any>;
    getProjectHead(projectId: number, query?: Record<string, string | number | boolean | undefined>): Promise<any>;
    runProject(projectId: number, body: any, timeoutMs?: number): Promise<any>;
    private get;
    private post;
    private sendWithRetry;
    private buildQuery;
    private exponentialBackoffWithJitter;
    private sleep;
}
//# sourceMappingURL=client.d.ts.map