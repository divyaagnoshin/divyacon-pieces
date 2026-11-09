export declare const takeScreenshotAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    sessionId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    windowId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    clientRequestId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    scope: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxHeight: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxWidth: import("@agnocon/pieces-framework").NumberProperty<false>;
    quality: import("@agnocon/pieces-framework").NumberProperty<false>;
    enableVisualAnalysis: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    visualAnalysisConfig: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    costThresholdCredits: import("@agnocon/pieces-framework").NumberProperty<false>;
    timeThresholdSeconds: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=take-screenshot.d.ts.map