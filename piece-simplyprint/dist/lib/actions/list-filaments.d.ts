export declare const listFilamentsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    materialType: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    brand: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assigned: import("@agnocon/pieces-framework").StaticDropdownProperty<"true" | "false" | "any", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"true" | "false" | "any", true>;
    empty: import("@agnocon/pieces-framework").StaticDropdownProperty<"true" | "false" | "any", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"true" | "false" | "any", true>;
    printerId: import("@agnocon/pieces-framework").NumberProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<"brand" | "color" | "created" | "last_used" | "left", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"brand" | "color" | "created" | "last_used" | "left", true>;
    sortDir: import("@agnocon/pieces-framework").StaticDropdownProperty<"asc" | "desc", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"asc" | "desc", true>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=list-filaments.d.ts.map