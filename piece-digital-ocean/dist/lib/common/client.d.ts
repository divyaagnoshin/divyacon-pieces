import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionType } from '@agnocon/pieces-framework';
export type DigitalOceanAuth = {
    type: AppConnectionType.OAUTH2 | AppConnectionType.CLOUD_OAUTH2 | AppConnectionType.PLATFORM_OAUTH2;
    access_token: string;
} | {
    type: AppConnectionType.SECRET_TEXT;
    secret_text: string;
};
export type DigitalOceanApiCallParams = {
    method: HttpMethod;
    path: `/${string}`;
    auth: DigitalOceanAuth;
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
};
export declare function getAuthFromValue(auth: unknown): DigitalOceanAuth;
export declare function digitalOceanApiCall<TResult>({ method, path, auth, query, body, }: DigitalOceanApiCallParams): Promise<TResult>;
//# sourceMappingURL=client.d.ts.map