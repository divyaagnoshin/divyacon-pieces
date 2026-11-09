import { timeFormat, timeParts } from '../common';
export declare const dateDifferenceAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    startDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    startDateFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    endDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    endDateFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    unitDifference: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<timeParts, true>;
}>;
//# sourceMappingURL=date-difference.d.ts.map