import { AppConnectionValueForAuthProperty, OAuth2Props, ShortTextProperty } from '@agnocon/pieces-framework';
import { OAuth2Client } from 'google-auth-library';
export type GoogleSheetsAuthValue = AppConnectionValueForAuthProperty<typeof googleSheetsAuth>;
export declare const googleSheetsCommon: {
    baseUrl: string;
    getGoogleSheetRows: typeof getGoogleSheetRows;
    findSheetName: typeof findSheetName;
    deleteRow: typeof deleteRow;
    clearSheet: typeof clearSheet;
    getHeaderRow: typeof getHeaderRow;
};
export declare function findSheetName(auth: GoogleSheetsAuthValue, spreadsheetId: string, sheetId: string | number): Promise<string>;
type GetGoogleSheetRowsProps = {
    spreadsheetId: string;
    auth: GoogleSheetsAuthValue;
    sheetId: number;
    rowIndex_s: number | undefined;
    rowIndex_e: number | undefined;
    headerRow?: number;
};
declare function getGoogleSheetRows({ spreadsheetId, auth, sheetId, rowIndex_s, rowIndex_e, headerRow, }: GetGoogleSheetRowsProps): Promise<{
    row: number;
    values: {
        [x: string]: string;
    };
}[]>;
type GetHeaderRowProps = {
    spreadsheetId: string;
    auth: GoogleSheetsAuthValue;
    sheetId: number;
};
export declare function getHeaderRow({ spreadsheetId, auth, sheetId, }: GetHeaderRowProps): Promise<string[] | undefined>;
export declare const columnToLabel: (columnIndex: number) => string;
export declare const labelToColumn: (label: string) => number;
export declare function objectToArray(obj: {
    [x: string]: any;
}): any[];
export declare function stringifyArray(object: unknown[]): string[];
export declare function mapRowsToHeaderNames(rows: any[], useHeaderNames: boolean, spreadsheetId: string, sheetId: number, headerRow: number, auth: GoogleSheetsAuthValue): Promise<any[]>;
declare function deleteRow(spreadsheetId: string, sheetId: number, rowIndex: number, auth: GoogleSheetsAuthValue): Promise<void>;
declare function clearSheet(spreadsheetId: string, sheetId: number, auth: GoogleSheetsAuthValue, rowIndex: number, numOfRows: number): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare enum ValueInputOption {
    RAW = "RAW",
    USER_ENTERED = "USER_ENTERED"
}
export declare enum Dimension {
    ROWS = "ROWS",
    COLUMNS = "COLUMNS"
}
export declare function createGoogleClient(auth: GoogleSheetsAuthValue): Promise<OAuth2Client>;
export declare const getAccessToken: (auth: GoogleSheetsAuthValue) => Promise<string>;
export declare function areSheetIdsValid(spreadsheetId: string | null | undefined, sheetId: string | number | null | undefined): boolean;
export declare const googleSheetsScopes: string[];
export declare const googleSheetsAuth: (import("@agnocon/pieces-framework").OAuth2Property<OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: ShortTextProperty<true>;
    userEmail: ShortTextProperty<false>;
}>)[];
export {};
//# sourceMappingURL=common.d.ts.map