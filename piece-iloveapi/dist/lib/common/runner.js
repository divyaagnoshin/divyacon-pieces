"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAndStoreResult = runAndStoreResult;
const tslib_1 = require("tslib");
const client_1 = require("./client");
function runAndStoreResult(_a) {
    return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, files, tool, uploads, options, output_filename, packaged_filename, perFileOverrides, extraUploads, }) {
        const result = yield client_1.iLoveApi.runTask({
            publicKey: auth,
            tool,
            uploads,
            options,
            output_filename,
            packaged_filename,
            perFileOverrides,
            extraUploads,
        });
        const storedFile = yield files.write({
            fileName: result.downloadFilename,
            data: result.buffer,
        });
        return {
            output_file: storedFile,
            download_filename: result.downloadFilename,
            output_filenumber: result.process.output_filenumber,
            output_filesize: result.process.output_filesize,
            output_extensions: result.process.output_extensions,
            status: result.process.status,
            process: result.process,
        };
    });
}
//# sourceMappingURL=runner.js.map