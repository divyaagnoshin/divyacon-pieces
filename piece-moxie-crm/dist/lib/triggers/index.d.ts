export declare const enum MoxieCRMEventType {
    CLIENT_CREATED = "ClientCreate",
    CLIENT_UPDATED = "ClientUpdate",
    CLIENT_DELETED = "ClientDelete",
    PROJECT_CREATED = "ProjectCreate",
    PROJECT_UPDATED = "ProjectUpdate",
    PROJECT_COMPLETED = "ProjectComplete",
    TASK_CREATED = "DeliverableCreate",
    TASK_UPDATED = "DeliverableUpdate",
    TASK_DELETED = "DeliverableDelete",
    TASK_APPROVAL = "DeliverableApproval",
    FORM_SUBMITTED = "FormCompleted",
    TIME_ENTRY_CREATED = "TimerCreate",
    TIME_ENTRY_UPDATED = "TimerUpdate",
    TIME_ENTRY_DELETED = "TimerDelete",
    MEETING_SCHEDULED = "MeetingScheduled",
    MEETING_UPDATED = "MeetingUpdated",
    MEETING_CANCELLED = "MeetingCancelled",
    OPPORTUNITY_CREATED = "OpportunityCreate",
    OPPORTUNITY_UPDATED = "OpportunityUpdate",
    OPPORTUNITY_DELETED = "OpportunityDelete",
    INVOICE_SENT = "InvoiceSent",
    PAYMENT_RECEIVED = "PaymentReceived"
}
export declare const moxieCRMTriggers: (import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    md: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    md: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    md: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}> | import("@agnocon/pieces-framework").ITrigger<import("@agnocon/piece-types").TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    md: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}>)[];
//# sourceMappingURL=index.d.ts.map