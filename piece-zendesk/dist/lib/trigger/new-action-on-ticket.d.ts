import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newActionOnTicket: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    ticket_id: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    ticket_id: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    ticket_id: import("@agnocon/pieces-framework").NumberProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    ticket_id: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
//# sourceMappingURL=new-action-on-ticket.d.ts.map