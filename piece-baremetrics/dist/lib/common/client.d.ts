import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionType } from '@agnocon/pieces-framework';
export type BaremetricsAuth = {
    type: AppConnectionType.OAUTH2 | AppConnectionType.CLOUD_OAUTH2 | AppConnectionType.PLATFORM_OAUTH2;
    access_token: string;
} | {
    type: AppConnectionType.SECRET_TEXT;
    secret_text: string;
};
export type BaremetricsApiCallParams = {
    method: HttpMethod;
    path: `/${string}`;
    auth: BaremetricsAuth;
    body?: unknown;
};
export declare function baremetricsApiCall<TResult>({ method, path, auth, body, }: BaremetricsApiCallParams): Promise<TResult>;
//# sourceMappingURL=client.d.ts.map