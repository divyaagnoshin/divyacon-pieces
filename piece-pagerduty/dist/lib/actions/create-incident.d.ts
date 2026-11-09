export declare const createIncident: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fromEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    serviceId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    urgency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    details: import("@agnocon/pieces-framework").LongTextProperty<false>;
    incidentKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assigneeIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    priorityId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    conferenceNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    conferenceUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-incident.d.ts.map