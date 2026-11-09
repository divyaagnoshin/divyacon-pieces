import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const deadlineTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").BasicAuthProperty, {
    board_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    list_id_opt: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    time_unit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    time_before_due: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").BasicAuthProperty, {
    board_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    list_id_opt: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    time_unit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    time_before_due: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").BasicAuthProperty, {
    board_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    list_id_opt: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    time_unit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    time_before_due: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").BasicAuthProperty, {
    board_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    list_id_opt: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty>;
    time_unit: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    time_before_due: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=deadline.d.ts.map