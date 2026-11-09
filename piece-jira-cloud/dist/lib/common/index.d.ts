import { HttpMessageBody, HttpMethod, HttpRequest, QueryParams } from '@agnocon/pieces-common';
import { JiraAuth } from '../../auth';
import { JiraSearchResponse } from './types';
export declare function sendJiraRequest(request: HttpRequest & {
    auth: JiraAuth;
}): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare function getUsers(auth: JiraAuth): Promise<any[]>;
export declare function getProjects(auth: JiraAuth): Promise<JiraProject[]>;
export declare function getIssueTypes({ auth, projectId }: {
    auth: JiraAuth;
    projectId: string;
}): Promise<any[]>;
export declare function getPriorities({ auth }: {
    auth: JiraAuth;
}): Promise<any[]>;
export declare function executeJql({ auth, jql, sanitizeJql, url, method, queryParams, body, }: {
    auth: JiraAuth;
    jql: string;
    sanitizeJql: boolean;
    url: string;
    method: HttpMethod;
    queryParams?: QueryParams;
    body?: HttpMessageBody;
}): Promise<any>;
export declare function searchIssuesByJql({ auth, jql, maxResults, sanitizeJql, nextPageToken, fields, expand, }: {
    auth: JiraAuth;
    jql: string;
    maxResults: number;
    sanitizeJql: boolean;
    nextPageToken?: string;
    fields?: string[];
    expand?: string[];
}): Promise<JiraSearchResponse>;
export declare function createJiraIssue(data: CreateIssueParams): Promise<any>;
export declare function updateJiraIssue(data: UpdateIssueParams): Promise<any>;
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
    auth: JiraAuth;
    projectId: string;
    summary: string;
    description?: string;
    issueTypeId: string;
    assignee?: string;
    priority?: string;
    parentKey?: string;
}
export interface UpdateIssueParams {
    auth: JiraAuth;
    issueId?: string;
    summary?: string;
    description?: string;
    issueTypeId: string;
    assignee?: string;
    priority?: string;
    parentKey?: string;
}
export type RequestParams = Record<string, string | number | string[] | undefined>;
export type JiraApiCallParams = {
    auth: JiraAuth;
    method: HttpMethod;
    resourceUri: string;
    query?: RequestParams;
    body?: any;
};
export declare function jiraApiCall<T extends HttpMessageBody>({ auth, method, resourceUri, query, body, }: JiraApiCallParams): Promise<T>;
export declare function jiraPaginatedApiCall<T extends HttpMessageBody, K extends string>({ auth, method, resourceUri, query, body, propertyName, }: JiraApiCallParams & {
    propertyName: K;
}): Promise<T[]>;
export declare function mapFieldNames(fields: Record<string, any>, fieldNames: Record<string, string>): Record<string, any>;
//# sourceMappingURL=index.d.ts.map