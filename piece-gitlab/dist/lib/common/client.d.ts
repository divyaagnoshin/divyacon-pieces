import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { ListProjectsRequest, CreateProjectIssueRequest, GitlabProject, ProjectWebhookRequest, ProjectWebhook } from './models';
export declare class GitlabApi {
    private accessToken;
    constructor(accessToken: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, url: string, query?: QueryParams, body?: object): Promise<T>;
    listProjects(request: ListProjectsRequest): Promise<GitlabProject[]>;
    createProjectIssue(projectId: string, request: CreateProjectIssueRequest): Promise<unknown>;
    subscribeProjectWebhook(projectId: string, request: ProjectWebhookRequest): Promise<ProjectWebhook>;
    unsubscribeProjectWebhook(projectId: string, webhookId: string): Promise<unknown>;
}
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
//# sourceMappingURL=client.d.ts.map