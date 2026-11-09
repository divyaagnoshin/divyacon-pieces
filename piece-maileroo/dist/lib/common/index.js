"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEmailObjects = toEmailObjects;
exports.buildAttachmentList = buildAttachmentList;
const pieces_framework_1 = require("@agnocon/pieces-framework");
function toEmailObjects(addresses) {
    return addresses
        .filter((addr) => typeof addr === 'string')
        .map((address) => ({ address }));
}
function buildAttachmentList(attachments) {
    return attachments
        .filter((item) => typeof item === 'object' && !(0, pieces_framework_1.isNil)(item) && 'file' in item)
        .map(({ file }) => ({
        file_name: file.filename,
        content: file.base64,
    }));
}
//# sourceMappingURL=index.js.map