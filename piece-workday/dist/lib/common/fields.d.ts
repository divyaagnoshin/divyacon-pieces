export declare function flattenRecord(value: unknown, prefix?: string, depth?: number): Record<string, unknown>;
export declare function formatWorkdayOutput(record: Record<string, unknown>, module: WorkdayModule): Record<string, unknown>;
export declare function formatWorkdayOutputs(records: Record<string, unknown>[], module: WorkdayModule): Record<string, unknown>[];
export declare function getRecordTimestamp(record: Record<string, unknown>, preferredField?: string): string | undefined;
export type WorkdayModule = 'recruiting' | 'onboarding' | 'hr_services_time_tracking';
//# sourceMappingURL=fields.d.ts.map