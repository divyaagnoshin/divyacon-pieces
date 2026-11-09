export declare const createPresentationAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    plain_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    length: import("@agnocon/pieces-framework").NumberProperty<false>;
    document_uuids: import("@agnocon/pieces-framework").ArrayProperty<false>;
    template: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    custom_user_instructions: import("@agnocon/pieces-framework").LongTextProperty<false>;
    fetch_images: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    tone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    verbosity: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    include_cover: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    include_table_of_contents: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    response_format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-presentation.d.ts.map