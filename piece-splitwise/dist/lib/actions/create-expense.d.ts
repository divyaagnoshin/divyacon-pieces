export declare const createExpenseAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    split_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    cost: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    details: import("@agnocon/pieces-framework").LongTextProperty<false>;
    date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    repeat_interval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    currency_code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    category_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    group_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    users: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create-expense.d.ts.map