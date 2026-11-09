"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCampaignDropdown = buildCampaignDropdown;
exports.buildTemplateDropdown = buildTemplateDropdown;
exports.buildUserDropdown = buildUserDropdown;
const tslib_1 = require("tslib");
const api_1 = require("./api");
function buildCampaignDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth) {
            return {
                options: [],
                disabled: true,
                placeholder: 'Please authenticate first',
            };
        }
        const response = yield (0, api_1.getCampaigns)(auth);
        const options = response.data.map((campaign) => {
            return { label: campaign.name, value: campaign.uuid };
        });
        return {
            options: options,
        };
    });
}
function buildTemplateDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth) {
            return {
                options: [],
                disabled: true,
                placeholder: 'Please authenticate first',
            };
        }
        const response = yield (0, api_1.getTemplates)(auth);
        const options = response.data.map((template) => {
            return { label: template.name, value: template.id };
        });
        return {
            options: options,
        };
    });
}
function buildUserDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth) {
            return {
                options: [],
                disabled: true,
                placeholder: 'Please authenticate first',
            };
        }
        const response = yield (0, api_1.getUsers)(auth);
        const options = response.data.map((user) => {
            return { label: user.name, value: user.id };
        });
        return {
            options: options,
        };
    });
}
//# sourceMappingURL=props.js.map