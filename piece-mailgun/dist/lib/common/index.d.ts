import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function verifyMailgunSignature(apiKey: string, timestamp: string, token: string, signature: string): boolean;
export declare function mailgunApiCall<T extends HttpMessageBody>({ apiKey, region, method, path, body, queryParams, headers, }: {
    apiKey: string;
    region: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
    headers?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare function subscribeWebhook({ apiKey, region, domain, eventType, webhookUrl, }: {
    apiKey: string;
    region: string;
    domain: string;
    eventType: string;
    webhookUrl: string;
}): Promise<void>;
export declare function unsubscribeWebhook({ apiKey, region, domain, eventType, }: {
    apiKey: string;
    region: string;
    domain: string;
    eventType: string;
}): Promise<void>;
export declare function mailgunApiCallAbsoluteUrl<T extends HttpMessageBody>({ apiKey, url, }: {
    apiKey: string;
    url: string;
}): Promise<HttpResponse<T>>;
export declare const mailgunCommon: {
    domainDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    mailingListDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
};
//# sourceMappingURL=index.d.ts.map