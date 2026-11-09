/**
 * Generated from API version: 3.96.4
 */
export declare const expensesListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__settlementReportId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__dateBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__dateAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__origin: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__currencyCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    withBreakdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=expenses-listing.d.ts.map