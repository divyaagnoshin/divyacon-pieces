import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const dropboxNewFolder: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    recursive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    recursive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    recursive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    recursive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-folder.d.ts.map