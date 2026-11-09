import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
export declare const VISIBLE_BASE_URL = "https://api.visible.vc";
export declare function visibleMakeRequest<T extends HttpMessageBody>(params: {
    accessToken: string;
    method: HttpMethod;
    path: string;
    queryParams?: QueryParams;
    body?: unknown;
}): Promise<T>;
//# sourceMappingURL=client.d.ts.map