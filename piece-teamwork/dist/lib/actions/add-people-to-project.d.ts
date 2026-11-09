export declare const addPeopleToProject: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    projectId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    userIdList: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=add-people-to-project.d.ts.map