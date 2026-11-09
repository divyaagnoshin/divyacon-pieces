export declare const createMonitor: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    detection_mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    signal_types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    destination_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    webhook_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sequence_identifier: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    record_type: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    frequency_minute: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_daily_trigger: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_records_per_trigger: import("@agnocon/pieces-framework").NumberProperty<false>;
    companies: import("@agnocon/pieces-framework").ArrayProperty<false>;
    domains: import("@agnocon/pieces-framework").ArrayProperty<false>;
    linkedin_urls: import("@agnocon/pieces-framework").ArrayProperty<false>;
    company_filters: import("@agnocon/pieces-framework").LongTextProperty<false>;
    signal_filters: import("@agnocon/pieces-framework").LongTextProperty<false>;
    people_enrichment_configs: import("@agnocon/pieces-framework").LongTextProperty<false>;
    is_company_enrichment: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    is_people_enrichment: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    max_failure_trigger: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_retry_per_trigger: import("@agnocon/pieces-framework").NumberProperty<false>;
    retry_delay_second: import("@agnocon/pieces-framework").NumberProperty<false>;
    notification_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-monitor.d.ts.map