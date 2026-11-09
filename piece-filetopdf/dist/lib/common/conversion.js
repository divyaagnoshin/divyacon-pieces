"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyOptions = stringifyOptions;
exports.buildConversionOutput = buildConversionOutput;
const tslib_1 = require("tslib");
/**
 * Coerce option values to the strings the API/Gotenberg expects. The backend's
 * form handling chokes on raw booleans/numbers, so booleans become "true"/"false"
 * and numbers become their string form. Empty/null/undefined values are dropped.
 * (`false` and `0` are kept — only empty strings and null/undefined are removed.)
 */
function stringifyOptions(options) {
    const out = {};
    for (const [key, value] of Object.entries(options || {})) {
        if (value === undefined || value === null || value === '')
            continue;
        out[key] = String(value);
    }
    return out;
}
/**
 * Decode a base64 PDF envelope and write it as a real Activepieces file so
 * downstream steps (Google Drive, Dropbox, Email…) can consume it. Returns the
 * file reference plus friendly metadata. Mirrors the Zapier/Pipedream output shape.
 */
function buildConversionOutput(files, envelope) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const data = envelope && envelope.data;
        if (!data || !data.pdf) {
            throw new Error('The FileToPDF API response did not contain a PDF.');
        }
        const filename = data.filename || 'converted.pdf';
        const buffer = Buffer.from(data.pdf, 'base64');
        const file = yield files.write({ fileName: filename, data: buffer });
        return {
            file,
            filename,
            pages: data.pages,
            fileSize: data.size_bytes,
            creditsUsed: data.credits_used,
            creditsRemaining: data.credits_remaining,
        };
    });
}
//# sourceMappingURL=conversion.js.map