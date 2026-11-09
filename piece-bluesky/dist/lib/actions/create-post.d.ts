export declare const createPost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    postType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    language: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    imageUrls: import("@agnocon/pieces-framework").ArrayProperty<false>;
    imageDescriptions: import("@agnocon/pieces-framework").ArrayProperty<false>;
    videoUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    videoAltText: import("@agnocon/pieces-framework").LongTextProperty<false>;
    videoCaptions: import("@agnocon/pieces-framework").ArrayProperty<false>;
    linkUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    replyToPost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    threadContent: import("@agnocon/pieces-framework").ArrayProperty<false>;
    additionalHashtags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contentWarnings: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    audience: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-post.d.ts.map