import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newIncident: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    personalOrTeamApiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sendYourDataApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    coralogixDomain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    severity: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    personalOrTeamApiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sendYourDataApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    coralogixDomain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    severity: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    personalOrTeamApiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sendYourDataApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    coralogixDomain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    severity: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    personalOrTeamApiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    sendYourDataApiKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    coralogixDomain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    severity: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>;
//# sourceMappingURL=new-incident.d.ts.map