import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newBackBlazeFileTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    folderPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    folderPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    folderPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    bucket: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    endpoint: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    folderPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-file.d.ts.map