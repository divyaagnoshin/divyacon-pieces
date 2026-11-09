import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newFormEntryTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    formIdentifier: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    handshakeKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeMetadata: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    formIdentifier: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    handshakeKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeMetadata: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    formIdentifier: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    handshakeKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeMetadata: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    formIdentifier: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    handshakeKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeMetadata: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    responseFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=new-form-entry.d.ts.map