import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
declare function fetchAccessToken({ email, password, }: {
    email: string;
    password: string;
}): Promise<string>;
declare function inboxApiCall<T extends HttpMessageBody>({ token, service, method, path, body, queryParams, }: {
    token: string;
    service: 'inbox' | 'notify';
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string | undefined>;
}): Promise<HttpResponse<T>>;
export declare const useinboxClient: {
    fetchAccessToken: typeof fetchAccessToken;
    inboxApiCall: typeof inboxApiCall;
    ACCOUNT_BASE_URL: string;
    INBOX_BASE_URL: string;
    NOTIFY_BASE_URL: string;
};
export {};
//# sourceMappingURL=client.d.ts.map