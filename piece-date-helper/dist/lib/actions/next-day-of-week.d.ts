import { timeFormat } from '../common';
export declare const nextDayofWeek: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    weekday: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    currentTime: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeFormat: import("@agnocon/pieces-framework").StaticDropdownProperty<timeFormat, true>;
    timeZone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=next-day-of-week.d.ts.map