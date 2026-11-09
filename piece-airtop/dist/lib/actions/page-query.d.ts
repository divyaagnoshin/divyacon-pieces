export declare const pageQueryAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    sessionId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    windowId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    clientRequestId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    outputSchema: import("@agnocon/pieces-framework").LongTextProperty<false>;
    includeVisualAnalysis: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    optimizeUrls: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    costThresholdCredits: import("@agnocon/pieces-framework").NumberProperty<false>;
    timeThresholdSeconds: import("@agnocon/pieces-framework").NumberProperty<false>;
    followPaginationLinks: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=page-query.d.ts.map