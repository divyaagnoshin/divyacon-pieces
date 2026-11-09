declare function toSubmissionArray(input: Record<string, unknown> | null | undefined): CustomFieldValueSubmission[];
export declare const simplyprintCustomFields: {
    toSubmissionArray: typeof toSubmissionArray;
};
export type CustomFieldScalar = string | number | boolean | Date | null | undefined;
export type CustomFieldInputValue = CustomFieldScalar | CustomFieldScalar[];
export interface CustomFieldValueSubmission {
    customFieldId: string;
    value: {
        string?: string;
        number?: number;
        boolean?: boolean;
        date?: string;
        options?: string[];
    };
}
export {};
//# sourceMappingURL=custom-fields.d.ts.map