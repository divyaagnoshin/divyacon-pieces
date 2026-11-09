export declare const createBlogPost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    storeHash: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accessToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    author: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    published_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    meta_description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    meta_keywords: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    is_published: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-blog-post.d.ts.map