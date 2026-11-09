"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMemberSpacesDropdown = buildMemberSpacesDropdown;
exports.buildBadgesDropdown = buildBadgesDropdown;
const tslib_1 = require("tslib");
const api_1 = require("./api");
function buildMemberSpacesDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth) {
            return {
                options: [],
                disabled: true,
                placeholder: 'Please authenticate first',
            };
        }
        const spaces = yield (0, api_1.listMemberSpaces)(auth);
        const options = spaces.map((space) => {
            return { label: space.name, value: space.id };
        });
        return {
            options: options,
        };
    });
}
function buildBadgesDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth) {
            return {
                options: [],
                disabled: true,
                placeholder: 'Please authenticate first',
            };
        }
        const badges = yield (0, api_1.listBadges)(auth);
        const options = badges.map((badge) => {
            return { label: badge.name, value: badge.id };
        });
        return {
            options: options,
        };
    });
}
//# sourceMappingURL=props.js.map