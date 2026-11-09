declare function buildEstimateJobPayload(propsValue: Record<string, unknown>): Record<string, unknown>;
declare function buildSubmitJobPayload(propsValue: Record<string, unknown>): Record<string, unknown>;
declare function buildLogsQueryParams(propsValue: Record<string, unknown>): Record<string, string>;
declare function buildListJobsQueryParams(propsValue: Record<string, unknown>): Record<string, string>;
export declare const jungleGridProps: {
    artifactId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    asyncInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    buildEstimateJobPayload: typeof buildEstimateJobPayload;
    buildListJobsQueryParams: typeof buildListJobsQueryParams;
    buildLogsQueryParams: typeof buildLogsQueryParams;
    buildSubmitJobPayload: typeof buildSubmitJobPayload;
    estimateJobProps: {
        max_price_per_hour: import("@agnocon/pieces-framework").NumberProperty<false>;
        preferred_gpu_family: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        avoid_gpu_families: import("@agnocon/pieces-framework").ArrayProperty<false>;
        region_preference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        latency_priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        cost_priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        workload_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        image: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        model_size_gb: import("@agnocon/pieces-framework").NumberProperty<false>;
        command: import("@agnocon/pieces-framework").LongTextProperty<false>;
        args: import("@agnocon/pieces-framework").ArrayProperty<false>;
        optimize_for: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    };
    jobId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    jobStatusValues: string[];
    logStreamValues: string[];
    submitJobProps: {
        callback_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        callback_metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
        max_price_per_hour: import("@agnocon/pieces-framework").NumberProperty<false>;
        preferred_gpu_family: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        avoid_gpu_families: import("@agnocon/pieces-framework").ArrayProperty<false>;
        region_preference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        latency_priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        cost_priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        workload_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        image: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        model_size_gb: import("@agnocon/pieces-framework").NumberProperty<false>;
        command: import("@agnocon/pieces-framework").LongTextProperty<false>;
        args: import("@agnocon/pieces-framework").ArrayProperty<false>;
        optimize_for: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    };
};
export {};
//# sourceMappingURL=props.d.ts.map