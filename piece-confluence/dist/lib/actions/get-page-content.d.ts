export declare const getPageContent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    confluenceDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    pageId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    includeDescendants: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    dynamic: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        confluenceDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=get-page-content.d.ts.map