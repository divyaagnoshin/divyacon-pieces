export declare const createPost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    integration: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    media: import("@agnocon/pieces-framework").ArrayProperty<false>;
    shortLink: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    settings: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-post.d.ts.map