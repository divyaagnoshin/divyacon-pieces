import { timeFormat } from '../common';
export declare const addSubtractDateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    inputDate: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    inputDateFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    outputFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    expression: import("@agnocon/pieces-framework").LongTextProperty<true>;
    timeZone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    setTime: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    useCurrentTime: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=add-subtract-date.d.ts.map