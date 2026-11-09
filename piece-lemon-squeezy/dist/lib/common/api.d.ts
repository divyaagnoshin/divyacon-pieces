export declare const LEMON_SQUEEZY_API_BASE = "https://api.lemonsqueezy.com/v1";
export declare function getLemonSqueezyHeaders(apiKey: string): Record<string, string>;
/**
 * Builds a query string that preserves bracket characters in parameter names.
 * URLSearchParams percent-encodes brackets (e.g. filter[store_id] becomes
 * filter%5Bstore_id%5D), which some JSON:API servers reject.
 */
export declare function buildQueryString(params: Record<string, string>): string;
export declare function fetchStoreOptions(apiKey: string): Promise<{
    label: string;
    value: string;
}[]>;
export declare function fetchOrderOptions(apiKey: string, storeId?: string): Promise<{
    label: string;
    value: string;
}[]>;
export declare function fetchProductOptions(apiKey: string, storeId?: string): Promise<{
    label: string;
    value: string;
}[]>;
export declare function fetchVariantOptions(apiKey: string, productId?: string): Promise<{
    label: string;
    value: string;
}[]>;
//# sourceMappingURL=api.d.ts.map