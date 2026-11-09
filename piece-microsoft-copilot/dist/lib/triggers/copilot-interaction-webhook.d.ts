import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const copilotInteractionWebhook: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    scope: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    userId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    changeTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    expirationHours: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    scope: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    userId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    changeTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    expirationHours: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    scope: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    userId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    changeTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    expirationHours: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    scope: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    userId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    changeTypes: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    expirationHours: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=copilot-interaction-webhook.d.ts.map