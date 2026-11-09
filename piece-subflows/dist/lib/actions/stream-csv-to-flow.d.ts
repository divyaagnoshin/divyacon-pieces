export declare const streamCsvToSubflows: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    file: import("@agnocon/pieces-framework").FileProperty<true, true>;
    subflow: import("@agnocon/pieces-framework").DropdownProperty<string, false, undefined> | import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
    batchSize: import("@agnocon/pieces-framework").NumberProperty<true>;
    delimiter: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    extraData: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=stream-csv-to-flow.d.ts.map