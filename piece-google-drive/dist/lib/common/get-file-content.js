"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFileFromDrive = downloadFileFromDrive;
const tslib_1 = require("tslib");
const mime_types_1 = require("mime-types");
const auth_1 = require("../auth");
function getMimeType(auth, fileId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const accessToken = yield (0, auth_1.getAccessToken)(auth);
        const mimeType = (yield fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=mimeType&supportsAllDrives=true`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }).then((res) => res.json()))['mimeType'];
        return mimeType;
    });
}
const googledlCall = (url, auth, fileId, files, fileName) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const mimeType = yield getMimeType(auth, fileId);
    const accessToken = yield (0, auth_1.getAccessToken)(auth);
    const download = yield fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => response.ok ? response.blob() : Promise.reject(response))
        .catch((error) => {
        var _a;
        return Promise.reject(new Error(`Error when download file:\n\tDownload file response: ${(_a = error.message) !== null && _a !== void 0 ? _a : error}`));
    });
    const extensionResult = (0, mime_types_1.extension)(mimeType);
    const fileExtension = extensionResult ? '.' + extensionResult : '';
    const srcFileName = fileName !== null && fileName !== void 0 ? fileName : fileId + fileExtension;
    return files.write({
        fileName: srcFileName,
        data: Buffer.from(yield download.arrayBuffer()),
    });
});
function downloadFileFromDrive(auth, files, fileId, fileName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let mimeType = yield getMimeType(auth, fileId);
        // the google drive API doesn't allowed downloading google documents but we can export them to office formats
        if ([
            'application/vnd.google-apps.document',
            'application/vnd.google-apps.spreadsheet',
            'application/vnd.google-apps.presentation',
        ].includes(mimeType)) {
            switch (mimeType) {
                case 'application/vnd.google-apps.document':
                    mimeType =
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                    break;
                case 'application/vnd.google-apps.spreadsheet':
                    mimeType =
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                    break;
                case 'application/vnd.google-apps.presentation':
                    mimeType =
                        'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                    break;
            }
            return yield googledlCall(`https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=${mimeType}&supportsAllDrives=true`, auth, fileId, files, fileName);
        }
        else {
            return yield googledlCall(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&supportsAllDrives=true`, auth, fileId, files, fileName);
        }
    });
}
//# sourceMappingURL=get-file-content.js.map