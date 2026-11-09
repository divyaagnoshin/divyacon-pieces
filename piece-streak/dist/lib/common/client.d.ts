import { HttpMessageBody, HttpMethod, HttpResponse, QueryParams } from '@agnocon/pieces-common';
export declare function streakApiCall<T extends HttpMessageBody>({ apiKey, method, path, queryParams, body, contentType, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    queryParams?: QueryParams;
    body?: unknown;
    contentType?: 'application/json' | 'application/x-www-form-urlencoded';
}): Promise<HttpResponse<T>>;
export declare const STREAK_BASE_URL = "https://api.streak.com";
//# sourceMappingURL=client.d.ts.map