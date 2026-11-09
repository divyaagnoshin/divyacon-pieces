export declare const createExpense: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    account_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    issueDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    contactFirstName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    contactLastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    contactCountry: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    itemDescription: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    itemQuantity: import("@agnocon/pieces-framework").NumberProperty<true>;
    itemUnitCost: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    paymentMethod: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    country: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    poNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tagList: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-expence.d.ts.map