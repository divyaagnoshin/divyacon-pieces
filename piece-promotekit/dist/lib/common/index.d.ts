import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function promotekitApiCall<T extends HttpMessageBody>({ token, method, path, body, queryParams, }: {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare function promotekitPaginatedApiCall<T>({ token, path, queryParams, }: {
    token: string;
    path: string;
    queryParams?: Record<string, string>;
}): Promise<T[]>;
declare function flattenAffiliate(affiliate: Record<string, unknown>): Record<string, unknown>;
declare function flattenReferral(referral: Record<string, unknown>): Record<string, unknown>;
declare function flattenCommission(commission: Record<string, unknown>): Record<string, unknown>;
declare function flattenPayout(payout: Record<string, unknown>): Record<string, unknown>;
export declare const promotekitCommon: {
    flattenAffiliate: typeof flattenAffiliate;
    flattenReferral: typeof flattenReferral;
    flattenCommission: typeof flattenCommission;
    flattenPayout: typeof flattenPayout;
    campaignDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    affiliateDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export {};
//# sourceMappingURL=index.d.ts.map