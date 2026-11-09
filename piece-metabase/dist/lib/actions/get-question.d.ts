export declare const getQuestion: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
} | {
    embeddingKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    questionId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    parameters: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=get-question.d.ts.map