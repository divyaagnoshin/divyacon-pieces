import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const everyMonthTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    day_of_the_month: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    hour_of_the_day: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    day_of_the_month: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    hour_of_the_day: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    day_of_the_month: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    hour_of_the_day: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    day_of_the_month: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    hour_of_the_day: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=every-month.trigger.d.ts.map