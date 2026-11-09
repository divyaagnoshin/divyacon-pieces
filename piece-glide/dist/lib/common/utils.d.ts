import { GlideRow } from './types';
export declare function parseRequiredString(value: unknown, fieldName: string): string;
export declare function parseGlideRow(value: unknown): GlideRow;
export declare function parseGlideRows(value: unknown): GlideRow[];
export declare function flattenGlideRows(rows: GlideRow[]): FlatRecord[];
type PrimitiveValue = string | number | boolean | null;
export type FlatRecord = Record<string, PrimitiveValue>;
export {};
//# sourceMappingURL=utils.d.ts.map