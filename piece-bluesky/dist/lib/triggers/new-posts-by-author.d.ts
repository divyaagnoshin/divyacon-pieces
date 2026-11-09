import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newPostsByAuthor: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    authorSelection: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    authorFromFollowing: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    authorHandle: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeReplies: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeReposts: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    authorSelection: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    authorFromFollowing: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    authorHandle: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeReplies: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeReposts: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    authorSelection: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    authorFromFollowing: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    authorHandle: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeReplies: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeReposts: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    authorSelection: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    authorFromFollowing: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    authorHandle: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeReplies: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeReposts: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-posts-by-author.d.ts.map