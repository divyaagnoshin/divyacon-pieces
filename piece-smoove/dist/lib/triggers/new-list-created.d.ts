import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newListCreated: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxItems: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxItems: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxItems: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxItems: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=new-list-created.d.ts.map