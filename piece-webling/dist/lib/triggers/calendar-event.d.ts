import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const onEventChanged: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    calendarId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    calendarId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    calendarId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    calendarId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=calendar-event.d.ts.map