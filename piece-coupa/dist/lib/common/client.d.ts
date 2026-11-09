import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import FormData from 'form-data';
export type CoupaAuthProps = {
    instanceUrl: string;
    clientId: string;
    clientSecret: string;
    scope: string;
};
export declare class CoupaClient {
    private readonly auth;
    private readonly baseUrl;
    private readonly tokenUrl;
    private accessToken;
    private tokenExpiresAt;
    private tokenPromise;
    constructor(auth: CoupaAuthProps);
    getAccessToken(): Promise<string>;
    private fetchAccessToken;
    request<T extends HttpMessageBody>({ method, resourceUri, query, body, headers, }: {
        method: HttpMethod;
        resourceUri: string;
        query?: Record<string, string | number | boolean | undefined>;
        body?: unknown;
        headers?: Record<string, string>;
    }): Promise<T>;
    requestMultipart<T extends HttpMessageBody>({ resourceUri, formData, }: {
        resourceUri: string;
        formData: FormData;
    }): Promise<T>;
    paginateRecords(resource: string, query?: Record<string, string | number | boolean | undefined>): AsyncGenerator<Record<string, unknown>[]>;
    fetchAllRecords(resource: string, query?: Record<string, string | number | boolean | undefined>): Promise<Record<string, unknown>[]>;
}
export declare const COUPA_PAGE_SIZE = 50;
//# sourceMappingURL=client.d.ts.map