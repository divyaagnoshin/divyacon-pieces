import { HttpMethod } from '@agnocon/pieces-common';
export declare const featheryCommon: {
    baseUrl: string;
    apiCall<T>({ method, url, body, apiKey, headers, }: {
        method: HttpMethod;
        url: string;
        body?: any;
        apiKey: string;
        headers?: Record<string, string>;
    }): Promise<T>;
};
//# sourceMappingURL=client.d.ts.map