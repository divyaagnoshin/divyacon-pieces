export declare const documentQuestionAnswering: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    image: import("@agnocon/pieces-framework").FileProperty<true, false>;
    question: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    top_k: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_answer_len: import("@agnocon/pieces-framework").NumberProperty<false>;
    handle_impossible_answer: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    lang: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    use_cache: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    wait_for_model: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=document-question-answering.d.ts.map