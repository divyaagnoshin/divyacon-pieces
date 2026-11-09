/**
 * Generated from API version: 3.96.4
 */
export declare const locationsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__state: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    filter__region: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__tag: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=locations-listing.d.ts.map