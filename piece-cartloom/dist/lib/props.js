"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildProductsDropdown = buildProductsDropdown;
const tslib_1 = require("tslib");
const api_1 = require("./api");
function buildProductsDropdown(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!auth) {
            return {
                options: [],
                disabled: true,
                placeholder: 'Please authenticate first',
            };
        }
        const response = yield (0, api_1.getProducts)(auth);
        const options = response.data.map((product) => {
            return { label: product.name, value: product.pid };
        });
        return {
            options: options,
        };
    });
}
//# sourceMappingURL=props.js.map