import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const fountainWorkerWebhook: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    verify_auth: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    auth_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    verify_auth: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    auth_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    verify_auth: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    auth_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    setup: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    verify_auth: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    auth_key: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=worker-webhook.d.ts.map