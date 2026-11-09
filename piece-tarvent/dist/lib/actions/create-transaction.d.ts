export declare const createTransaction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    groupName: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    fromEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fromName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    toEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    ccEmail: import("@agnocon/pieces-framework").ArrayProperty<false>;
    bccEmail: import("@agnocon/pieces-framework").ArrayProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    replyToEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    replyToName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    templateId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    mimeType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    content: import("@agnocon/pieces-framework").LongTextProperty<false>;
    ignoreSuppressCheck: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=create-transaction.d.ts.map