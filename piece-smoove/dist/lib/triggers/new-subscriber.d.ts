import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newSubscriber: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeCustomFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeLinkedLists: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    joinSourceFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxItems: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeCustomFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeLinkedLists: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    joinSourceFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxItems: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeCustomFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeLinkedLists: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    joinSourceFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxItems: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    fields: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeCustomFields: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeLinkedLists: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    joinSourceFilter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxItems: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=new-subscriber.d.ts.map