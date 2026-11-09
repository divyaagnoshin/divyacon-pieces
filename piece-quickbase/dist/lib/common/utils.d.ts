import { QuickbaseRecord, QuickbaseField } from './types';
export declare function generateDeduplicationKey(recordId: string | number, lastModified: string): string;
export declare function mapFieldsToRecord(fieldsData: Record<string, any>, fields: QuickbaseField[]): Record<string, {
    value: any;
}>;
export declare function extractRecordValues(record: QuickbaseRecord): Record<string, any>;
export declare function chunkArray<T>(array: T[], chunkSize: number): T[][];
export declare function buildWhereClause(filters: Record<string, any>): string;
export declare function validateRequiredFields(data: Record<string, any>, requiredFields: string[]): void;
//# sourceMappingURL=utils.d.ts.map