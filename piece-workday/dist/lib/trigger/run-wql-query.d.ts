import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const runWqlQuery: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    dateField: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    dateField: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    dateField: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    dateField: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=run-wql-query.d.ts.map