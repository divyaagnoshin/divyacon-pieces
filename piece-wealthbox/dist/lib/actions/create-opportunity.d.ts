export declare const createOpportunity: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    target_close: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    probability: import("@agnocon/pieces-framework").NumberProperty<true>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    currency: import("@agnocon/pieces-framework").StaticDropdownProperty<"$" | "€" | "£" | "C$" | "A$", false>;
    amount_kind: import("@agnocon/pieces-framework").StaticDropdownProperty<"Other" | "Fee" | "Commission" | "AUM", false>;
    stage: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    manager: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    visible_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    custom_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-opportunity.d.ts.map