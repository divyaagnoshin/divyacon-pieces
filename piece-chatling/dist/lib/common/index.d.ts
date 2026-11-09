import { HttpMethod } from '@agnocon/pieces-common';
export declare const chatlingCommon: {
    baseUrl: string;
};
export declare function makeRequest<T = unknown>(apiKey: string, method: HttpMethod, path: string, body?: unknown): Promise<T>;
//# sourceMappingURL=index.d.ts.map