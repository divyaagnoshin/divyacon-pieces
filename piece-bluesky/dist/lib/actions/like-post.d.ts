export declare const likePost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    selectionMethod: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    postSelection: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    postUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=like-post.d.ts.map