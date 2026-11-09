export declare const findOrCreateRowAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    project_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    dataset_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    where_clause: import("@agnocon/pieces-framework").LongTextProperty<true>;
    create_data: import("@agnocon/pieces-framework").JsonProperty<true>;
    location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=find-or-create-row.d.ts.map