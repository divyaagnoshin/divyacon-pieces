import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const jiraCloudAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
export type JiraAuth = AppConnectionValueForAuthProperty<typeof jiraCloudAuth>;
//# sourceMappingURL=auth.d.ts.map