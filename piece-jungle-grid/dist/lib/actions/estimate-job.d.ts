export declare const estimateJob: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
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
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
}>;
//# sourceMappingURL=estimate-job.d.ts.map