export declare const addAddonUsageAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    accountUid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    addOnUid: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    usageDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=add-addon-usage.d.ts.map