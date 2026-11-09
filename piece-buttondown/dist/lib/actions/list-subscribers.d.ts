export declare const listSubscribers: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    cursor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common/types").ButtondownSubscriberType, false>;
    source: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common/types").ButtondownSubscriberSource, false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    emailAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    referrerUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ordering: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=list-subscribers.d.ts.map