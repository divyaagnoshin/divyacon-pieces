/**
 * Generated from API version: 3.96.4
 */
export declare const locationCreateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    shortDescription: import("@agnocon/pieces-framework").ArrayProperty<false>;
    description: import("@agnocon/pieces-framework").ArrayProperty<false>;
    additionalDescription: import("@agnocon/pieces-framework").ArrayProperty<false>;
    geoposition__latitude: import("@agnocon/pieces-framework").NumberProperty<true>;
    geoposition__longitude: import("@agnocon/pieces-framework").NumberProperty<true>;
    address: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    streetAddress: import("@agnocon/pieces-framework").ArrayProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    state: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    country: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    postCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    workingHours__isAlwaysOpen: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    workingHours__stopSessionOutsideWorkingHours: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    workingHours__alwaysOpenForUserGroupIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    workingHours__hours__monday: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    workingHours__hours__tuesday: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    workingHours__hours__wednesday: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    workingHours__hours__thursday: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    workingHours__hours__friday: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    workingHours__hours__saturday: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    workingHours__hours__sunday: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    externalId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    roamingOperatorId: import("@agnocon/pieces-framework").NumberProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=location-create.d.ts.map