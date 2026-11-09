export declare const getAggregation: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    entity: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    entity_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    site_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    entity_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    aggregates: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    date_grouping: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    field_grouping: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    date_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sort_by: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    filters: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=get-aggregation.d.ts.map