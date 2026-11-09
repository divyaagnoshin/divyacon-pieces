export declare const listIncidents: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    personalOrTeamApiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sendYourDataApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    coralogixDomain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    status: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    severity: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    applicationName: import("@agnocon/pieces-framework").ArrayProperty<false>;
    subsystemName: import("@agnocon/pieces-framework").ArrayProperty<false>;
    pageSize: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-incidents.d.ts.map