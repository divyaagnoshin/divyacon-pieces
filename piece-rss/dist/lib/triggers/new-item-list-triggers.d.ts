import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const rssNewItemListTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, undefined, {
    rss_feed_urls: import("@agnocon/pieces-framework").ArrayProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, undefined, {
    rss_feed_urls: import("@agnocon/pieces-framework").ArrayProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, undefined, {
    rss_feed_urls: import("@agnocon/pieces-framework").ArrayProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, undefined, {
    rss_feed_urls: import("@agnocon/pieces-framework").ArrayProperty<true>;
}>;
//# sourceMappingURL=new-item-list-triggers.d.ts.map