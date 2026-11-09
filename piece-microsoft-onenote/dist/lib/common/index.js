"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotebooksDropdown = getNotebooksDropdown;
exports.getSectionsDropdown = getSectionsDropdown;
exports.getPagesDropdown = getPagesDropdown;
exports.getSectionsByNotebookDropdown = getSectionsByNotebookDropdown;
exports.getPagesBySectionDropdown = getPagesBySectionDropdown;
const tslib_1 = require("tslib");
const microsoft_cloud_1 = require("./microsoft-cloud");
const microsoft_graph_client_1 = require("@microsoft/microsoft-graph-client");
function createClient(auth) {
    var _a;
    const cloud = (_a = auth.props) === null || _a === void 0 ? void 0 : _a['cloud'];
    return microsoft_graph_client_1.Client.initWithMiddleware({
        authProvider: {
            getAccessToken: () => Promise.resolve(auth.access_token),
        },
        baseUrl: (0, microsoft_cloud_1.getGraphBaseUrl)(cloud),
    });
}
function getNotebooksDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const client = createClient(auth);
        try {
            const response = yield client.api('/me/onenote/notebooks').get();
            return {
                disabled: false,
                options: response.value.map((notebook) => ({
                    label: notebook.displayName,
                    value: notebook.id,
                })),
            };
        }
        catch (error) {
            console.error('Error fetching notebooks:', error);
            return {
                disabled: true,
                placeholder: 'Failed to load notebooks',
                options: [],
            };
        }
    });
}
function getSectionsDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const client = createClient(auth);
        try {
            const response = yield client.api('/me/onenote/sections').get();
            return {
                disabled: false,
                options: response.value.map((section) => ({
                    label: section.displayName,
                    value: section.id,
                })),
            };
        }
        catch (error) {
            console.error('Error fetching sections:', error);
            return {
                disabled: true,
                placeholder: 'Failed to load sections',
                options: [],
            };
        }
    });
}
function getPagesDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const client = createClient(auth);
        try {
            const response = yield client.api('/me/onenote/pages').get();
            return {
                disabled: false,
                options: response.value.map((page) => ({
                    label: page.title,
                    value: page.id,
                })),
            };
        }
        catch (error) {
            console.error('Error fetching pages:', error);
            return {
                disabled: true,
                placeholder: 'Failed to load pages',
                options: [],
            };
        }
    });
}
function getSectionsByNotebookDropdown(auth, notebookId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const client = createClient(auth);
        try {
            const response = yield client.api(`/me/onenote/notebooks/${notebookId}/sections`).get();
            return {
                disabled: false,
                options: response.value.map((section) => ({
                    label: section.displayName,
                    value: section.id,
                })),
            };
        }
        catch (error) {
            console.error('Error fetching sections for notebook:', error);
            return {
                disabled: true,
                placeholder: 'Failed to load sections',
                options: [],
            };
        }
    });
}
function getPagesBySectionDropdown(auth, sectionId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const client = createClient(auth);
        try {
            const response = yield client.api(`/me/onenote/sections/${sectionId}/pages`).get();
            return {
                disabled: false,
                options: response.value.map((page) => ({
                    label: page.title,
                    value: page.id,
                })),
            };
        }
        catch (error) {
            console.error('Error fetching pages for section:', error);
            return {
                disabled: true,
                placeholder: 'Failed to load pages',
                options: [],
            };
        }
    });
}
//# sourceMappingURL=index.js.map