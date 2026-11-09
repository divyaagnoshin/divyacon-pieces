import { HttpMethod } from '@agnocon/pieces-common';
type TwentyAuth = {
    props: {
        base_url: string;
        api_key: string;
    };
};
export declare function twentyRequest<T = unknown>(auth: TwentyAuth, method: HttpMethod, path: string, body?: unknown, queryParams?: Record<string, string>): Promise<T>;
export declare function parseSingleRecord(body: unknown): Record<string, unknown>;
export declare function parseRecords(body: unknown): Record<string, unknown>[];
export {};
//# sourceMappingURL=index.d.ts.map