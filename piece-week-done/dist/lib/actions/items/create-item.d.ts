export declare const createItemAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    description: import("@agnocon/pieces-framework").LongTextProperty<true>;
    team_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    type_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    period: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    user_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    source_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    due_on: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    private: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
}>;
//# sourceMappingURL=create-item.d.ts.map