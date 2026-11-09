/**
 * Generated from API version: 3.96.4
 */
export declare const idTagsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__idTagUid: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__idLabel: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__expireAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=id-tags-listing.d.ts.map