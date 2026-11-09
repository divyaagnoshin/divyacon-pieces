export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    projectId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tasklistId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    content: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    'responsible-party-id': import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    'start-date': import("@agnocon/pieces-framework").DateTimeProperty<false>;
    'due-date': import("@agnocon/pieces-framework").DateTimeProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tagIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    attachment: import("@agnocon/pieces-framework").FileProperty<false, false>;
    customFields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-task.d.ts.map