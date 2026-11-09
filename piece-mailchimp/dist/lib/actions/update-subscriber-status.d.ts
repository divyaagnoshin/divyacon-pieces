export declare const updateSubscriberInList: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    list_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<"cleaned" | "pending" | "transactional" | "subscribed" | "unsubscribed", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"cleaned" | "pending" | "transactional" | "subscribed" | "unsubscribed", true>;
}>;
//# sourceMappingURL=update-subscriber-status.d.ts.map