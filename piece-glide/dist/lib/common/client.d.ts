import { GlideAddRowsResponse, GlideRow, GlideTable } from './types';
import { GlideAuthType } from '../auth';
export declare function validateGlideAuth(auth: string): Promise<void>;
export declare function listGlideTables(auth: GlideAuthType): Promise<GlideTable[]>;
export declare function getGlideRows({ auth, tableId, limit, }: {
    auth: GlideAuthType;
    tableId: string;
    limit: number;
}): Promise<GlideRow[]>;
export declare function addGlideRows({ auth, tableId, rows, }: {
    auth: GlideAuthType;
    tableId: string;
    rows: GlideRow[];
}): Promise<GlideAddRowsResponse['data']>;
export declare function updateGlideRow({ auth, tableId, rowId, row, }: {
    auth: GlideAuthType;
    tableId: string;
    rowId: string;
    row: GlideRow;
}): Promise<void>;
export declare function deleteGlideRow({ auth, tableId, rowId, }: {
    auth: GlideAuthType;
    tableId: string;
    rowId: string;
}): Promise<void>;
export declare const BASE_URL = "https://api.glideapps.com";
//# sourceMappingURL=client.d.ts.map