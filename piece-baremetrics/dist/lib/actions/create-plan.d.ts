export declare const createPlan: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[], {
    source_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").SecretTextProperty<true>)[]>;
    oid: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    interval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    interval_count: import("@agnocon/pieces-framework").NumberProperty<true>;
    trial_duration: import("@agnocon/pieces-framework").NumberProperty<false>;
    trial_duration_unit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-plan.d.ts.map