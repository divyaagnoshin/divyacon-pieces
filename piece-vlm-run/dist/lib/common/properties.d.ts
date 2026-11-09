export declare const analyzeAudioProperties: {
    audio: import("@agnocon/pieces-framework").FileProperty<true, false>;
};
export declare const analyzeImageProperties: {
    image: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    domain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
};
export declare const analyzeDocumentProperties: {
    document: import("@agnocon/pieces-framework").FileProperty<true, false>;
    domain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
};
export declare const analyzeVideoProperties: {
    video: import("@agnocon/pieces-framework").FileProperty<true, false>;
    domain: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
};
export declare const getFileProperties: {
    fileId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=properties.d.ts.map