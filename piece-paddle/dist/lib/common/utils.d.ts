declare function getRequiredString({ value, fieldName, }: {
    value: unknown;
    fieldName: string;
}): string;
declare function getOptionalString({ value, }: {
    value: unknown;
}): string | undefined;
declare function getOptionalPositiveInteger({ value, fieldName, }: {
    value: unknown;
    fieldName: string;
}): number | undefined;
declare function getOptionalObject({ value, fieldName, }: {
    value: unknown;
    fieldName: string;
}): Record<string, unknown> | undefined;
declare function getLineItems({ value, fieldName, }: {
    value: unknown;
    fieldName: string;
}): Array<{
    price_id: string;
    quantity?: number;
}>;
declare function compactRecord(value: Record<string, unknown>): Record<string, unknown>;
declare const paddleUtils: {
    compactRecord: typeof compactRecord;
    getLineItems: typeof getLineItems;
    getOptionalObject: typeof getOptionalObject;
    getOptionalPositiveInteger: typeof getOptionalPositiveInteger;
    getOptionalString: typeof getOptionalString;
    getRequiredString: typeof getRequiredString;
};
export { paddleUtils };
//# sourceMappingURL=utils.d.ts.map