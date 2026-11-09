import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.airtop.ai/api/v1";
export type AirtopApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export type AirtopApiResponse<T = any> = {
    data?: T;
    message?: string;
    error?: string;
    statusCode?: number;
};
export type AirtopSession = {
    id: string;
    status: 'active' | 'inactive' | 'terminated' | 'expired';
    createdAt?: string;
    configuration?: any;
};
export type AirtopWindow = {
    windowId: string;
    targetId: string;
    status?: string;
    url?: string;
};
export type AirtopFile = {
    id: string;
    fileName: string;
    fileType: string;
    size?: number;
    createdAt?: string;
};
export declare function airtopApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: AirtopApiCallParams): Promise<T>;
export declare function extractApiData<T>(response: any, fallback?: T[]): T[];
//# sourceMappingURL=client.d.ts.map