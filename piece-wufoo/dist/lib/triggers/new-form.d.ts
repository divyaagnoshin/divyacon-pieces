import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newFormTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    nameFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeInactive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    nameFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeInactive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    nameFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeInactive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    nameFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeInactive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=new-form.d.ts.map