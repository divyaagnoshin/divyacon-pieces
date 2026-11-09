export declare function normalizeInstanceUrl(instanceUrl: string): string;
export declare function isRecord(value: unknown): value is Record<string, unknown>;
export declare function getString(value: unknown): string | undefined;
export declare function flattenRecord(value: unknown, prefix?: string, depth?: number): Record<string, unknown>;
export declare function flattenRecords(records: unknown[]): Record<string, unknown>[];
export declare function toStandardCoupaFields(record: Record<string, unknown>, module: CoupaModule): StandardCoupaFields;
export declare function formatCoupaOutput(record: Record<string, unknown>, module: CoupaModule): Record<string, unknown>;
export declare function formatCoupaOutputs(records: Record<string, unknown>[], module: CoupaModule): Record<string, unknown>[];
export declare function parseJsonBody(body: unknown): unknown;
export declare function formatCoupaError(error: unknown): string;
export declare function getMimeType(filename: string, extension?: string): string;
export type CoupaModule = 'purchase_orders' | 'suppliers' | 'contracts';
export type StandardCoupaFields = {
    id: unknown;
    supplier_id: unknown;
    supplier_name: unknown;
    po_number: unknown;
    po_status: unknown;
    total_amount: unknown;
    contract_id: unknown;
};
//# sourceMappingURL=utils.d.ts.map