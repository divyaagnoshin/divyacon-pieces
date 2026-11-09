export declare const updateJournalBatch: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    serverUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    jeBatchId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    reversalFlag: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    reversalDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    reversalPeriod: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    reversalMethodMeaning: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=update-journal-batch.d.ts.map