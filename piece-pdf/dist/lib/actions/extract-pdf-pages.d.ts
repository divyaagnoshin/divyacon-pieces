export declare function pageRangeToIndexes(startPage: number, endPage: number, totalPages: number): number[];
export declare const extractPdfPages: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    pageRanges: import("@agnocon/pieces-framework").ArrayProperty<true>;
}>;
//# sourceMappingURL=extract-pdf-pages.d.ts.map