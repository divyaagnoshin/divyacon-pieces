export declare function flattenRecord(value: unknown): FlatRecord;
export declare function normalizeRecords(records: FlatRecord[]): FlatRecord[];
type PrimitiveValue = string | number | boolean | null;
export type FlatRecord = Record<string, PrimitiveValue>;
export {};
//# sourceMappingURL=utils.d.ts.map