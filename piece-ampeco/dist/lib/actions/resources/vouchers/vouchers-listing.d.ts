/**
 * Generated from API version: 3.96.4
 */
export declare const vouchersListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__createdAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__redeemedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__redeemedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__expireDateAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__expireDateBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=vouchers-listing.d.ts.map