export declare const getSubscriberById: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    subscriberId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const getSubscriberByEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email_address: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const listSubscribers: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
    sortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    sortField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    from: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    to: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    updatedFrom: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    updatedTo: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    emailAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const updateSubscriber: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    subscriberId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    emailAddress: {
        required: boolean;
        displayName: string;
        description?: string | undefined;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.SHORT_TEXT;
        defaultValue?: string | undefined;
    };
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
export declare const unsubscribeSubscriber: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const listTagsBySubscriberId: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    subscriberId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const listSubscriberTagsByEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    email_address: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=subscribers.d.ts.map