export declare const findInvoice: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    onPage: import("@agnocon/pieces-framework").NumberProperty<false>;
    clientId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    datetimeFrom: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    datetimeTo: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bookingCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=find-invoice.d.ts.map