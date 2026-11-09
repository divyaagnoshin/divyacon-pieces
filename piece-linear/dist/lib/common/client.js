"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearClientWrapper = void 0;
exports.makeClient = makeClient;
const tslib_1 = require("tslib");
const sdk_1 = require("@linear/sdk");
class LinearClientWrapper {
    constructor(apiKey) {
        this.client = new sdk_1.LinearClient({ apiKey: apiKey });
    }
    createIssue(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.createIssue(input);
        });
    }
    listIssueStates(variables) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.workflowStates(variables);
        });
    }
    listIssuePriorities() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.issuePriorityValues;
        });
    }
    listUsers(variables) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.users(variables);
        });
    }
    listIssueLabels(variables) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.issueLabels(variables);
        });
    }
    listTeams() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (variables = {}) {
            return this.client.teams(variables);
        });
    }
    listIssues() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (variables = {}) {
            return this.client.issues(variables);
        });
    }
    updateIssue(issueId, input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.updateIssue(issueId, input);
        });
    }
    createProject(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.createProject(input);
        });
    }
    listProjects() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (variables = {}) {
            return this.client.projects(variables);
        });
    }
    updateProject(projectId, input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.updateProject(projectId, input);
        });
    }
    createComment(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.createComment(input);
        });
    }
    createWebhook(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.createWebhook(input);
        });
    }
    listWebhooks() {
        return tslib_1.__awaiter(this, arguments, void 0, function* (variables = {}) {
            return this.client.webhooks(variables);
        });
    }
    deleteWebhook(webhookId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.deleteWebhook(webhookId);
        });
    }
    listTeamsTemplates(teamId, variables) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const team = yield this.client.team(teamId);
            return team.templates(variables);
        });
    }
    listProjectStatuses() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = `query {
      projectStatuses(first: 100) {
        nodes {
          id
          name
          type
        }
      }
    }`;
            const result = yield this.client.client.rawRequest(query);
            return result.data.projectStatuses.nodes;
        });
    }
    rawRequest(query, variables) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.client.client.rawRequest(query, variables);
        });
    }
}
exports.LinearClientWrapper = LinearClientWrapper;
function makeClient(auth) {
    return new LinearClientWrapper(auth.secret_text);
}
//# sourceMappingURL=client.js.map