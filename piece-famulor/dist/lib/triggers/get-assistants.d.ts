import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const getAssistants: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=get-assistants.d.ts.map