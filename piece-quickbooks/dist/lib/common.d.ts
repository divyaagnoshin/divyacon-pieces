export declare const quickbooksCommon: {
    getApiUrl: (realmId: string) => string;
};
export interface QuickbooksEntityResponse<T> {
    QueryResponse?: {
        startPosition?: number;
        maxResults?: number;
        totalCount?: number;
    } & {
        [key: string]: T[] | undefined;
    };
    Fault?: {
        Error: {
            Message: string;
            Detail?: string;
            code: string;
        }[];
        type: string;
    };
    time?: string;
}
//# sourceMappingURL=common.d.ts.map