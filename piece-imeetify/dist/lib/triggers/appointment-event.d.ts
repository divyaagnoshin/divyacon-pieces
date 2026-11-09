import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const appointmentEvent: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    instructions: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    eventType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=appointment-event.d.ts.map