"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleTasksNewTaskTriggerOutputSchema = exports.googleTasksDeleteTaskOutputSchema = exports.googleTasksClearCompletedTasksOutputSchema = exports.googleTasksListTaskListsOutputSchema = exports.googleTasksFindTasksOutputSchema = exports.googleTasksAddTaskOutputSchema = exports.googleTasksUpdateTaskOutputSchema = exports.googleTasksMoveTaskOutputSchema = exports.googleTasksCreateTaskOutputSchema = exports.googleTasksCompleteTaskOutputSchema = exports.googleTasksGetTaskOutputSchema = void 0;
const taskFields = [
    { key: 'title', label: 'Title' },
    { key: 'status', label: 'Status' },
    { key: 'id', label: 'Task ID' },
    { key: 'notes', label: 'Notes' },
    { key: 'due', label: 'Due Date', format: 'date' },
    { key: 'completed', label: 'Completed At', format: 'datetime' },
    { key: 'updated', label: 'Updated At', format: 'datetime' },
    { key: 'parent', label: 'Parent Task ID' },
    { key: 'position', label: 'Position' },
    { key: 'webViewLink', label: 'Task Link', format: 'url' },
];
const taskListFields = [
    { key: 'title', label: 'Title' },
    { key: 'id', label: 'Task List ID' },
    { key: 'updated', label: 'Updated At', format: 'datetime' },
];
exports.googleTasksGetTaskOutputSchema = {
    fields: taskFields,
};
exports.googleTasksCompleteTaskOutputSchema = {
    fields: taskFields,
};
exports.googleTasksCreateTaskOutputSchema = {
    fields: taskFields,
};
exports.googleTasksMoveTaskOutputSchema = {
    fields: taskFields,
};
exports.googleTasksUpdateTaskOutputSchema = {
    fields: taskFields,
};
exports.googleTasksAddTaskOutputSchema = {
    fields: [{ key: 'body', label: 'Task', value: 'body', children: taskFields }],
};
exports.googleTasksFindTasksOutputSchema = {
    fields: [
        { key: 'tasks', label: 'Tasks', listItems: taskFields, labelKey: 'title' },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
exports.googleTasksListTaskListsOutputSchema = {
    fields: [
        { key: 'taskLists', label: 'Task Lists', listItems: taskListFields, labelKey: 'title' },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
exports.googleTasksClearCompletedTasksOutputSchema = {
    fields: [{ key: 'cleared', label: 'Cleared', format: 'boolean' }],
};
exports.googleTasksDeleteTaskOutputSchema = {
    fields: [
        { key: 'deleted', label: 'Deleted', format: 'boolean' },
        { key: 'alreadyAbsent', label: 'Already Absent', format: 'boolean' },
    ],
};
exports.googleTasksNewTaskTriggerOutputSchema = {
    fields: taskFields,
};
//# sourceMappingURL=output-schemas.js.map