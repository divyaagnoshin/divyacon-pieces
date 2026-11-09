import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const deletedRecord: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pod: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    objectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pod: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    objectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pod: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    objectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    pod: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    objectType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=deleted-record.d.ts.map