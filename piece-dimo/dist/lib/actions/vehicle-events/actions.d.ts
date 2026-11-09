import { CustomAuthProperty } from "@agnocon/pieces-framework";
import { TriggerField } from '../../common/constants';
export declare const vehicleEventsApiActions: (import("@agnocon/pieces-framework").IAction<CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").IAction<CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    webhookId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    data: import("@agnocon/pieces-framework").StaticDropdownProperty<TriggerField, true>;
    operator: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../../common/constants").Operator, true>;
    triggerNumber: import("@agnocon/pieces-framework").NumberProperty<true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    targetURL: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    displayName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").IAction<CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    webhookId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    data: import("@agnocon/pieces-framework").StaticDropdownProperty<TriggerField, true>;
    operator: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    triggerExpression: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    targetURL: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    displayName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").IAction<CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    webhookId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    targetURL: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    displayName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").IAction<CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    webhookId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").IAction<CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    tokenId: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").IAction<CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    webhookId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    tokenId: import("@agnocon/pieces-framework").NumberProperty<true>;
}>)[];
//# sourceMappingURL=actions.d.ts.map