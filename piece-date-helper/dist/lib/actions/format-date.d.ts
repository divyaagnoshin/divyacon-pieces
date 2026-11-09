import { timeFormat } from '../common';
export declare const formatDateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    inputDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    inputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    inputTimeZone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    outputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    outputTimeZone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=format-date.d.ts.map