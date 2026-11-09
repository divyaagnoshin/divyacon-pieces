export declare const addGreetAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    note: import("@agnocon/pieces-framework").LongTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    first: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    last: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assignee: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    campaign: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    template: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    custom: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=add-greet.d.ts.map