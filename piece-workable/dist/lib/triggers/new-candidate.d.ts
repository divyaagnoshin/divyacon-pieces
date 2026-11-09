import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newCandidate: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    shortcode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    stage_slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    shortcode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    stage_slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    shortcode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    stage_slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    shortcode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    stage_slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=new-candidate.d.ts.map