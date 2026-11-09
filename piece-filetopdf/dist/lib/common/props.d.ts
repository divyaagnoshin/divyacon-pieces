/**
 * Layout/Chromium option properties shared by Convert HTML and Convert Markdown.
 * Labels and help mirror the Make app, n8n node, and Zapier app verbatim so every
 * FileToPDF integration reads the same. These conversion parameters require Pro,
 * Scale, or the free trial — on Starter/Basic the API returns 402 upgrade_required.
 */
export declare const CHROMIUM_OPTION_PROPS: {
    landscape: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    paperWidth: import("@agnocon/pieces-framework").NumberProperty<false>;
    paperHeight: import("@agnocon/pieces-framework").NumberProperty<false>;
    marginTop: import("@agnocon/pieces-framework").NumberProperty<false>;
    marginBottom: import("@agnocon/pieces-framework").NumberProperty<false>;
    marginLeft: import("@agnocon/pieces-framework").NumberProperty<false>;
    marginRight: import("@agnocon/pieces-framework").NumberProperty<false>;
    scale: import("@agnocon/pieces-framework").NumberProperty<false>;
    printBackground: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    preferCssPageSize: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    nativePageRanges: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    pdfa: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    pdfua: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ownerPassword: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
/**
 * Advanced option properties for Convert a File (LibreOffice/passthrough variant).
 * No paper size / margins / scale — those are Chromium-only and ignored by the
 * document/image converters. Matches the n8n node and Zapier app's file option list.
 */
export declare const FILE_OPTION_PROPS: {
    landscape: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    nativePageRanges: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    pdfa: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    pdfua: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ownerPassword: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
//# sourceMappingURL=props.d.ts.map