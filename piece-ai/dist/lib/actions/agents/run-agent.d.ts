export declare const runAgent: import("@agnocon/pieces-framework").IAction<undefined, {
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    aiProviderModel: import("@agnocon/pieces-framework").ObjectProperty<true>;
    agentTools: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    structuredOutput: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    maxSteps: import("@agnocon/pieces-framework").NumberProperty<true>;
    webSearch: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    webSearchOptions: import("@agnocon/pieces-framework").DynamicProperties<false, undefined>;
}>;
//# sourceMappingURL=run-agent.d.ts.map