export declare const createTopic: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    api_username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    raw: import("@agnocon/pieces-framework").LongTextProperty<true>;
    category: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        api_username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        website_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=create-topic.action.d.ts.map