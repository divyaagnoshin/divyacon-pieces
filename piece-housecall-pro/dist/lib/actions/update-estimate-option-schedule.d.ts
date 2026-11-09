export declare const updateEstimateOptionSchedule: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    estimate_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    option_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    start_time: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end_time: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    arrival_window_in_minutes: import("@agnocon/pieces-framework").NumberProperty<true>;
    notify: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    notify_pro: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    expand: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    dispatched_employees: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=update-estimate-option-schedule.d.ts.map