export declare const convertFileProps: () => {
    import_method: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    stored_file_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    input_format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    output_format: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    filename: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    engine: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    engine_version: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
    wait_for_completion: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    store_file: import("@agnocon/pieces-framework").CheckboxProperty<false>;
};
//# sourceMappingURL=properties.d.ts.map