import { timeFormat, timeParts } from '../common';
export declare const extractDateParts: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    inputDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    inputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    unitExtract: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<timeParts, true>;
}>;
//# sourceMappingURL=extract-date-parts.d.ts.map