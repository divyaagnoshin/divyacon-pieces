export declare const updateJobSchedule: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    job_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    start_time: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    end_time: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    arrival_window_in_minutes: import("@agnocon/pieces-framework").NumberProperty<false>;
    notify: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    notify_pro: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    expand: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    dispatched_employees: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=update-job-schedule.d.ts.map