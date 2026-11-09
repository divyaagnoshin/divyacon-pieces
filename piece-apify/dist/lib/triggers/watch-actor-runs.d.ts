import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const watchActorRunsTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    actorSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    actorid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    actorSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    actorid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    actorSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    actorid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    actorSource: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    actorid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}>;
//# sourceMappingURL=watch-actor-runs.d.ts.map