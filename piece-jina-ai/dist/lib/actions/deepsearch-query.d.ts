export declare const deepSearchQueryAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    reasoning_effort: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    budget_tokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    max_attempts: import("@agnocon/pieces-framework").NumberProperty<false>;
    no_direct_answer: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    max_returned_urls: import("@agnocon/pieces-framework").NumberProperty<false>;
    response_format: import("@agnocon/pieces-framework").JsonProperty<false>;
    boost_hostnames: import("@agnocon/pieces-framework").LongTextProperty<false>;
    bad_hostnames: import("@agnocon/pieces-framework").LongTextProperty<false>;
    only_hostnames: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=deepsearch-query.d.ts.map