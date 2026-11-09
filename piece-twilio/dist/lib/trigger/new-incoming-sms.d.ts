import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const twilioNewIncomingSms: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").BasicAuthProperty, {
    phone_number: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").BasicAuthProperty, {
    phone_number: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").BasicAuthProperty, {
    phone_number: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").BasicAuthProperty, {
    phone_number: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
}>;
//# sourceMappingURL=new-incoming-sms.d.ts.map