import { Client } from '@microsoft/microsoft-graph-client';
export declare function createMSGraphClient(accessToken: string, cloud?: string | null): Client;
export declare function numberToColumnName(num: number): string;
export declare function getLastUsedRow(accessToken: string, drivePath: string, workbookId: string, worksheetId: string, cloud?: string | null): Promise<number>;
export declare function getDrivePath(storageSource: string, siteId?: string, documentId?: string): string;
export declare function getHeaders(accessToken: string, drivePath: string, workbookId: string, worksheetId: string, cloud?: string | null): Promise<any>;
//# sourceMappingURL=helpers.d.ts.map