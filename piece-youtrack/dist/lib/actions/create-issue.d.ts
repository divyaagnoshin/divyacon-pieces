export declare const createIssueAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    summary: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    customFieldsJson: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-issue.d.ts.map