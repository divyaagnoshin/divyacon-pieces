export declare const updateBudget: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    budgetId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    allocated: import("@agnocon/pieces-framework").NumberProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    category: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    period: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    endDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=update-budget.d.ts.map