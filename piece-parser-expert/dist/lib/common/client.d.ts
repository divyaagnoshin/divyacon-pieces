import { HttpMethod } from '@agnocon/pieces-common';
export declare const parserExpertCommon: {
    baseUrl: string;
    apiCall<T>({ method, url, auth, body, headers, queryParams, }: {
        method: HttpMethod;
        url: string;
        auth: string;
        body?: any;
        headers?: Record<string, string>;
        queryParams?: Record<string, string>;
    }): Promise<T>;
};
//# sourceMappingURL=client.d.ts.map