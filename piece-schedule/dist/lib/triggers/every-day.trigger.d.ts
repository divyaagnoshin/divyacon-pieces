import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const everyDayTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    hour_of_the_day: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    run_on_weekends: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    hour_of_the_day: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    run_on_weekends: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    hour_of_the_day: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    run_on_weekends: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    hour_of_the_day: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    timezone: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    run_on_weekends: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=every-day.trigger.d.ts.map