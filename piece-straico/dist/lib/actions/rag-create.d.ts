export declare const createRag: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<true>;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    chunkingMethod: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    chunkSize: import("@agnocon/pieces-framework").NumberProperty<false>;
    chunkOverlap: import("@agnocon/pieces-framework").NumberProperty<false>;
    separator: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    separators: import("@agnocon/pieces-framework").ArrayProperty<false>;
    breakpointThresholdType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    bufferSize: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=rag-create.d.ts.map