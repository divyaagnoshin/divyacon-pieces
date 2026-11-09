import type { AffectedResult, DropdownEntry, ExecuteResult } from './runner-protocol';
import type { OracleDbAuth } from './types';
export declare class OracleDbClient {
    private readonly auth;
    private readonly mode;
    constructor(auth: OracleDbAuth);
    getTables(): Promise<DropdownEntry[]>;
    getColumns(tableName: string): Promise<DropdownEntry[]>;
    insertRow(tableName: string, row: Record<string, unknown>): Promise<AffectedResult>;
    insertRows(tableName: string, rows: Record<string, unknown>[]): Promise<AffectedResult>;
    updateRow(tableName: string, values: Record<string, unknown>, filter: Record<string, unknown>): Promise<AffectedResult>;
    deleteRow(tableName: string, filter: Record<string, unknown>): Promise<AffectedResult>;
    findRow(tableName: string, filter: Record<string, unknown>): Promise<unknown[]>;
    execute(sql: string, binds: Record<string, unknown>): Promise<ExecuteResult>;
    private send;
}
//# sourceMappingURL=client.d.ts.map