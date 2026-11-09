export declare enum FilterOperator {
    TEXT_CONTAINS = "TEXT_CONTAINS",
    TEXT_DOES_NOT_CONTAIN = "TEXT_DOES_NOT_CONTAIN",
    TEXT_EXACTLY_MATCHES = "TEXT_EXACTLY_MATCHES",
    TEXT_DOES_NOT_EXACTLY_MATCH = "TEXT_DOES_NOT_EXACTLY_MATCH",
    TEXT_STARTS_WITH = "TEXT_START_WITH",
    TEXT_DOES_NOT_START_WITH = "TEXT_DOES_NOT_START_WITH",
    TEXT_ENDS_WITH = "TEXT_ENDS_WITH",
    TEXT_DOES_NOT_END_WITH = "TEXT_DOES_NOT_END_WITH",
    TEXT_MATCHES_ANY_OF = "TEXT_MATCHES_ANY_OF",
    TEXT_MATCHES_NONE_OF = "TEXT_MATCHES_NONE_OF",
    NUMBER_IS_GREATER_THAN = "NUMBER_IS_GREATER_THAN",
    NUMBER_IS_LESS_THAN = "NUMBER_IS_LESS_THAN",
    NUMBER_IS_EQUAL_TO = "NUMBER_IS_EQUAL_TO",
    BOOLEAN_IS_TRUE = "BOOLEAN_IS_TRUE",
    BOOLEAN_IS_FALSE = "BOOLEAN_IS_FALSE",
    DATE_IS_BEFORE = "DATE_IS_BEFORE",
    DATE_IS_EQUAL = "DATE_IS_EQUAL",
    DATE_IS_AFTER = "DATE_IS_AFTER",
    LIST_CONTAINS = "LIST_CONTAINS",
    LIST_DOES_NOT_CONTAIN = "LIST_DOES_NOT_CONTAIN",
    LIST_IS_EMPTY = "LIST_IS_EMPTY",
    LIST_IS_NOT_EMPTY = "LIST_IS_NOT_EMPTY",
    EXISTS = "EXISTS",
    DOES_NOT_EXIST = "DOES_NOT_EXIST"
}
export declare const appendMultipleRowsAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    storageSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    siteId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    documentId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    workbookId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    worksheetId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    values: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    filterMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    filterColumn: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    filterType: import("@agnocon/pieces-framework").StaticDropdownProperty<FilterOperator, false>;
    filterValue: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=append-multiple-rows.d.ts.map