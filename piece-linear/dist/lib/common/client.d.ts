import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { LinearDocument } from '@linear/sdk';
import { linearAuth } from '../..';
export declare class LinearClientWrapper {
    private client;
    constructor(apiKey: string);
    createIssue(input: LinearDocument.IssueCreateInput): Promise<import("@linear/sdk").IssuePayload>;
    listIssueStates(variables: LinearDocument.WorkflowStatesQueryVariables): Promise<import("@linear/sdk").WorkflowStateConnection>;
    listIssuePriorities(): Promise<import("@linear/sdk").IssuePriorityValue[]>;
    listUsers(variables: LinearDocument.UsersQueryVariables): Promise<import("@linear/sdk").UserConnection>;
    listIssueLabels(variables: LinearDocument.IssueLabelsQueryVariables): Promise<import("@linear/sdk").IssueLabelConnection>;
    listTeams(variables?: LinearDocument.TeamsQueryVariables): Promise<import("@linear/sdk").TeamConnection>;
    listIssues(variables?: LinearDocument.IssuesQueryVariables): Promise<import("@linear/sdk").IssueConnection>;
    updateIssue(issueId: string, input: LinearDocument.IssueUpdateInput): Promise<import("@linear/sdk").IssuePayload>;
    createProject(input: LinearDocument.ProjectCreateInput): Promise<import("@linear/sdk").ProjectPayload>;
    listProjects(variables?: LinearDocument.ProjectsQueryVariables): Promise<import("@linear/sdk").ProjectConnection>;
    updateProject(projectId: string, input: LinearDocument.ProjectUpdateInput): Promise<import("@linear/sdk").ProjectPayload>;
    createComment(input: LinearDocument.CommentCreateInput): Promise<import("@linear/sdk").CommentPayload>;
    createWebhook(input: LinearDocument.WebhookCreateInput): Promise<import("@linear/sdk").WebhookPayload>;
    listWebhooks(variables?: LinearDocument.WebhooksQueryVariables): Promise<import("@linear/sdk").WebhookConnection>;
    deleteWebhook(webhookId: string): Promise<import("@linear/sdk").DeletePayload>;
    listTeamsTemplates(teamId: string, variables: Omit<LinearDocument.Team_TemplatesQueryVariables, 'id'>): Promise<import("@linear/sdk").TemplateConnection>;
    listProjectStatuses(): Promise<{
        id: string;
        name: string;
        type: string;
    }[]>;
    rawRequest(query: string, variables?: Record<string, unknown>): Promise<import("@linear/sdk").LinearRawResponse<unknown>>;
}
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof linearAuth>): LinearClientWrapper;
//# sourceMappingURL=client.d.ts.map