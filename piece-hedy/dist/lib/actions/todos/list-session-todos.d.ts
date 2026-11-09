export declare const listSessionTodos: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    sessionId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    returnAll: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-session-todos.d.ts.map