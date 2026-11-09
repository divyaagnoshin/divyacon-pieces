export declare const listSessions: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>, {
    returnAll: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    topicId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    }>>;
    after: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    before: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=list-sessions.d.ts.map