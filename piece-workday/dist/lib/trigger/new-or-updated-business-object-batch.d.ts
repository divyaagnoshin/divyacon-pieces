import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newOrUpdatedBusinessObjectBatch: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    dateField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilters: import("@agnocon/pieces-framework").JsonProperty<false>;
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    businessObject: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    dateField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilters: import("@agnocon/pieces-framework").JsonProperty<false>;
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    businessObject: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    dateField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilters: import("@agnocon/pieces-framework").JsonProperty<false>;
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    businessObject: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    dateField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilters: import("@agnocon/pieces-framework").JsonProperty<false>;
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    businessObject: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=new-or-updated-business-object-batch.d.ts.map