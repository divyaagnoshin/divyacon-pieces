export declare const gmailListHistoryAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    start_history_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    history_types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    max_results: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-history-action.d.ts.map