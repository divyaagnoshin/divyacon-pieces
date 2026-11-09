"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekdoneUsersDropdown = weekdoneUsersDropdown;
exports.weekdoneItemCommentsDropdown = weekdoneItemCommentsDropdown;
exports.weekdoneTeamsDropdown = weekdoneTeamsDropdown;
exports.weekdoneTypesDropdown = weekdoneTypesDropdown;
exports.weekdoneItemsDropdown = weekdoneItemsDropdown;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@agnocon/pieces-common");
const client_1 = require("./client");
function weekdoneUsersDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const response = yield (0, client_1.weekdoneApiCall)({
            auth,
            method: pieces_common_1.HttpMethod.GET,
            path: '/users',
        });
        const options = ((_a = response.users) !== null && _a !== void 0 ? _a : []).map((u) => ({
            label: u.name,
            value: u.id,
        }));
        return {
            disabled: false,
            options,
        };
    });
}
function weekdoneItemCommentsDropdown(auth, itemId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const response = yield (0, client_1.weekdoneApiCall)({
            auth,
            method: pieces_common_1.HttpMethod.GET,
            path: `/item/${itemId}/comments`,
        });
        const options = ((_a = response.comments) !== null && _a !== void 0 ? _a : []).map((c) => ({
            label: c.comment ? c.comment.slice(0, 80) : String(c.id),
            value: c.id,
        }));
        return {
            disabled: false,
            options,
        };
    });
}
function weekdoneTeamsDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const response = yield (0, client_1.weekdoneApiCall)({
            auth,
            method: pieces_common_1.HttpMethod.GET,
            path: '/teams',
        });
        const options = ((_a = response.teams) !== null && _a !== void 0 ? _a : []).map((t) => ({
            label: t.name,
            value: t.id,
        }));
        return {
            disabled: false,
            options,
        };
    });
}
function weekdoneTypesDropdown(auth, teamId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const response = yield (0, client_1.weekdoneApiCall)({
            auth,
            method: pieces_common_1.HttpMethod.GET,
            path: '/types',
        });
        const options = ((_a = response.types) !== null && _a !== void 0 ? _a : [])
            .filter((t) => {
            if (teamId === undefined) {
                return true;
            }
            return t.team_id === undefined || t.team_id === null || Number(t.team_id) === teamId;
        })
            .map((t) => ({
            label: t.name,
            value: t.id,
        }));
        return {
            disabled: false,
            options,
        };
    });
}
function weekdoneItemsDropdown(auth, params) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const response = yield (0, client_1.weekdoneApiCall)({
            auth,
            method: pieces_common_1.HttpMethod.GET,
            path: '/items',
            query: {
                user_id: params.userId,
                team_id: params.teamId,
                period: params.period,
            },
        });
        const options = ((_a = response.items) !== null && _a !== void 0 ? _a : [])
            .filter((i) => (params.typeId !== undefined ? i.type_id === params.typeId : true))
            .map((i) => ({
            label: i.description || String(i.id),
            value: i.id,
        }));
        return {
            disabled: false,
            options,
        };
    });
}
//# sourceMappingURL=dropdowns.js.map