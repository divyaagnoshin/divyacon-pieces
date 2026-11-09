export type IssueTypeMetadata = {
    id: string;
    name: string;
};
export type IssueFieldMetaData = {
    required: boolean;
    name: string;
    key: string;
    fieldId: string;
    schema: {
        type: 'string' | 'date' | 'datetime' | 'array' | 'number' | 'option' | 'user' | 'group' | 'version' | 'project' | 'issuelink' | 'priority' | 'issuetype' | 'component';
        items: string;
        custom?: string;
        customId?: number;
    };
    allowedValues?: Array<{
        value: string;
        id: string;
        name: string;
    }>;
};
export declare const VALID_CUSTOM_FIELD_TYPES: string[];
//# sourceMappingURL=types.d.ts.map