export declare const invoiceParserAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    provider: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    document_type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    language: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    file_password: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    convert_to_pdf: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    fallback_providers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    show_original_response: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=invoice-parser.d.ts.map