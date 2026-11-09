import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const scheduledReportFetchBatch: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    reportId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reportParameters: import("@agnocon/pieces-framework").JsonProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    reportId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reportParameters: import("@agnocon/pieces-framework").JsonProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    reportId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reportParameters: import("@agnocon/pieces-framework").JsonProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    reportId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reportParameters: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=scheduled-report-fetch-batch.d.ts.map