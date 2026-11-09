export declare const applyCommandAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    issue: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    command: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    comment: import("@agnocon/pieces-framework").LongTextProperty<false>;
    silent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=apply-command.d.ts.map