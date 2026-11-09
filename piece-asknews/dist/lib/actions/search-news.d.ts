export declare const searchNews: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    nArticles: import("@agnocon/pieces-framework").NumberProperty<false>;
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    returnType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    historical: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    hoursBack: import("@agnocon/pieces-framework").NumberProperty<false>;
    categories: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    similarityScoreThreshold: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=search-news.d.ts.map