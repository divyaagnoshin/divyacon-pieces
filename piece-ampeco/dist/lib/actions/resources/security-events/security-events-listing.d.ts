/**
 * Generated from API version: 3.96.4
 */
export declare const securityEventsListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__chargePoint: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__timestampFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    filter__timestampTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=security-events-listing.d.ts.map