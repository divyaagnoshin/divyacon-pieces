export declare const imageGenerationAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    resolution: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    num_images: import("@agnocon/pieces-framework").NumberProperty<false>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    fallback_providers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    show_original_response: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=image-generation.d.ts.map