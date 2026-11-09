export declare const addSubscriptionAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    planId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    payerId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    totalAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    sourceId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    surcharge: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>;
//# sourceMappingURL=add-subscription.d.ts.map