export declare const splitwiseApi: {
    getCategories: (auth: string) => Promise<any>;
    getGroups: (auth: string) => Promise<any>;
    getExpenses: (auth: string, groupId?: number, updatedAfter?: string) => Promise<any>;
    createExpense: (auth: string, expenseData: any) => Promise<any>;
};
//# sourceMappingURL=api.d.ts.map