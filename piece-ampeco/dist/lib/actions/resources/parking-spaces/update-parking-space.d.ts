/**
 * Generated from API version: 3.96.4
 */
export declare const updateParkingSpaceAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    parkingSpace: import("@agnocon/pieces-framework").NumberProperty<true>;
    label: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    locationId: import("@agnocon/pieces-framework").NumberProperty<true>;
    externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    occupancyStatus: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    disabilitiesAccessible: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    evses: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=update-parking-space.d.ts.map