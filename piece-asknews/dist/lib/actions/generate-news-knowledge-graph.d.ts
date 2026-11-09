export declare const generateNewsKnowledgeGraph: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    returnArticles: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    minClusterProbability: import("@agnocon/pieces-framework").NumberProperty<false>;
    geoDiambiguation: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    queryMethod: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    nArticles: import("@agnocon/pieces-framework").NumberProperty<false>;
    historical: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    hoursBack: import("@agnocon/pieces-framework").NumberProperty<false>;
    categories: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    visualizeWith: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=generate-news-knowledge-graph.d.ts.map