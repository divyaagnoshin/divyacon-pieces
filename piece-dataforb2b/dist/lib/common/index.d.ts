export declare const DATAFORB2B_API_BASE_URL = "https://api.dataforb2b.ai";
export declare const dataforb2bAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare function dataForB2BRequest<T = unknown>(apiKey: string, endpoint: string, body: Record<string, unknown>): Promise<T>;
export declare function dataForB2BGet<T = unknown>(apiKey: string, endpoint: string, queryParams: Record<string, string>): Promise<T>;
export declare const operatorMap: Record<string, string>;
export declare const operatorOptions: {
    label: string;
    value: string;
}[];
export declare const peopleFilterFields: {
    label: string;
    value: string;
}[];
export declare const companyFilterFields: {
    label: string;
    value: string;
}[];
export type RawFilter = {
    field: string;
    operator: string;
    value: string;
    value2?: string;
};
export declare const filterLogicProp: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare function buildFiltersProp(fields: {
    label: string;
    value: string;
}[], defaultField: string): import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
export declare function buildConditions(filters: RawFilter[]): Record<string, unknown>[];
/**
 * Combine the UI filter conditions (joined by `match` = and/or) with an optional
 * advanced filter group provided as raw JSON. Mirrors the Dify plugin behaviour.
 */
export declare function finalizeFilters(conditions: Record<string, unknown>[], match: string, advanced: unknown): Record<string, unknown> | undefined;
export declare const advancedFiltersProp: import("@agnocon/pieces-framework").JsonProperty<false>;
export declare const typeaheadTypeOptions: {
    label: string;
    value: string;
}[];
//# sourceMappingURL=index.d.ts.map