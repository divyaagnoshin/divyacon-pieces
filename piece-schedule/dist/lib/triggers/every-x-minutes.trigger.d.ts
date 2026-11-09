import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const everyXMinutesTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    minutes: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    minutes: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    minutes: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    minutes: import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
}>;
//# sourceMappingURL=every-x-minutes.trigger.d.ts.map