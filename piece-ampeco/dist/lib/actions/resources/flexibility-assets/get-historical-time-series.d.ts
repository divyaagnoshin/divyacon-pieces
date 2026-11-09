/**
 * Generated from API version: 3.96.4
 */
export declare const getHistoricalTimeSeriesAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    flexibilityAsset: import("@agnocon/pieces-framework").NumberProperty<true>;
    filter__startTime: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__endTime: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=get-historical-time-series.d.ts.map