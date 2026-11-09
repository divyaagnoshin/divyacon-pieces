import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export type SmartSuiteApiCallParams = {
    apiKey: string;
    accountId: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export type PaginatedResponse<T> = {
    results: T[];
    count: number;
    next?: string;
    previous?: string;
};
export type TableStucture = {
    slug: string;
    label: string;
    field_type: string;
    params: {
        is_auto_generated: boolean;
        system: boolean;
        choices?: {
            label: string;
            value: string;
        }[];
    };
};
export declare function smartSuiteApiCall<T extends HttpMessageBody>({ apiKey, accountId, method, resourceUri, query, body, }: SmartSuiteApiCallParams): Promise<T>;
export declare function smartSuitePaginatedApiCall<T extends HttpMessageBody>({ apiKey, accountId, method, resourceUri, query, body, }: SmartSuiteApiCallParams): Promise<T[]>;
//# sourceMappingURL=index.d.ts.map