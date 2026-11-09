import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const getAssistants: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    start: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    start: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    start: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    start: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=get-assistants.d.ts.map