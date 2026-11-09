export declare const publishPost: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    accounts: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<false>;
    media: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    firstComment: import("@agnocon/pieces-framework").LongTextProperty<false>;
    publishNow: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    scheduledAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    profileId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    idempotencyKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=publish-post.d.ts.map