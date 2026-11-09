import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const rssNewItemTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, undefined, {
    rss_feed_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, undefined, {
    rss_feed_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, undefined, {
    rss_feed_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, undefined, {
    rss_feed_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=new-item-trigger.d.ts.map