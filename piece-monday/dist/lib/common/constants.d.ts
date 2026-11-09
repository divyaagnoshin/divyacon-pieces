export declare const enum MondayColumnType {
    AUTO_NUMBER = "auto_number",
    BOARD_RELATION = "board_relation",
    BUTTON = "button",
    CHECKBOX = "checkbox",
    COLOR_PICKER = "color_picker",
    COUNTRY = "country",
    CREATION_LOG = "creation_log",
    DATE = "date",
    DEPENDENCY = "dependency",
    DOC = "doc",
    DROPDOWN = "dropdown",
    EMAIL = "email",
    FILE = "file",
    FORMULA = "formula",
    HOUR = "hour",
    ITEM_ASSIGNEES = "item_assignees",
    ITEM_ID = "item_id",
    LAST_UPDATED = "last_updated",
    LINK = "link",
    LOCATION = "location",
    LONG_TEXT = "long_text",
    MIRROR = "mirror",
    NAME = "name",
    NUMBERS = "numbers",
    PHONE = "phone",
    PEOPLE = "people",
    PROGRESS = "progress",
    RATING = "rating",
    STATUS = "status",
    SUBTASKS = "subtasks",
    TAGS = "tags",
    TEAM = "team",
    TEXT = "text",
    TIMELINE = "timeline",
    TIME_TRACKING = "time_tracking",
    VOTE = "vote",
    WEEK = "week",
    WORLD_CLOCK = "world_clock",
    UNSUPPORTED = "unsupported"
}
export declare const enum MondayWebhookEventType {
    CHANGE_COLUMN_VALUE = "change_column_value",
    CHANGE_STATUS_COLUMN_VALUE = "change_status_column_value",
    CHANGE_SUBITEM_COLUMN_VALUE = "change_subitem_column_value",
    CHANGE_SPECIFIC_COLUMN_VALUE = "change_specific_column_value",
    CHANGE_NAME = "change_name",
    CREATE_ITEM = "create_item",
    ITEM_ARCHIVED = "item_archived",
    ITEM_DELETED = "item_deleted",
    ITEM_MOVED_TO_ANY_GROUP = "item_moved_to_any_group",
    ITEM_MOVED_TO_SPECIFIC_GROUP = "item_moved_to_specific_group",
    ITEM_RESTORED = "item_restored",
    CREATE_SUBITEM = "create_subitem",
    CHANGE_SUBITEM_NAME = "change_subitem_name",
    MOVE_SUBITEM = "move_subitem",
    SUBITEM_ARCHIVED = "subitem_archived",
    SUBITEM_DELETED = "subitem_deleted",
    CREATE_COLUMN = "create_column",
    CREATE_UPDATE = "create_update",
    EDIT_UPDATE = "edit_update",
    DELETE_UPDATE = "delete_update",
    CREATE_SUBITEM_UPDATE = "create_subitem_update"
}
export declare const enum BoardType {
    BOARD = "board",
    SUB_ITEMS_BOARD = "sub_items_board"
}
export declare const MondayNotWritableColumnType: MondayColumnType[];
export declare const COLUMN_TYPE_OPTIONS: {
    label: string;
    value: MondayColumnType;
}[];
//# sourceMappingURL=constants.d.ts.map