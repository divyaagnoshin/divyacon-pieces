export declare const findBooking: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    dateFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dateTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    createdDateFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    createdDateTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    unitGroupId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    eventId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    isConfirmed: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    clientId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    bookingType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find-booking.d.ts.map