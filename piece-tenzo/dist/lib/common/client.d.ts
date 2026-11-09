import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionType } from '@agnocon/pieces-framework';
export type TenzoAuth = {
    type: AppConnectionType.OAUTH2 | AppConnectionType.CLOUD_OAUTH2 | AppConnectionType.PLATFORM_OAUTH2;
    access_token: string;
} | {
    type: AppConnectionType.SECRET_TEXT;
    secret_text: string;
} | {
    type: AppConnectionType.CUSTOM_AUTH;
    props: {
        appId: string;
        apiSecret: string;
    };
};
export type TenzoApiCallParams = {
    method: HttpMethod;
    path: `/${string}`;
    auth: TenzoAuth;
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
};
export declare function tenzoApiCall<TResult>({ method, path, auth, query, body, }: TenzoApiCallParams): Promise<TResult>;
//# sourceMappingURL=client.d.ts.map