export declare const createWordPressPost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    featured_media_file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    acfFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
    categories: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    featured_media: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    excerpt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    comment_status: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    ping_status: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-post.action.d.ts.map