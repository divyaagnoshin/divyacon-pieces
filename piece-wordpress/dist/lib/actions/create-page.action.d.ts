export declare const createWordPressPage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    excerpt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    comment_status: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    ping_status: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-page.action.d.ts.map