import { TriggerStrategy } from '@agnocon/pieces-framework';
import { TriggerField } from '../../common/constants';
export declare const tirePressureTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    vehicleTokenIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    tirePosition: import("@agnocon/pieces-framework").StaticDropdownProperty<TriggerField, true>;
    operator: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../../common/constants").Operator, true>;
    pressureKpa: import("@agnocon/pieces-framework").NumberProperty<true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    vehicleTokenIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    tirePosition: import("@agnocon/pieces-framework").StaticDropdownProperty<TriggerField, true>;
    operator: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../../common/constants").Operator, true>;
    pressureKpa: import("@agnocon/pieces-framework").NumberProperty<true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    vehicleTokenIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    tirePosition: import("@agnocon/pieces-framework").StaticDropdownProperty<TriggerField, true>;
    operator: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../../common/constants").Operator, true>;
    pressureKpa: import("@agnocon/pieces-framework").NumberProperty<true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    redirectUri: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    vehicleTokenIds: import("@agnocon/pieces-framework").ArrayProperty<false>;
    tirePosition: import("@agnocon/pieces-framework").StaticDropdownProperty<TriggerField, true>;
    operator: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../../common/constants").Operator, true>;
    pressureKpa: import("@agnocon/pieces-framework").NumberProperty<true>;
    coolDownPeriod: import("@agnocon/pieces-framework").NumberProperty<true>;
    verificationToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=trigger.d.ts.map