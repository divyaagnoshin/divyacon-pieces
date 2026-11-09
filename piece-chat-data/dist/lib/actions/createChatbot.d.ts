export declare const createChatbot: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    chatbotName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    sourceText: import("@agnocon/pieces-framework").LongTextProperty<false>;
    urlsToScrape: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    products: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    qAndAs: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    customBackend: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bearer: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=createChatbot.d.ts.map