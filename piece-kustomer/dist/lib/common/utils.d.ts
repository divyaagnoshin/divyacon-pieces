import { KustomerJsonObject } from './types';
declare function parseRequiredString({ value, fieldName, }: {
    value: unknown;
    fieldName: string;
}): string;
declare function parseJsonObject({ value, fieldName, }: {
    value: unknown;
    fieldName: string;
}): KustomerJsonObject;
export declare const kustomerUtils: {
    parseRequiredString: typeof parseRequiredString;
    parseJsonObject: typeof parseJsonObject;
};
export {};
//# sourceMappingURL=utils.d.ts.map