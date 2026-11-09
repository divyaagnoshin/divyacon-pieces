import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare enum TaskStatus {
    NEEDS_ACTION = "needsAction",
    COMPLETED = "completed"
}
/**
 * @see https://developers.google.com/tasks/reference/rest/v1/tasklists/list#response-body
 */
export type TasksListResponse = {
    kind: string;
    etag: string;
    nextPageToken: string;
    items: TasksList[];
};
/**
 * @see https://developers.google.com/tasks/reference/rest/v1/tasklists#resource:-tasklist
 */
export type TasksList = {
    kind: string;
    id: string;
    etag: string;
    title: string;
    updated: string;
    selfLink: string;
};
/**
 * @see https://developers.google.com/tasks/reference/rest/v1/tasks#resource:-task
 */
export type Task = {
    kind: 'tasks#task';
    id?: string;
    title: string;
    status: TaskStatus;
    notes?: string;
    /**
     * *Optional* RFC 3339 timestamp of due date of the task
     */
    due?: string;
    /**
     * *Optional* RFC 3339 timestamp of completion.
     * Filled automatically if `status === 'completed'`
     */
    completed?: string;
    /**
     * RFC 3339 timestamp when the task was last updated (server-set, always present on API responses)
     */
    updated?: string;
};
/**
 * @see https://developers.google.com/tasks/reference/rest/v1/tasks/list#response-body
 */
export type TasksResponse = {
    kind: string;
    etag: string;
    nextPageToken?: string;
    items: Task[];
};
export declare const googleTasksCommon: {
    baseUrl: string;
    /**
     * @property Target task list ID where the new task will be created
     */
    tasksList: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    notes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    due: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    completed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
};
export declare function getLists(authProp: OAuth2PropertyValue): Promise<TasksList[]>;
export declare function getTasks(authProp: OAuth2PropertyValue, tasklist: string, params?: Record<string, string | number | boolean>): Promise<Task[]>;
export declare function createTask(authProp: OAuth2PropertyValue, taskListId: string, task: Task): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
//# sourceMappingURL=index.d.ts.map