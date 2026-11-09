export declare const findSecret: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    filterKey: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    filterValue: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    maxResults: import("@agnocon/pieces-framework").NumberProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sortOrder: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find-secret.d.ts.map