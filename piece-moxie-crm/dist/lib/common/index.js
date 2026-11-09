"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeClient = makeClient;
exports.reformatDate = reformatDate;
const tslib_1 = require("tslib");
const client_1 = require("./client");
function makeClient(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const client = new client_1.MoxieCRMClient(auth.props.baseUrl, auth.props.apiKey);
        return client;
    });
}
function reformatDate(s) {
    if (!s)
        return undefined;
    return s.split('T', 2)[0];
}
//# sourceMappingURL=index.js.map