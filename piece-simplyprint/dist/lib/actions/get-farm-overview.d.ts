export declare const getFarmOverviewAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {}>;
/**
 * Bucket entries are `{id, name}` for each printer in the bucket.
 * `online` is the broad set; the per-state buckets (printing/paused/...)
 * are subsets keyed off the printer's current `PrinterStatus`. AI buckets
 * are subsets of `printing`/`paused`. See backend
 * `printers/GetFarmOverview` for the bucketing rules.
 */
export interface FarmOverviewPrinter {
    id: number;
    name: string;
}
export interface FarmOverviewBucket {
    count: number;
    printers: FarmOverviewPrinter[];
}
export interface FarmOverviewResponse {
    total: number;
    buckets: {
        online: FarmOverviewBucket;
        offline: FarmOverviewBucket;
        not_connected: FarmOverviewBucket;
        operational: FarmOverviewBucket;
        printing: FarmOverviewBucket;
        paused: FarmOverviewBucket;
        awaiting_bed_clear: FarmOverviewBucket;
        in_maintenance: FarmOverviewBucket;
        print_pending: FarmOverviewBucket;
        requires_attention: FarmOverviewBucket;
        ai_running: FarmOverviewBucket;
        ai_detected_low: FarmOverviewBucket;
        ai_detected_high: FarmOverviewBucket;
    };
}
//# sourceMappingURL=get-farm-overview.d.ts.map