import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const opnformNewSubmission: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    workspaceId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    formId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=new-submission.d.ts.map