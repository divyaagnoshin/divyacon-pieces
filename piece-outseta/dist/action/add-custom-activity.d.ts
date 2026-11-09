export declare const addCustomActivityAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    entityType: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    entityUid: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    activityData: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=add-custom-activity.d.ts.map