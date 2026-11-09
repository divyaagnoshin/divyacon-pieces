import { HttpMethod } from '@agnocon/pieces-common';
export declare const assembledCommon: {
    baseUrl: string;
    makeRequest(auth: string, method: HttpMethod, endpoint: string, body?: unknown, headers?: Record<string, string>): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
    formatDateTime(date: string | Date): string;
    formatDate(date: string | Date): string;
    makeClient(auth: string): {
        rawRequest: (query: string, variables?: Record<string, unknown>) => Promise<any>;
    };
};
//# sourceMappingURL=index.d.ts.map