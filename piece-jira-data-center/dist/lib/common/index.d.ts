import { HttpMessageBody, HttpMethod, HttpRequest } from '@agnocon/pieces-common';
import { JiraDataCenterAuth } from '../../auth';
export declare function sendJiraRequest(request: HttpRequest & {
    auth: JiraDataCenterAuth;
}): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare function getUsers(auth: JiraDataCenterAuth): Promise<any[]>;
export declare function getProjects(auth: JiraDataCenterAuth): Promise<JiraProject[]>;
export declare function getIssueTypes({ auth, projectId, }: {
    auth: JiraDataCenterAuth;
    projectId: string;
}): Promise<{
    id: string;
    name: string;
}[]>;
export declare function getPriorities({ auth }: {
    auth: JiraDataCenterAuth;
}): Promise<any[]>;
export declare function searchIssuesByJql({ auth, jql, maxResults, }: {
    auth: JiraDataCenterAuth;
    jql: string;
    maxResults: number;
}): Promise<any[]>;
export declare function createJiraIssue(data: CreateIssueParams): Promise<any>;
export declare function updateJiraIssue(data: UpdateIssueParams): Promise<any>;
export type RequestParams = Record<string, string | number | string[] | undefined>;
export type JiraApiCallParams = {
    auth: JiraDataCenterAuth;
    method: HttpMethod;
    resourceUri: string;
    query?: RequestParams;
    body?: any;
};
export declare function jiraApiCall<T extends HttpMessageBody>({ auth, method, resourceUri, query, body, }: JiraApiCallParams): Promise<T>;
export declare function jiraPaginatedApiCall<T extends HttpMessageBody, K extends string>({ auth, method, resourceUri, query, body, propertyName, }: JiraApiCallParams & {
    propertyName: K;
}): Promise<T[]>;
export interface JiraIssueType {
    id: string;
    description: string;
    name: string;
}
export interface JiraProject {
    id: string;
    key: string;
    name: string;
    expand: string;
    self: string;
    projectTypeKey: string;
    simplified: boolean;
    style: string;
    isPrivate: boolean;
    properties: any;
}
export interface CreateIssueParams {
    auth: JiraDataCenterAuth;
    projectId: string;
    summary: string;
    description?: string;
    issueTypeId: string;
    assignee?: string;
    priority?: string;
    parentKey?: string;
}
export interface UpdateIssueParams {
    auth: JiraDataCenterAuth;
    issueId?: string;
    summary?: string;
    description?: string;
    issueTypeId: string;
    assignee?: string;
    priority?: string;
    parentKey?: string;
}
//# sourceMappingURL=index.d.ts.map