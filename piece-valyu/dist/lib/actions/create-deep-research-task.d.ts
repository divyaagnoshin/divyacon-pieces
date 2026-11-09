export declare const createDeepResearchTaskAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    output_format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    structuredOptions: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    strategy: import("@agnocon/pieces-framework").LongTextProperty<false>;
    search_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    included_sources: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    excluded_sources: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    start_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    end_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    urls: import("@agnocon/pieces-framework").ArrayProperty<false>;
    code_execution: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    previous_reports: import("@agnocon/pieces-framework").ArrayProperty<false>;
    webhook_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-deep-research-task.d.ts.map