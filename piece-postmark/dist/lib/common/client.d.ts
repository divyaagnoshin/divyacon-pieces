import { QueryParams } from '@agnocon/pieces-common';
export declare const postmarkClient: {
    get: <TResponse>(apiToken: string, path: string, queryParams?: QueryParams) => Promise<TResponse>;
    post: <TResponse>(apiToken: string, path: string, body?: unknown) => Promise<TResponse>;
};
export type MessageStream = {
    ID: string;
    ServerID?: number;
    Name: string;
    MessageStreamType?: string;
    Description?: string;
    ArchivedAt?: string | null;
};
export type MessageStreamListResponse = {
    MessageStreams: MessageStream[];
    TotalCount: number;
};
export type SendEmailResponse = {
    To: string;
    SubmittedAt: string;
    MessageID: string;
    ErrorCode: number;
    Message: string;
};
export type Bounce = {
    ID: number;
    Type: string;
    TypeCode: number;
    Name?: string;
    Tag?: string;
    MessageID: string;
    Description: string;
    Details?: string;
    Email: string;
    BouncedAt: string;
    DumpAvailable?: boolean;
    Inactive?: boolean;
    CanActivate?: boolean;
    Content?: string;
    Subject?: string;
};
export type BounceListResponse = {
    TotalCount: number;
    Bounces: Bounce[];
};
export type DeliveryStatsResponse = {
    InactiveMails?: number;
    Bounces?: Array<{
        Type: string;
        Name: string;
        Count: number;
    }>;
};
//# sourceMappingURL=client.d.ts.map