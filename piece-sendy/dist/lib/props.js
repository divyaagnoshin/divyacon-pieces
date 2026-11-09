"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildBrandDropdown = buildBrandDropdown;
exports.buildListDropdown = buildListDropdown;
const tslib_1 = require("tslib");
const api_1 = require("./api");
function buildBrandDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth) {
            return {
                options: [],
                disabled: true,
                placeholder: 'Please authenticate first',
            };
        }
        const response = yield (0, api_1.getBrands)(auth);
        const options = response.data.map((brand) => {
            return { label: brand.name, value: brand.id };
        });
        return {
            options: options,
        };
    });
}
function buildListDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth) {
            return {
                options: [],
                disabled: true,
                placeholder: 'Please authenticate first',
            };
        }
        const response = yield (0, api_1.getLists)(auth);
        const options = response.data.map((list) => {
            return { label: list.name, value: list.id };
        });
        return {
            options: options,
        };
    });
}
//# sourceMappingURL=props.js.map