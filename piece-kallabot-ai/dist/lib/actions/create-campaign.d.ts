export declare const createCampaignAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    agent_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    list_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    sender_phone_numbers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    delay_between_calls: import("@agnocon/pieces-framework").NumberProperty<false>;
    scheduled_time: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    rotate_numbers_after: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-campaign.d.ts.map