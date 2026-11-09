export declare const retrainChatbot: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chatbotId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    sourceText: import("@agnocon/pieces-framework").LongTextProperty<false>;
    urlsToScrape: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    cookies: import("@agnocon/pieces-framework").LongTextProperty<false>;
    extractMainContent: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeOnlyTags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    excludeTags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    products: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    qAndAs: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    deletes: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=retrainChatbot.d.ts.map