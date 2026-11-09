export declare const createOrUpdateSubscriber: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subscriberFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    subscriberGroupId: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    subscribed_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    opted_in_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    ip_address: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    optin_ip: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-or-update-subscription.d.ts.map