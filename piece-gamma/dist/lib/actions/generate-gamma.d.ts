export declare const generateGamma: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    folderId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    inputText: import("@agnocon/pieces-framework").LongTextProperty<true>;
    textMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    themeName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    numCards: import("@agnocon/pieces-framework").NumberProperty<false>;
    cardSplit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    additionalInstructions: import("@agnocon/pieces-framework").LongTextProperty<false>;
    exportAs: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    textOptions: import("@agnocon/pieces-framework").JsonProperty<false>;
    imageOptions: import("@agnocon/pieces-framework").JsonProperty<false>;
    cardOptions: import("@agnocon/pieces-framework").JsonProperty<false>;
    sharingOptions: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=generate-gamma.d.ts.map