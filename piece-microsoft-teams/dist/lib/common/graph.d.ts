import { Client } from '@microsoft/microsoft-graph-client';
type GraphRetryOptions = {
    maxRetries?: number;
    initialDelayMs?: number;
    maxDelayMs?: number;
};
export declare const createGraphClient: (accessToken: string, cloud?: string | null) => Client;
export declare const buildGraphErrorMessage: (error: any) => string;
export declare const resolveMeetingId: ({ client, identifierType, identifierValue, }: {
    client: Client;
    identifierType: string;
    identifierValue: string;
}) => Promise<string>;
export declare const withGraphRetry: <T>(requestFn: () => Promise<T>, options?: GraphRetryOptions) => Promise<T>;
export declare const paginateGraphList: <T>(params: {
    client: Client;
    initialUrl: string;
    pageSize?: number;
    maxItems: number;
    expand?: string;
}) => Promise<{
    items: T[];
    truncated: boolean;
    error: Error | null;
}>;
export {};
//# sourceMappingURL=graph.d.ts.map