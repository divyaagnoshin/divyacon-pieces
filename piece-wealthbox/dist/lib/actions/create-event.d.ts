export declare const createEvent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    starts_at: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    ends_at: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    all_day: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    repeats: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    state: import("@agnocon/pieces-framework").StaticDropdownProperty<"unconfirmed" | "confirmed" | "tentative" | "completed" | "cancelled", false>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    invitees: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    event_category: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    email_invitees: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    visible_to: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    custom_fields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-event.d.ts.map