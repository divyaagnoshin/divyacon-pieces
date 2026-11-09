import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const ignitionTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    vehicleTokenIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    ignitionState: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    vehicleTokenIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    ignitionState: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    vehicleTokenIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    ignitionState: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    vehicleTokenIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    ignitionState: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=trigger.d.ts.map