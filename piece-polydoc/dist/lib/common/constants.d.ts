export declare const DEFAULT_BASE_URL = "https://api.polydoc.tech";
export declare const PDF_CONVERT_PATH = "/pdf/convert";
export declare const SCREENSHOT_CONVERT_PATH = "/screenshot/convert";
export declare const SOURCE_TYPES: readonly [{
    readonly label: "URL (render a web page)";
    readonly value: "url";
}, {
    readonly label: "HTML (render an inline HTML string)";
    readonly value: "html";
}, {
    readonly label: "Template (render a saved PolyDoc template by ID)";
    readonly value: "template";
}];
export declare const DELIVERY_MODES: readonly [{
    readonly label: "Download (return the file)";
    readonly value: "download";
}, {
    readonly label: "Cloud Storage (upload to a presigned URL)";
    readonly value: "cloudStorage";
}, {
    readonly label: "Webhook (deliver the file to a URL)";
    readonly value: "webhook";
}];
export declare const PAGE_FORMATS: readonly ["A3", "A4", "A5", "Ledger", "Legal", "Letter", "Tabloid"];
export declare const IMAGE_TYPES: readonly ["png", "jpeg", "webp"];
export declare const SCREENSHOT_OUTPUT_ENCODINGS: readonly [{
    readonly label: "Binary file (write the image to a file)";
    readonly value: "binaryFile";
}, {
    readonly label: "Base64 (return the image as a base64 string)";
    readonly value: "base64";
}];
export declare const EINVOICE_STANDARDS: readonly [{
    readonly label: "ZUGFeRD (Germany / EU)";
    readonly value: "zugferd";
}, {
    readonly label: "Factur-X (France / EU)";
    readonly value: "facturx";
}];
export declare const EINVOICE_PROFILES: readonly ["minimum", "basicwl", "basic", "en16931", "extended"];
//# sourceMappingURL=constants.d.ts.map