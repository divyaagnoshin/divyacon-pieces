export declare const updateCard: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").BasicAuthProperty, {
    card_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    board_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    list_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    position: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    labels: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    closed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    due: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
//# sourceMappingURL=update-card.d.ts.map