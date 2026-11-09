import { HttpMethod } from '@agnocon/pieces-common';
export declare const PAGERDUTY_API_BASE_URL = "https://api.pagerduty.com";
export declare const PAGERDUTY_ACCEPT_HEADER = "application/vnd.pagerduty+json;version=2";
export declare function pagerDutyHeaders(apiKey: string, fromEmail?: string): Record<string, string>;
export declare function pagerDutyApiCall<T = unknown>(params: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    query?: Record<string, string | string[] | undefined>;
    fromEmail?: string;
}): Promise<T>;
//# sourceMappingURL=client.d.ts.map