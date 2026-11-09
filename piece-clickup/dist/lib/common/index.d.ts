import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
import { ClickupTask } from './models';
export declare const clickupCommon: {
    workspace_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    space_id: (required?: boolean, multi?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    list_id: (required?: boolean, multi?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    task_id: (required?: boolean, label?: string | undefined) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    folder_id: (required?: boolean, multi?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    field_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    status_id: (required?: boolean, multi?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    priority_id: (required?: boolean) => import("@agnocon/pieces-framework").StaticDropdownProperty<number, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<number, true>;
    assignee_id: (required: boolean | undefined, displayName: string | undefined, description: string) => import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    single_assignee_id: (required: boolean | undefined, displayName: string | undefined, description: string) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    template_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    channel_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
export declare function listSpaces(accessToken: string, workspaceId: string): Promise<{
    spaces: {
        id: string;
        name: string;
    }[];
}>;
export declare function listAllLists(accessToken: string, spaceId: string): Promise<{
    name: string;
    id: string;
}[]>;
export declare function listLists(accessToken: string, folderId: string): Promise<{
    lists: {
        id: string;
        name: string;
    }[];
}>;
export declare function listFolders(accessToken: string, spaceId: string): Promise<{
    folders: {
        id: string;
        name: string;
    }[];
}>;
export declare function listAccessibleCustomFields(accessToken: string, listId: string): Promise<{
    fields: {
        id: string;
        name: string;
        type: string;
        type_config: Record<string, unknown>;
        date_created: string;
        hide_from_guests: false;
    }[];
}>;
export declare function listTags(accessToken: string, spaceId: string): Promise<{
    tags: {
        id: string;
        name: string;
    }[];
}>;
export declare function listTasks(accessToken: string, listId: string): Promise<{
    tasks: {
        id: string;
        name: string;
    }[];
}>;
export declare function retrieveChannels(accessToken: string, workspaceId: string): Promise<{
    data: {
        id: string;
        name: string;
    }[];
}>;
export declare function callClickupGetTask(accessToken: string, taskId: string): Promise<ClickupTask>;
export declare function callClickUpApi<T extends HttpMessageBody = any>(method: HttpMethod, apiUrl: string, accessToken: string, body: any | undefined, queryParams?: any | undefined, headers?: any | undefined): Promise<HttpResponse<T>>;
export declare function callClickUpApi3<T extends HttpMessageBody = any>(method: HttpMethod, apiUrl: string, accessToken: string, body: any | undefined, queryParams?: any | undefined, headers?: any | undefined): Promise<HttpResponse<T>>;
//# sourceMappingURL=index.d.ts.map