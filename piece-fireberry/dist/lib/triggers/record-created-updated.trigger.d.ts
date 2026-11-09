import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const recordCreatedOrUpdatedTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    objectType: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    triggerType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    lookbackMinutes: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    objectType: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    triggerType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    lookbackMinutes: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    objectType: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    triggerType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    lookbackMinutes: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    objectType: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    triggerType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    lookbackMinutes: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=record-created-updated.trigger.d.ts.map