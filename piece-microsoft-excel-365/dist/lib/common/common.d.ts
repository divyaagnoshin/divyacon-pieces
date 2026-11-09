export declare const excelCommon: {
    getBaseUrl: (cloud?: string | null) => string;
    workbook_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    worksheet_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    values: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    tableValues: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    parent_folder: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    getHeaders: (workbookId: string, accessToken: string, worksheetId: string, cloud?: string | null) => Promise<(string | number | boolean)[]>;
    getTableHeaders: (drivePath: string, workbookId: string, accessToken: string, worksheetId: string, tableId: string) => Promise<any>;
    getLastUsedRow: (workbookId: string, worksheetId: string, accessToken: string, cloud?: string | null) => Promise<number>;
    getLastUsedColumn: (workbookId: string, worksheetId: string, accessToken: string, cloud?: string | null) => Promise<string>;
    getAllRows: (workbookId: string, worksheetId: string, accessToken: string, drivePath?: string, cloud?: string | null) => Promise<(string | number | boolean)[][]>;
    numberToColumnName: (num: number) => string;
    getAllFolders: (folderId: string, authToken: string, currentPath: string, cloud?: string | null) => Promise<{
        id: string;
        name: string;
    }[]>;
};
export declare function objectToArray(obj: {
    [x: string]: any;
}): any[];
//# sourceMappingURL=common.d.ts.map