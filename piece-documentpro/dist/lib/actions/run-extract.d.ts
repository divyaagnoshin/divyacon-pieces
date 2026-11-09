export declare const runExtract: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    document_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    template_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    use_ocr: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    query_model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    detect_layout: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    detect_tables: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    page_ranges: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    chunk_by_pages: import("@agnocon/pieces-framework").NumberProperty<false>;
    rolling_window: import("@agnocon/pieces-framework").NumberProperty<false>;
    start_regex: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    end_regex: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    split_regex: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    use_all_matches: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=run-extract.d.ts.map