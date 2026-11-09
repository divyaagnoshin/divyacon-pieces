import { MixmaxAuth } from './auth';
export declare const mixmaxApiClient: {
    getRequest: typeof getRequest;
    postRequest: typeof postRequest;
};
declare function getRequest({ auth, endpoint, queryParams }: GetRequestParams): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
declare function postRequest({ auth, endpoint, body }: PostRequestParams): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
type GetRequestParams = {
    auth: MixmaxAuth;
    endpoint: string;
    queryParams?: Record<string, string>;
};
type PostRequestParams = {
    auth: MixmaxAuth;
    endpoint: string;
    body: Record<string, unknown>;
};
export {};
//# sourceMappingURL=common.d.ts.map