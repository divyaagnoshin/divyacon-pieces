import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newResourceInFolder: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    asset_folder: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    asset_folder: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    asset_folder: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    asset_folder: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-resource.d.ts.map