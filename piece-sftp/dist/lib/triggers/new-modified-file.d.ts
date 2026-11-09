import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newOrModifiedFile: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    protocol: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allow_unauthorized_certificates: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    allow_anonymous_login: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    algorithm: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>, {
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    ignoreHiddenFiles: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    protocol: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allow_unauthorized_certificates: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    allow_anonymous_login: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    algorithm: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>, {
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    ignoreHiddenFiles: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    protocol: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allow_unauthorized_certificates: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    allow_anonymous_login: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    algorithm: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>, {
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    ignoreHiddenFiles: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    protocol: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allow_unauthorized_certificates: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    allow_anonymous_login: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    algorithm: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>, {
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    ignoreHiddenFiles: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-modified-file.d.ts.map