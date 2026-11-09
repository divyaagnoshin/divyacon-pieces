import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { AttioRecordResponse, WorkspaceMemberResponse } from './types';
export declare const BASE_URL = "https://api.attio.com/v2";
export type AttioApiCallParams = {
    accessToken: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare function attioApiCall<T extends HttpMessageBody>({ accessToken, method, resourceUri, query, body, }: AttioApiCallParams): Promise<T>;
export declare function attioPaginatedApiCall<T extends HttpMessageBody>({ accessToken, method, resourceUri, query, body, }: AttioApiCallParams): Promise<T[]>;
export declare function buildMembersMap(accessToken: string, records: AttioRecordResponse[]): Promise<Record<string, WorkspaceMemberResponse>>;
export declare function normalizeRecord(record: AttioRecordResponse, membersMap: Record<string, WorkspaceMemberResponse>): Record<string, unknown>;
export declare function verifyWebhookSignature(webhookSecret?: string, webhookSignatureHeader?: string, webhookRawBody?: any): boolean;
//# sourceMappingURL=client.d.ts.map