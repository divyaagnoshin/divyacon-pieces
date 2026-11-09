import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
declare function asAzureAuth(auth: unknown): AzureDevOpsAuth;
declare function narrowString(value: unknown, fieldName: string): string;
declare function generateWebhookToken(): string;
declare function timingSafeEqual(a: string, b: string): boolean;
declare function extractHttpStatus(error: unknown): string;
declare function parseWebhookPayload(body: unknown): WebhookPayload | null;
export declare const azureDevOpsAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
export type AzureDevOpsAuth = AppConnectionValueForAuthProperty<typeof azureDevOpsAuth>;
declare function azureDevOpsApiCall<T extends HttpMessageBody>({ organizationUrl, pat, method, endpoint, body, queryParams, isJsonPatch, }: {
    organizationUrl: string;
    pat: string;
    method: HttpMethod;
    endpoint: string;
    body?: unknown;
    queryParams?: Record<string, string>;
    isJsonPatch?: boolean;
}): Promise<T>;
declare function flattenWorkItem(workItem: AzureDevOpsWorkItem): FlatWorkItem;
declare function fetchWorkItemsByIds({ organizationUrl, pat, ids, }: {
    organizationUrl: string;
    pat: string;
    ids: number[];
}): Promise<FlatWorkItem[]>;
declare function createSubscription({ auth, projectId, eventType, webhookUrl, workItemType, basicAuthUsername, basicAuthPassword, }: {
    auth: AzureDevOpsAuth;
    projectId: string;
    eventType: AzureDevOpsHookEvent;
    webhookUrl: string;
    workItemType?: string;
    basicAuthUsername?: string;
    basicAuthPassword?: string;
}): Promise<SubscriptionResponse>;
declare function deleteSubscription({ auth, subscriptionId, }: {
    auth: AzureDevOpsAuth;
    subscriptionId: string;
}): Promise<void>;
declare function fetchProjectId(auth: AzureDevOpsAuth, projectName: string): Promise<string | null>;
declare function fetchTeamMembers(auth: AzureDevOpsAuth, projectName: string): Promise<IdentityRef[]>;
declare function fetchWorkItemTypeStates(auth: AzureDevOpsAuth, projectName: string, workItemType: string): Promise<WorkItemStateColor[]>;
export declare const azureDevOpsCommon: {
    projectDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    workItemTypeDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    workItemTypeDropdownOptional: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    assignedToDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    stateDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    stateDropdownOptional: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        organizationUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        pat: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    priorityDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    escapeWiqlString: typeof escapeWiqlString;
    sanitizeOrgUrl: typeof sanitizeOrgUrl;
    isValidUrl: typeof isValidUrl;
    asAuth: typeof asAzureAuth;
    narrowString: typeof narrowString;
    parseWebhookPayload: typeof parseWebhookPayload;
    generateWebhookToken: typeof generateWebhookToken;
    timingSafeEqual: typeof timingSafeEqual;
    extractHttpStatus: typeof extractHttpStatus;
    apiCall: typeof azureDevOpsApiCall;
    fetchWorkItemsByIds: typeof fetchWorkItemsByIds;
    flattenWorkItem: typeof flattenWorkItem;
    fetchProjectId: typeof fetchProjectId;
    fetchTeamMembers: typeof fetchTeamMembers;
    fetchWorkItemTypeStates: typeof fetchWorkItemTypeStates;
    createSubscription: typeof createSubscription;
    deleteSubscription: typeof deleteSubscription;
};
declare function sanitizeOrgUrl(url: string): string;
declare function escapeWiqlString(value: string): string;
declare function isValidUrl(url: string): boolean;
export interface JsonPatchOperation {
    op: 'add' | 'replace' | 'remove' | 'test';
    path: string;
    value?: unknown;
}
export interface IdentityRef {
    displayName: string;
    uniqueName: string;
    id: string;
}
export interface AzureDevOpsWorkItem {
    id: number;
    rev: number;
    url?: string;
    fields: Record<string, unknown> & {
        'System.Title'?: string;
        'System.WorkItemType'?: string;
        'System.State'?: string;
        'System.Reason'?: string;
        'System.AssignedTo'?: IdentityRef;
        'System.CreatedDate'?: string;
        'System.CreatedBy'?: IdentityRef;
        'System.ChangedDate'?: string;
        'System.ChangedBy'?: IdentityRef;
        'System.AreaPath'?: string;
        'System.IterationPath'?: string;
        'System.TeamProject'?: string;
        'System.Description'?: string;
        'Microsoft.VSTS.Common.Priority'?: number;
    };
}
export interface FlatWorkItem {
    id: number;
    rev: number;
    url: string | null;
    title: string | null;
    work_item_type: string | null;
    state: string | null;
    reason: string | null;
    assigned_to: string | null;
    assigned_to_email: string | null;
    created_date: string | null;
    created_by: string | null;
    changed_date: string | null;
    changed_by: string | null;
    area_path: string | null;
    iteration_path: string | null;
    priority: number | null;
    description: string | null;
    project: string | null;
}
export interface WiqlResponse {
    queryType: string;
    queryResultType: string;
    asOf: string;
    workItems: Array<{
        id: number;
        url: string;
    }>;
}
export interface ProjectListResponse {
    count: number;
    value: Array<{
        id: string;
        name: string;
        state: string;
    }>;
}
export interface WorkItemStateColor {
    name: string;
    color?: string;
    category?: string;
}
export type AzureDevOpsHookEvent = 'workitem.created' | 'workitem.updated' | 'workitem.commented';
export declare const WEBHOOK_EVENT_OPTIONS: ReadonlyArray<{
    label: string;
    value: AzureDevOpsHookEvent;
}>;
export interface SubscriptionResponse {
    id: string;
    publisherId: string;
    eventType: string;
    consumerId: string;
    consumerActionId: string;
}
export interface WorkItemResource {
    id?: number;
    rev?: number;
    url?: string;
    workItemId?: number;
    fields?: AzureDevOpsWorkItem['fields'];
    revision?: {
        comment?: {
            content?: string;
        };
        fields?: AzureDevOpsWorkItem['fields'];
    };
}
export interface WebhookPayload {
    eventType: AzureDevOpsHookEvent;
    resource: WorkItemResource;
}
export {};
//# sourceMappingURL=index.d.ts.map