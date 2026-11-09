/**
 * Generated from API version: 3.96.4
 */
export declare const receiptsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__taxId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__paymentStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__periodStart: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__periodEnd: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=receipts-listing.d.ts.map