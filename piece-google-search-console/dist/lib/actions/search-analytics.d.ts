export declare const searchAnalytics: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    siteUrl: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    endDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    dimensions: import("@agnocon/pieces-framework").ArrayProperty<false>;
    searchType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filters: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    aggregationType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    rowLimit: import("@agnocon/pieces-framework").NumberProperty<false>;
    startRow: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=search-analytics.d.ts.map