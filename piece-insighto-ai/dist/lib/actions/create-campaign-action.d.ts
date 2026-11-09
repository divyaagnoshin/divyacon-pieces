export declare const createCampaignAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    start_time: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    interval: import("@agnocon/pieces-framework").NumberProperty<true>;
    widget_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    attributes: import("@agnocon/pieces-framework").ObjectProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    execution_weekdays: import("@agnocon/pieces-framework").ArrayProperty<false>;
    time_window_start: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    time_window_end: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    time_zone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    enabled: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-campaign-action.d.ts.map