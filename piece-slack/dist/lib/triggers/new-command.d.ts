import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newCommand: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    webhookInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    info: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    user: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    commands: import("@agnocon/pieces-framework").ArrayProperty<true>;
    channels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    ignoreBots: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    webhookInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    info: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    user: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    commands: import("@agnocon/pieces-framework").ArrayProperty<true>;
    channels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    ignoreBots: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    webhookInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    info: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    user: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    commands: import("@agnocon/pieces-framework").ArrayProperty<true>;
    channels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    ignoreBots: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[], {
    webhookInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    info: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    user: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    commands: import("@agnocon/pieces-framework").ArrayProperty<true>;
    channels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>)[]>;
    ignoreBots: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=new-command.d.ts.map