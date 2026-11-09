export declare const createBudgetExpense: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    budgetId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    category: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
}>;
//# sourceMappingURL=create-budget-expense.d.ts.map