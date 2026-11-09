import { OAuth2PropertyValue, DropdownOption } from '@agnocon/pieces-framework';
import { Client } from '@microsoft/microsoft-graph-client';
export declare function getTaskListsDropdown(auth: OAuth2PropertyValue): Promise<{
    disabled: boolean;
    options: DropdownOption<string>[];
    placeholder?: string;
}>;
export declare function getTasksInListDropdown(auth: OAuth2PropertyValue, taskListId: string): Promise<{
    disabled: boolean;
    options: DropdownOption<string>[];
    placeholder?: string;
}>;
export declare function getIncompleteTasksInListDropdown(auth: OAuth2PropertyValue, taskListId: string): Promise<{
    disabled: boolean;
    options: DropdownOption<string>[];
    placeholder?: string;
}>;
declare function createTodoClient(auth: OAuth2PropertyValue): Client;
export { createTodoClient };
export declare const microsoftTodoCommon: {
    getTaskListsDropdown: typeof getTaskListsDropdown;
    getTasksInListDropdown: typeof getTasksInListDropdown;
    getIncompleteTasksInListDropdown: typeof getIncompleteTasksInListDropdown;
};
//# sourceMappingURL=index.d.ts.map