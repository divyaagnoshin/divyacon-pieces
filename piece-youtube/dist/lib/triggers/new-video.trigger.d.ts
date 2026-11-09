import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const youtubeNewVideoTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, undefined, {
    channel_identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, undefined, {
    channel_identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, undefined, {
    channel_identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, undefined, {
    channel_identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=new-video.trigger.d.ts.map