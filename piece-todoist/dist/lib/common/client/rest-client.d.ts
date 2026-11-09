import { TodoistCompletedTask, TodoistCreateTaskRequest, TodoistProject, TodoistSection, TodoistTask, TodoistUpdateTaskRequest } from '../models';
export declare const todoistRestClient: {
    projects: {
        list({ token }: ProjectsListParams): Promise<TodoistProject[]>;
    };
    sections: {
        list({ token, project_id }: SectionsListParams): Promise<TodoistSection[]>;
    };
    tasks: {
        create({ token, project_id, content, description, labels, priority, due_date, section_id, }: TasksCreateParams): Promise<TodoistTask>;
        update(params: TasksUpdateParams): Promise<TodoistTask>;
        list({ token, project_id, filter }: TasksListParams): Promise<TodoistTask[]>;
        close({ token, task_id }: {
            token: string;
            task_id: string;
        }): Promise<any>;
        listCompleted({ token, since, until, project_id }: CompletedListParams): Promise<TodoistCompletedTask[]>;
        get({ token, task_id }: {
            token: string;
            task_id: string;
        }): Promise<TodoistTask>;
        filter({ token, query, lang, limit }: TasksFilterParams): Promise<TodoistTask[]>;
        delete({ token, task_id }: {
            token: string;
            task_id: string;
        }): Promise<any>;
        reopen({ token, task_id }: {
            token: string;
            task_id: string;
        }): Promise<any>;
        move({ token, task_id, project_id, section_id, parent_id }: TasksMoveParams): Promise<TodoistTask>;
        quickAdd({ token, text, note, reminder, auto_reminder }: TasksQuickAddParams): Promise<TodoistTask>;
        listCompletedByCompletionDate(params: CompletedByDateParams): Promise<TodoistCompletedTask[]>;
        listCompletedByDueDate(params: CompletedByDateParams): Promise<TodoistCompletedTask[]>;
    };
};
type ProjectsListParams = {
    token: string;
};
type SectionsListParams = {
    token: string;
    project_id?: string;
};
type TasksCreateParams = {
    token: string;
} & TodoistCreateTaskRequest;
type TasksUpdateParams = {
    token: string;
    task_id: string;
} & TodoistUpdateTaskRequest;
type TasksListParams = {
    token: string;
    project_id?: string | undefined;
    filter?: string | undefined;
};
type CompletedListParams = {
    token: string;
    since: string;
    until: string;
    project_id?: string | undefined;
};
type TasksFilterParams = {
    token: string;
    query: string;
    lang?: string | undefined;
    limit?: number | undefined;
};
type TasksMoveParams = {
    token: string;
    task_id: string;
    project_id?: string | undefined;
    section_id?: string | undefined;
    parent_id?: string | undefined;
};
type TasksQuickAddParams = {
    token: string;
    text: string;
    note?: string | undefined;
    reminder?: string | undefined;
    auto_reminder?: boolean | undefined;
};
type CompletedByDateParams = {
    token: string;
    since: string;
    until: string;
    project_id?: string | undefined;
    section_id?: string | undefined;
    parent_id?: string | undefined;
    filter_query?: string | undefined;
    limit?: number | undefined;
};
export {};
//# sourceMappingURL=rest-client.d.ts.map