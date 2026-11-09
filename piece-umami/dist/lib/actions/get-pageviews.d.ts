export declare const getPageviews: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>)[], {
    websiteId: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    endDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    unit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=get-pageviews.d.ts.map