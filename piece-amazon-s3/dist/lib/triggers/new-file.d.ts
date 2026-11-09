import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newFile: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    folderPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    folderPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    folderPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    folderPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-file.d.ts.map