export declare const ocrImageAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    file_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    language: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    file_password: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    attributes_as_list: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    fallback_providers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    show_original_response: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=ocr-image.d.ts.map