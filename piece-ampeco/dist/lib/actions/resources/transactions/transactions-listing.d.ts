/**
 * Generated from API version: 3.96.4
 */
export declare const transactionsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__createdAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__createdBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__paymentMethod: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__invoiceNumber: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__sessionId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__ref: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__billingType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__terminalId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__finalizedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__finalizedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__voucherId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__purchaseType: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=transactions-listing.d.ts.map