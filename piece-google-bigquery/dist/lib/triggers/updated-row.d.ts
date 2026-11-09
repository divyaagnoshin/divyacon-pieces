import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const updatedRowTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    updated_at_column: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    created_at_column: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    updated_at_column: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    created_at_column: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    updated_at_column: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    created_at_column: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
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
    updated_at_column: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    created_at_column: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=updated-row.d.ts.map