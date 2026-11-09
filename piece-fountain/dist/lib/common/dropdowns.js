"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunnelsDropdown = getFunnelsDropdown;
exports.getLocationsDropdown = getLocationsDropdown;
exports.getUsersDropdown = getUsersDropdown;
exports.getStagesForFunnelDropdown = getStagesForFunnelDropdown;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
const auth_1 = require("./auth");
function getFunnelsDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: (0, auth_1.getApiUrl)(auth, '/funnels'),
                headers: (0, auth_1.getAuthHeaders)(auth),
                queryParams: { per_page: '100' },
            });
            const funnels = ((_a = response.body) === null || _a === void 0 ? void 0 : _a.funnels) || [];
            return funnels.map((funnel) => ({
                label: funnel.title || `Opening ${funnel.id}`,
                value: funnel.id,
            }));
        }
        catch (error) {
            return [];
        }
    });
}
function getLocationsDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: (0, auth_1.getApiUrl)(auth, '/funnels'),
                headers: (0, auth_1.getAuthHeaders)(auth),
                queryParams: { per_page: '100' },
            });
            const funnels = ((_a = response.body) === null || _a === void 0 ? void 0 : _a.funnels) || [];
            const locations = new Map();
            funnels.forEach((funnel) => {
                if (funnel.location && funnel.location.id && !locations.has(funnel.location.id)) {
                    locations.set(funnel.location.id, {
                        label: funnel.location.name || `Location ${funnel.location.id}`,
                        value: funnel.location.id,
                    });
                }
            });
            return Array.from(locations.values());
        }
        catch (error) {
            return [];
        }
    });
}
function getUsersDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: (0, auth_1.getApiUrl)(auth, '/funnels'),
                headers: (0, auth_1.getAuthHeaders)(auth),
                queryParams: { per_page: '100' },
            });
            const funnels = ((_a = response.body) === null || _a === void 0 ? void 0 : _a.funnels) || [];
            const users = new Map();
            funnels.forEach((funnel) => {
                if (funnel.owner && funnel.owner.id && !users.has(funnel.owner.id)) {
                    users.set(funnel.owner.id, {
                        label: funnel.owner.name || funnel.owner.email || `User ${funnel.owner.id}`,
                        value: funnel.owner.id,
                    });
                }
            });
            return Array.from(users.values());
        }
        catch (error) {
            return [];
        }
    });
}
function getStagesForFunnelDropdown(auth, funnelId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        if (!funnelId) {
            return [];
        }
        try {
            const response = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: (0, auth_1.getApiUrl)(auth, `/funnels/${funnelId}/stages`),
                headers: (0, auth_1.getAuthHeaders)(auth),
            });
            const stages = ((_a = response.body) === null || _a === void 0 ? void 0 : _a.stages) || [];
            return stages.map((stage) => ({
                label: stage.title || `Stage ${stage.id}`,
                value: stage.id,
            }));
        }
        catch (error) {
            return [];
        }
    });
}
//# sourceMappingURL=dropdowns.js.map