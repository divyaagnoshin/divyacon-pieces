"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microsoftTodoCommon = void 0;
exports.getTaskListsDropdown = getTaskListsDropdown;
exports.getTasksInListDropdown = getTasksInListDropdown;
exports.getIncompleteTasksInListDropdown = getIncompleteTasksInListDropdown;
exports.createTodoClient = createTodoClient;
const tslib_1 = require("tslib");
const microsoft_cloud_1 = require("./microsoft-cloud");
const microsoft_graph_client_1 = require("@microsoft/microsoft-graph-client");
function getTaskListsDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth || !auth.access_token) {
            return {
                disabled: true,
                options: [],
                placeholder: 'Connect your account first',
            };
        }
        try {
            const client = createTodoClient(auth);
            const options = [];
            let response = yield client.api(`/me/todo/lists`).get();
            while (response.value.length > 0) {
                for (const list of response.value) {
                    options.push({ label: list.displayName, value: list.id });
                }
                if (response['@odata.nextLink']) {
                    response = yield client.api(response['@odata.nextLink']).get();
                }
                else {
                    break;
                }
            }
            return {
                disabled: false,
                options: options,
            };
        }
        catch (error) {
            return {
                disabled: true,
                options: [],
                placeholder: 'An unexpected error occurred while fetching task lists.',
            };
        }
    });
}
function getTasksInListDropdown(auth, taskListId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth || !auth.access_token) {
            return { disabled: true, options: [], placeholder: 'Connect your account first' };
        }
        if (!taskListId) {
            return { disabled: true, options: [], placeholder: 'Task List ID is required' };
        }
        try {
            const client = createTodoClient(auth);
            const options = [];
            let response = yield client.api(`/me/todo/lists/${taskListId}/tasks`).get();
            while (response.value.length > 0) {
                for (const task of response.value) {
                    if (task.id && task.title) {
                        options.push({ label: task.title, value: task.id });
                    }
                }
                if (response['@odata.nextLink']) {
                    response = yield client.api(response['@odata.nextLink']).get();
                }
                else {
                    break;
                }
            }
            return { disabled: false, options: options };
        }
        catch (error) {
            return { disabled: true, options: [], placeholder: 'Error fetching tasks.' };
        }
    });
}
function getIncompleteTasksInListDropdown(auth, taskListId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth || !auth.access_token) {
            return { disabled: true, options: [], placeholder: 'Connect your account first' };
        }
        if (!taskListId) {
            return { disabled: true, options: [], placeholder: 'Task List ID is required' };
        }
        try {
            const client = createTodoClient(auth);
            const options = [];
            let response = yield client
                .api(`/me/todo/lists/${taskListId}/tasks`)
                .filter("status ne 'completed'")
                .get();
            while (response.value.length > 0) {
                for (const task of response.value) {
                    if (task.id && task.title) {
                        options.push({ label: task.title, value: task.id });
                    }
                }
                if (response['@odata.nextLink']) {
                    response = yield client.api(response['@odata.nextLink']).get();
                }
                else {
                    break;
                }
            }
            if (options.length === 0) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'No incomplete tasks found in this list',
                };
            }
            return { disabled: false, options: options };
        }
        catch (error) {
            return { disabled: true, options: [], placeholder: 'Error fetching tasks.' };
        }
    });
}
function createTodoClient(auth) {
    var _a;
    const cloud = (_a = auth.props) === null || _a === void 0 ? void 0 : _a['cloud'];
    const baseUrl = (0, microsoft_cloud_1.getGraphBaseUrl)(cloud);
    const host = new URL(baseUrl).hostname;
    return microsoft_graph_client_1.Client.initWithMiddleware({
        authProvider: {
            getAccessToken: () => Promise.resolve(auth.access_token),
        },
        baseUrl,
        customHosts: new Set([host]),
    });
}
exports.microsoftTodoCommon = {
    getTaskListsDropdown,
    getTasksInListDropdown,
    getIncompleteTasksInListDropdown,
};
//# sourceMappingURL=index.js.map