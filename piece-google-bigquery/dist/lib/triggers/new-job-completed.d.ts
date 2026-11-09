import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newJobCompletedTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    project_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    include_failed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    project_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    include_failed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    project_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    include_failed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    project_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        serviceAccountJson: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>)[]>;
    include_failed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-job-completed.d.ts.map