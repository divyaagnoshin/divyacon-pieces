export declare const getIssueAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    projectId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    issueId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        personalAccessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    expand: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    mapNames: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    mapTransitions: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=get-issue.d.ts.map