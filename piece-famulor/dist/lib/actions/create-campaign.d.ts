export declare const createCampaign: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    assistant_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    max_calls_in_parallel: import("@agnocon/pieces-framework").NumberProperty<false>;
    allowed_hours_start_time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    allowed_hours_end_time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    allowed_days: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    max_retries: import("@agnocon/pieces-framework").NumberProperty<false>;
    retry_interval: import("@agnocon/pieces-framework").NumberProperty<false>;
    retry_on_voicemail: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    retry_on_goal_incomplete: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    goal_completion_variable: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    mark_complete_when_no_leads: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    phone_number_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-campaign.d.ts.map