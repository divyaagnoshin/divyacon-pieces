import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newBitlinkCreatedTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    group_guid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    titleFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tagFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeArchived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    group_guid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    titleFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tagFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeArchived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    group_guid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    titleFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tagFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeArchived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    group_guid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    titleFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tagFilter: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    includeArchived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=new-bitlink-created.d.ts.map