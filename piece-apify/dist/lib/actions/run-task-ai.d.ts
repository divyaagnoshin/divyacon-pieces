export declare const apifyRunTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    taskId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    input: import("@agnocon/pieces-framework").JsonProperty<false>;
    build: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    memory: import("@agnocon/pieces-framework").NumberProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    waitForFinish: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=run-task-ai.d.ts.map