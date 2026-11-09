export declare const createQuestionAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    spaceId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    tagNames: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    locked: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-question.d.ts.map