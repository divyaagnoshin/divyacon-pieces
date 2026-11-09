import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { CreateTaskDateParams, CreateTaskParams, ListAPIResponse, ProjectResponse, CreateTaskResponse, WorkspaceFolderResponse, WorkspaceResponse, TaskResponse } from './types';
type RequestParams = Record<string, string | number | string[] | undefined>;
export declare class TaskadeAPIClient {
    private personalToken;
    constructor(personalToken: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: RequestParams, body?: any | undefined): Promise<T>;
    listWorkspaces(): Promise<ListAPIResponse<WorkspaceResponse>>;
    listWorkspaceFolders(workspace_id: string): Promise<ListAPIResponse<WorkspaceFolderResponse>>;
    listProjects(folder_id: string): Promise<ListAPIResponse<ProjectResponse>>;
    createTask(projectId: string, params: CreateTaskParams): Promise<CreateTaskResponse>;
    createTaskDate(projectId: string, taskId: string, params: CreateTaskDateParams): Promise<unknown>;
    listTasks(projectId: string, params: RequestParams): Promise<ListAPIResponse<TaskResponse>>;
    completeTask(projectId: string, taskId: string): Promise<unknown>;
    deleteTask(projectId: string, taskId: string): Promise<unknown>;
}
export {};
//# sourceMappingURL=client.d.ts.map