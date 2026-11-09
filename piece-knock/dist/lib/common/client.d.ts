import { HttpMethod } from '@agnocon/pieces-common';
interface KnockApiCallParams {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    query?: Record<string, string | string[] | undefined>;
}
export declare function knockApiCall(params: KnockApiCallParams): Promise<unknown>;
export {};
//# sourceMappingURL=client.d.ts.map