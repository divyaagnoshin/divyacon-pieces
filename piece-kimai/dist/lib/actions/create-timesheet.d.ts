export declare const kimaiCreateTimesheetAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    activity: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    begin: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-timesheet.d.ts.map