import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const watchTaskRunsTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    taskid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    taskid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    taskid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    taskid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apikey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    statuses: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
}>;
//# sourceMappingURL=watch-task-runs.d.ts.map