import { HttpMethod } from '@agnocon/pieces-common';
export declare const tldvCommon: {
    baseUrl: string;
    apiCall<T>({ method, url, body, auth, headers, }: {
        method: HttpMethod;
        url: string;
        body?: any;
        auth: string | {
            apiKey: string;
        };
        headers?: Record<string, string>;
    }): Promise<T>;
};
//# sourceMappingURL=client.d.ts.map