export declare const createJob: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    customer_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    address_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    invoice_number: import("@agnocon/pieces-framework").NumberProperty<false>;
    scheduled_start: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    scheduled_end: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    arrival_window: import("@agnocon/pieces-framework").NumberProperty<false>;
    assigned_employee_ids: import("@agnocon/pieces-framework").ArrayProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    lead_source: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    line_items: import("@agnocon/pieces-framework").ArrayProperty<false>;
    pricing_form: import("@agnocon/pieces-framework").JsonProperty<false>;
    job_fields: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-job.d.ts.map