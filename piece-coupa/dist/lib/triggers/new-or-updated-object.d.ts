import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newOrUpdatedObject: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customResource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilters: import("@agnocon/pieces-framework").JsonProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customResource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilters: import("@agnocon/pieces-framework").JsonProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customResource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilters: import("@agnocon/pieces-framework").JsonProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customResource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    additionalFilters: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=new-or-updated-object.d.ts.map