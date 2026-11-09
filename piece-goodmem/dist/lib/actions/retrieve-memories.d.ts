export declare const retrieveMemories: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    spaceIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    maxResults: import("@agnocon/pieces-framework").NumberProperty<false>;
    includeMemoryDefinition: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    waitForIndexing: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    rerankerId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    llmId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    relevanceThreshold: import("@agnocon/pieces-framework").NumberProperty<false>;
    llmTemperature: import("@agnocon/pieces-framework").NumberProperty<false>;
    chronologicalResort: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=retrieve-memories.d.ts.map