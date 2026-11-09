import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
export declare const REPLY_IO_API_ROOT = "https://api.reply.io";
export declare function buildReplyIoHeaders(apiKey: string, includeJsonContentType?: boolean): {
    'Content-Type'?: string | undefined;
    'Api-Key': string;
    'X-Api-Key': string;
};
export declare function replyIoRequest({ apiKey, method, path, queryParams, body, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    queryParams?: QueryParams;
    body?: unknown;
}): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare function cleanPayload(payload: Record<string, unknown>): Record<string, unknown>;
export declare function extractCollection<T = Record<string, unknown>>(body: unknown): T[];
//# sourceMappingURL=client.d.ts.map