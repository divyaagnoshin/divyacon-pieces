import { HttpMethod } from '@agnocon/pieces-common';
declare function getBaseUrl(environment: string): string;
declare function makeRequest<T>({ auth, method, path, body, }: {
    auth: AipriseAuthValue;
    method: HttpMethod;
    path: string;
    body?: Record<string, unknown>;
}): Promise<T>;
export declare const aiprise: {
    PRODUCTION_BASE_URL: string;
    SANDBOX_BASE_URL: string;
    getBaseUrl: typeof getBaseUrl;
    makeRequest: typeof makeRequest;
};
export type AipriseAuthValue = {
    secret_text: string;
    environment: string;
};
export {};
//# sourceMappingURL=index.d.ts.map