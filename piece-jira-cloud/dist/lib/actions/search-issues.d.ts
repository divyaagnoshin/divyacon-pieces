export declare const searchIssues: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    memoryWarning: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    jql: import("@agnocon/pieces-framework").LongTextProperty<true>;
    fields: import("@agnocon/pieces-framework").ArrayProperty<false>;
    mapNames: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    maxResults: import("@agnocon/pieces-framework").NumberProperty<true>;
    sanitizeJql: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=search-issues.d.ts.map