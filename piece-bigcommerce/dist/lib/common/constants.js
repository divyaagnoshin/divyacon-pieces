"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_BASE_URL = void 0;
exports.handleDropdownError = handleDropdownError;
const GET_BASE_URL = (storeHash) => `https://api.bigcommerce.com/stores/${storeHash}`;
exports.GET_BASE_URL = GET_BASE_URL;
function handleDropdownError(msg) {
    return {
        disabled: true,
        options: [],
        placeholder: msg,
    };
}
//# sourceMappingURL=constants.js.map