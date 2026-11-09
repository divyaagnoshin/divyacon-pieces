export declare const apifyGetTaskLastRunDatasetItems: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    taskId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    offset: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=get-task-last-run-dataset-items.d.ts.map