import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newRecordTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, undefined, {
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, undefined, {
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, undefined, {
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, undefined, {
    table_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, undefined>;
}>;
//# sourceMappingURL=new-record.d.ts.map