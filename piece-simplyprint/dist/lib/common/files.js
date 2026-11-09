"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplyprintFiles = void 0;
const tslib_1 = require("tslib");
const auth_1 = require("../auth");
const base_url_1 = require("./base-url");
const chunked_upload_1 = require("./chunked-upload");
// Native fetch — NOT pieces-common's axios-based httpClient. The httpClient
// does not serialize Web-standard FormData/Blob bodies correctly (axios
// JSON-stringifies them to `{}`), so the previous implementation produced
// empty multipart requests that SimplyPrint rejected with "Validation
// failed … The File is required". Native fetch sets the correct
// Content-Type boundary and streams the body without copying.
function buildSendPart(url, headers) {
    return (part) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const form = new FormData();
        form.append('file', new Blob([part.chunk]), part.filename);
        if (part.kind === 'first') {
            form.append('totalSize', String(part.totalSize));
        }
        else if (part.kind === 'continue') {
            form.append('continueToken', part.continueToken);
        }
        const res = yield fetch(url, { method: 'POST', headers, body: form });
        const text = yield res.text();
        let body;
        try {
            body = text.length > 0 ? JSON.parse(text) : {};
        }
        catch (_a) {
            throw new Error(`SimplyPrint upload returned non-JSON (HTTP ${res.status}): ${text.slice(0, 500)}`);
        }
        if (!res.ok) {
            throw new Error(`SimplyPrint upload failed (HTTP ${res.status}): ${JSON.stringify(body).slice(0, 500)}`);
        }
        const continueToken = body['continueToken'];
        if (typeof continueToken === 'string' && continueToken.length > 0) {
            return { kind: 'continue', continueToken };
        }
        const parsed = chunked_upload_1.simplyprintChunkedUpload.extractFilesApiId(body);
        if (parsed === null) {
            throw new Error(`SimplyPrint upload returned no file id and no continueToken (HTTP ${res.status}): ${JSON.stringify(body).slice(0, 500)}`);
        }
        return { kind: 'final', file: parsed, raw: body };
    });
}
function uploadUserFile(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!input.file)
            throw new Error('No file provided.');
        const { companyId } = yield auth_1.simplyprintSession.resolveCall(input.auth);
        const headers = auth_1.simplyprintSession.getAuthHeaders(input.auth);
        const url = `${base_url_1.BASE_URL.files}/${companyId}/files/Upload`;
        return chunked_upload_1.simplyprintChunkedUpload.driveChunkedUpload({
            filename: input.file.filename,
            data: input.file.data,
            sendPart: buildSendPart(url, headers),
        });
    });
}
// Streams the source HTTPS URL into the chunked upload directly — peak RAM
// stays at ~2 * chunkSize regardless of source size. Requires the source URL
// to return Content-Length on the GET (S3 pre-signed URLs / Dropbox raw
// links / etc.) — SimplyPrint's chunked protocol needs `totalSize` declared
// upfront on the first part.
function uploadUserFileFromUrl(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!input.url)
            throw new Error('No URL provided.');
        if (!input.filename)
            throw new Error('No filename provided.');
        // SSRF guard: reject non-HTTPS schemes so a flow can't trick the worker
        // into fetching cloud-instance-metadata (http://169.254.169.254/...),
        // internal-network endpoints, file://, or data:// URIs and forwarding the
        // body to SimplyPrint. https-only is a coarse but effective filter for the
        // shared-AP-instance threat model.
        let parsedUrl;
        try {
            parsedUrl = new URL(input.url);
        }
        catch (_a) {
            throw new Error(`Invalid URL: "${input.url}".`);
        }
        if (parsedUrl.protocol !== 'https:') {
            throw new Error(`URL must use the https:// scheme (got "${parsedUrl.protocol}"). Other schemes are blocked to prevent fetching internal or local resources.`);
        }
        // `redirect: 'error'` so an HTTPS URL that 301s to http://169.254.169.254/
        // (or any other internal endpoint) can't bypass the scheme guard above —
        // fetch follows redirects by default without re-validating the destination.
        const fetchRes = yield fetch(input.url, { redirect: 'error' });
        if (!fetchRes.ok) {
            const peek = yield fetchRes.text().catch(() => '<no body>');
            throw new Error(`Could not fetch file URL (HTTP ${fetchRes.status} ${fetchRes.statusText}): ${peek.slice(0, 300)}`);
        }
        const contentLengthHeader = fetchRes.headers.get('content-length');
        if (!contentLengthHeader) {
            throw new Error(`File URL did not return a Content-Length header — SimplyPrint's chunked upload needs the total size upfront. Use a host that sends Content-Length (S3 pre-signed URLs, Dropbox raw links, etc.), or use the "File" input instead (buffered).`);
        }
        const totalSize = parseInt(contentLengthHeader, 10);
        if (!Number.isFinite(totalSize) || totalSize <= 0) {
            throw new Error(`Invalid Content-Length "${contentLengthHeader}" — expected a positive integer.`);
        }
        if (!fetchRes.body) {
            throw new Error('Fetch returned no body stream — cannot stream upload.');
        }
        const { companyId } = yield auth_1.simplyprintSession.resolveCall(input.auth);
        const headers = auth_1.simplyprintSession.getAuthHeaders(input.auth);
        const url = `${base_url_1.BASE_URL.files}/${companyId}/files/Upload`;
        return chunked_upload_1.simplyprintChunkedUpload.driveStreamedUpload({
            filename: input.filename,
            totalSize,
            source: fetchRes.body,
            sendPart: buildSendPart(url, headers),
        });
    });
}
// Returns null for signed URLs / opaque endpoints where the path isn't a
// meaningful filename (caller should require the user to supply one).
function filenameFromUrl(rawUrl) {
    try {
        const u = new URL(rawUrl);
        const last = u.pathname.split('/').filter((s) => s.length > 0).pop();
        if (last && last.includes('.')) {
            return decodeURIComponent(last);
        }
    }
    catch (_a) {
        // fall through
    }
    return null;
}
exports.simplyprintFiles = {
    uploadUserFile,
    uploadUserFileFromUrl,
    filenameFromUrl,
};
//# sourceMappingURL=files.js.map