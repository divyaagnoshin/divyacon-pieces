export declare const setAlertActive: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    personalOrTeamApiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sendYourDataApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    coralogixDomain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    alertId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    active: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=set-alert-active.d.ts.map