import { TriggerStrategy } from '@agnocon/pieces-framework';
import { AzureDevOpsHookEvent } from '../common';
export declare const newUpdatedWorkItemWebhookTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    work_item_type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    events: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<AzureDevOpsHookEvent, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    work_item_type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    events: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<AzureDevOpsHookEvent, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    work_item_type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    events: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<AzureDevOpsHookEvent, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    project: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    work_item_type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    events: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<AzureDevOpsHookEvent, true>;
}>;
//# sourceMappingURL=new-updated-work-item-webhook.d.ts.map