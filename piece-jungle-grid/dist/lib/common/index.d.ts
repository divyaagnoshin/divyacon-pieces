export declare const jungleGridCommon: {
    defaultBaseUrl: string;
    endpoints: {
        estimateJob: string;
        submitJob: string;
        listJobs: string;
        jobStatus: (jobId: string) => string;
        jobRuntime: (jobId: string) => string;
        jobLogs: (jobId: string) => string;
        artifacts: (jobId: string) => string;
        cancelJob: (jobId: string) => string;
        artifactDownloadUrl: (jobId: string, artifactId: string) => string;
    };
    artifactId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    asyncInstructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    buildEstimateJobPayload: (propsValue: Record<string, unknown>) => Record<string, unknown>;
    buildListJobsQueryParams: (propsValue: Record<string, unknown>) => Record<string, string>;
    buildLogsQueryParams: (propsValue: Record<string, unknown>) => Record<string, string>;
    buildSubmitJobPayload: (propsValue: Record<string, unknown>) => Record<string, unknown>;
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
    apiCall: ({ auth, method, path, body, queryParams, }: {
        auth: {
            api_base_url: string;
            api_key: string;
        } | {
            props: {
                api_base_url: string;
                api_key: string;
            };
        };
        method: import("@agnocon/pieces-common").HttpMethod;
        path: string;
        body?: Record<string, unknown>;
        queryParams?: Record<string, string>;
    }) => Promise<unknown>;
    normalizeBaseUrl: (baseUrl: string) => string;
};
export { JungleGridApiError } from './client';
//# sourceMappingURL=index.d.ts.map