declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    useAtlasUrl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    authSource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    collection: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        useAtlasUrl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        authSource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        useAtlasUrl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        authSource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    documents: import("@agnocon/pieces-framework").JsonProperty<true>;
}>;
export default _default;
//# sourceMappingURL=insert-documents.d.ts.map