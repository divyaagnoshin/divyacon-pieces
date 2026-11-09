import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionType } from '@agnocon/pieces-framework';
export type ClicdataAuth = {
    type: AppConnectionType.OAUTH2 | AppConnectionType.CLOUD_OAUTH2 | AppConnectionType.PLATFORM_OAUTH2;
    access_token: string;
} | {
    type: AppConnectionType.SECRET_TEXT;
    secret_text: string;
} | {
    type: AppConnectionType.CUSTOM_AUTH;
    props: {
        clientId: string;
        userEmail: string;
        userPassword: string;
    };
};
type ClicdataApiSuccessResponse<TResult> = {
    success: true;
    result: TResult;
    pagination?: {
        result_count: number;
        result_total_count?: number;
        current_page: number;
        page_size: number;
        has_more_results?: boolean;
        last_page?: boolean;
    };
};
export type ClicdataApiCallParams = {
    method: HttpMethod;
    path: `/${string}`;
    auth: ClicdataAuth;
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
    apiVersion?: string;
};
export declare function clicdataApiCall<TResult>({ method, path, auth, query, body, apiVersion, }: ClicdataApiCallParams): Promise<ClicdataApiSuccessResponse<TResult>>;
export {};
//# sourceMappingURL=client.d.ts.map