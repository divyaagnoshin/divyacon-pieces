export declare const createExpense: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    companyId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    date: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    expenseNumber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    contactId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    expenseCost: import("@agnocon/pieces-framework").NumberProperty<false>;
    expenseNotes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    totalAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    categoryName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    paymentType: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    selectedCurrency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    isRecurring: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    recurringEndDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    recurringIntervalInDay: import("@agnocon/pieces-framework").NumberProperty<false>;
    recurringIntervalInString: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    isRoundOff: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    roundedAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    taxIdJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
    taxType: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-expense.d.ts.map