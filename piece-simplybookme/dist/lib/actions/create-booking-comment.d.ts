export declare const createBookingComment: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    bookingId: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    comment: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=create-booking-comment.d.ts.map