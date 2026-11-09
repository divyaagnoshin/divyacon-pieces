import { timeFormat } from '../common';
export declare const nextDayofYear: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    month: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    day: import("@agnocon/pieces-framework").NumberProperty<true>;
    time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currentTime: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    timeZone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=next-day-of-year.d.ts.map