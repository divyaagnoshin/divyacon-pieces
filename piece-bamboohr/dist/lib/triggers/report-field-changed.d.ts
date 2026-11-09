import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const reportFieldChanged: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    reportId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fieldToMonitor: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    reportId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fieldToMonitor: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    reportId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fieldToMonitor: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    reportId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    fieldToMonitor: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        companyDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=report-field-changed.d.ts.map