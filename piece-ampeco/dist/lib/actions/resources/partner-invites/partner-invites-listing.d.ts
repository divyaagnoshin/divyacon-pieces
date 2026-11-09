/**
 * Generated from API version: 3.96.4
 */
export declare const partnerInvitesListingAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__partnerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__createdFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__createdTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__userId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__inviteEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=partner-invites-listing.d.ts.map