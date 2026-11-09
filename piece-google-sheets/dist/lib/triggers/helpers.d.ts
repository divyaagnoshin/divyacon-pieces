import { drive_v3 } from '@googleapis/drive';
import { GoogleSheetsAuthValue } from '../common/common';
export declare function getWorkSheetName(auth: GoogleSheetsAuthValue, spreadSheetId: string, sheetId: number): Promise<string>;
export declare function getWorkSheetGridSize(auth: GoogleSheetsAuthValue, spreadSheetId: string, sheetId: number): Promise<import("@googleapis/sheets").sheets_v4.Schema$GridProperties>;
export declare function getWorkSheetValues(auth: GoogleSheetsAuthValue, spreadsheetId: string, range?: string): Promise<any[][]>;
export declare function createFileNotification(auth: GoogleSheetsAuthValue, fileId: string, url: string, includeTeamDrives?: boolean): Promise<{
    data: drive_v3.Schema$Channel;
}>;
export declare function deleteFileNotification(auth: GoogleSheetsAuthValue, channelId: string, resourceId: string): Promise<{
    data: void;
}>;
export declare function isSyncMessage(headers: Record<string, string>): boolean;
export declare function isChangeContentMessage(headers: Record<string, string>): boolean;
export declare function hashObject(obj: Record<string, unknown>): string;
export declare function mapRowsToColumnLabels(rowValues: any[][], oldRowCount: number, headerCount: number): {
    row: number;
    values: Record<string, string>;
}[];
export interface WebhookInformation {
    kind?: string | null;
    id?: string | null;
    resourceId?: string | null;
    resourceUri?: string | null;
    expiration?: string | null;
}
//# sourceMappingURL=helpers.d.ts.map