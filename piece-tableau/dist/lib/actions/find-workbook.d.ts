export declare const findWorkbook: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiVersion: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    siteContentUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    personalAccessTokenName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    personalAccessTokenSecret: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    searchType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    workbookId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contentUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=find-workbook.d.ts.map