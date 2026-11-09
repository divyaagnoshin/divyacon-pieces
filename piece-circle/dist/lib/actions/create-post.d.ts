export declare const createPost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    space_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    text_body: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tiptap_body_json: import("@agnocon/pieces-framework").JsonProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    published_at: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    is_comments_enabled: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    skip_notifications: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    user_email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-post.d.ts.map