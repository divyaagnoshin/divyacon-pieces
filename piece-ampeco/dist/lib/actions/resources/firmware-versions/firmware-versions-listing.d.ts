/**
 * Generated from API version: 3.96.4
 */
export declare const firmwareVersionsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__vendorId: import("@agnocon/pieces-framework").ArrayProperty<false>;
    filter__modelId: import("@agnocon/pieces-framework").ArrayProperty<false>;
    filter__firmwareVersion: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    include: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=firmware-versions-listing.d.ts.map