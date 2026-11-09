import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export type SendPulseAuthProps = {
    clientId: string;
    clientSecret: string;
};
export type SendPulseApiCallParams = {
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
    auth: SendPulseAuthProps;
};
export declare function sendpulseApiCall<T extends HttpMessageBody>({ method, resourceUri, query, body, auth, }: SendPulseApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map