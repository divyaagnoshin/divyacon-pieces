export declare const listProjectsProps: {
    teamId: import("@agnocon/pieces-framework").NumberProperty<true>;
    group: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    provider: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
};
export declare const getProjectHeadProps: {
    projectId: import("@agnocon/pieces-framework").NumberProperty<true>;
    branch: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    fallback: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
};
export declare const runPromptProps: {
    projectId: import("@agnocon/pieces-framework").NumberProperty<true>;
    branch: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    hash: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    messages: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
    timeoutSeconds: import("@agnocon/pieces-framework").NumberProperty<false>;
};
export declare function sanitizeVariables(vars: Record<string, unknown>): Record<string, string | number | boolean | null>;
//# sourceMappingURL=props.d.ts.map