export declare const resolveIncidentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    incident_sys_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    resolution: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    close_code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    close_notes: import("@agnocon/pieces-framework").LongTextProperty<true>;
    resolved_by: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=resolve-incident.d.ts.map