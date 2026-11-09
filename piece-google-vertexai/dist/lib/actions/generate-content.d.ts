import { ThinkingLevel } from '@google/genai';
export declare const generateContent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccountJson: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    location: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccountJson: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccountJson: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
    systemMessage: import("@agnocon/pieces-framework").LongTextProperty<false>;
    userMessage: import("@agnocon/pieces-framework").LongTextProperty<true>;
    files: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    youtubeUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    imageUrls: import("@agnocon/pieces-framework").ArrayProperty<false>;
    temperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    maxOutputTokens: import("@agnocon/pieces-framework").NumberProperty<false>;
    thinkingLevel: import("@agnocon/pieces-framework").StaticDropdownProperty<ThinkingLevel, false>;
    thinkingBudget: import("@agnocon/pieces-framework").NumberProperty<false>;
    includeThoughts: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=generate-content.d.ts.map