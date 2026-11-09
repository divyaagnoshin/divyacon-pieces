export declare const createSubscription: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[], {
    source_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    oid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    started_at: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    canceled_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    customer_oid: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    plan_oid: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    discount: import("@agnocon/pieces-framework").NumberProperty<false>;
    addons: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-subscription.d.ts.map