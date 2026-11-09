export declare const findItemsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    boardId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    rowId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statusId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    assignedUserId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    ownerId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    completed: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    createdSince: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    modifiedSince: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    completedSince: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    includeChildItems: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    take: import("@agnocon/pieces-framework").NumberProperty<false>;
    skip: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=find-items.d.ts.map