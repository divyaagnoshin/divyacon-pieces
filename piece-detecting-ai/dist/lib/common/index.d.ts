import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.detecting-ai.com";
export declare const detectingAiAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export type DetectingAiApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    endpoint: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: unknown;
};
export declare function detectingAiApiCall<T extends HttpMessageBody>({ apiKey, method, endpoint, query, body, }: DetectingAiApiCallParams): Promise<T>;
//# sourceMappingURL=index.d.ts.map