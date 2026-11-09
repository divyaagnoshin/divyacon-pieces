export declare const acknowledgeIncidents: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    personalOrTeamApiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sendYourDataApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    coralogixDomain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    incidentIds: import("@agnocon/pieces-framework").ArrayProperty<true>;
}>;
//# sourceMappingURL=acknowledge-incidents.d.ts.map