export declare const createNote: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    startDateTime: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    endDateTime: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    noteTypeId: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    note: import("@agnocon/pieces-framework").LongTextProperty<true>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    timeBlocked: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    providerId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    serviceId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-note.d.ts.map