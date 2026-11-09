/**
 * Generated from API version: 3.96.4
 */
export declare const reservationsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__evseId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__reservedFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__reservedTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=reservations-listing.d.ts.map