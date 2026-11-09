export declare const embedQuestion: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
} | {
    embeddingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    questionId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    enableEmbedding: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    parameterSettings: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    } | {
        embeddingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=embed-question.d.ts.map