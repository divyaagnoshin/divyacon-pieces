export declare const getWorksheetRowsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    storageSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    siteId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    documentId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    workbookId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    worksheetId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    range: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    headerRow: import("@agnocon/pieces-framework").NumberProperty<false>;
    firstDataRow: import("@agnocon/pieces-framework").NumberProperty<false>;
    useFilter: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    filterList: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=get-worksheet-rows.d.ts.map