import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const alertForQuery: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    cron: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    alwaysTrigger: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    repeat: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    cron: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    alwaysTrigger: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    repeat: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    cron: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    alwaysTrigger: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    repeat: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    cron: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    alwaysTrigger: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    repeat: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=alert-for-query.d.ts.map