"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_EXPORT_DIMENSION = exports.MIN_EXPORT_DIMENSION = exports.MAX_DESIGN_TITLE_LENGTH = exports.MAX_ASSET_NAME_LENGTH = exports.MAX_VIDEO_SIZE_MB = exports.MAX_IMAGE_SIZE_MB = exports.MP4_QUALITIES = exports.PDF_SIZES = exports.EXPORT_FORMATS = exports.SUPPORTED_IMPORT_FORMATS = exports.SUPPORTED_VIDEO_FORMATS = exports.SUPPORTED_IMAGE_FORMATS = exports.canvaCommon = void 0;
exports.fetchUserDesigns = fetchUserDesigns;
exports.fetchUserAssets = fetchUserAssets;
exports.fetchUserFolders = fetchUserFolders;
const tslib_1 = require("tslib");
exports.canvaCommon = {
    baseUrl: 'https://api.canva.com/rest/v1',
};
// File format validation
exports.SUPPORTED_IMAGE_FORMATS = ['jpg', 'jpeg', 'png', 'heic', 'gif', 'tiff', 'webp'];
exports.SUPPORTED_VIDEO_FORMATS = ['m4v', 'mkv', 'mp4', 'mpeg', 'mov', 'webm'];
// Supported import file formats with MIME types
exports.SUPPORTED_IMPORT_FORMATS = [
    { ext: 'ai', mime: 'application/illustrator', name: 'Adobe Illustrator' },
    { ext: 'psd', mime: 'image/vnd.adobe.photoshop', name: 'Adobe Photoshop' },
    { ext: 'key', mime: 'application/vnd.apple.keynote', name: 'Apple Keynote' },
    { ext: 'numbers', mime: 'application/vnd.apple.numbers', name: 'Apple Numbers' },
    { ext: 'pages', mime: 'application/vnd.apple.pages', name: 'Apple Pages' },
    { ext: 'xls', mime: 'application/vnd.ms-excel', name: 'Microsoft Excel (pre 2007)' },
    { ext: 'xlsx', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', name: 'Microsoft Excel' },
    { ext: 'ppt', mime: 'application/vnd.ms-powerpoint', name: 'Microsoft PowerPoint (pre 2007)' },
    { ext: 'pptx', mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', name: 'Microsoft PowerPoint' },
    { ext: 'doc', mime: 'application/msword', name: 'Microsoft Word (pre 2007)' },
    { ext: 'docx', mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', name: 'Microsoft Word' },
    { ext: 'odg', mime: 'application/vnd.oasis.opendocument.graphics', name: 'OpenOffice Draw' },
    { ext: 'odp', mime: 'application/vnd.oasis.opendocument.presentation', name: 'OpenOffice Presentation' },
    { ext: 'ods', mime: 'application/vnd.oasis.opendocument.spreadsheet', name: 'OpenOffice Sheets' },
    { ext: 'odt', mime: 'application/vnd.oasis.opendocument.text', name: 'OpenOffice Text' },
    { ext: 'pdf', mime: 'application/pdf', name: 'PDF' },
];
// Export format constants
exports.EXPORT_FORMATS = [
    { value: 'pdf', label: 'PDF' },
    { value: 'jpg', label: 'JPEG' },
    { value: 'png', label: 'PNG' },
    { value: 'gif', label: 'GIF' },
    { value: 'pptx', label: 'PowerPoint (PPTX)' },
    { value: 'mp4', label: 'MP4 Video' },
];
exports.PDF_SIZES = [
    { value: 'a4', label: 'A4' },
    { value: 'a3', label: 'A3' },
    { value: 'letter', label: 'Letter' },
    { value: 'legal', label: 'Legal' },
];
exports.MP4_QUALITIES = [
    { value: 'horizontal_480p', label: 'Horizontal 480p' },
    { value: 'horizontal_720p', label: 'Horizontal 720p' },
    { value: 'horizontal_1080p', label: 'Horizontal 1080p' },
    { value: 'horizontal_4k', label: 'Horizontal 4K' },
    { value: 'vertical_480p', label: 'Vertical 480p' },
    { value: 'vertical_720p', label: 'Vertical 720p' },
    { value: 'vertical_1080p', label: 'Vertical 1080p' },
    { value: 'vertical_4k', label: 'Vertical 4K' },
];
// File size limits
exports.MAX_IMAGE_SIZE_MB = 50;
exports.MAX_VIDEO_SIZE_MB = 500;
exports.MAX_ASSET_NAME_LENGTH = 50;
exports.MAX_DESIGN_TITLE_LENGTH = 50;
// Export dimension limits
exports.MIN_EXPORT_DIMENSION = 40;
exports.MAX_EXPORT_DIMENSION = 25000;
// Dynamic field helpers
function fetchUserDesigns(auth, query) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const params = new URLSearchParams();
            if (query && query.trim()) {
                params.append('query', query.trim());
            }
            params.append('sort_by', 'modified_descending');
            const response = yield fetch(`${exports.canvaCommon.baseUrl}/designs?${params.toString()}`, {
                headers: {
                    'Authorization': `Bearer ${auth.access_token}`,
                },
            });
            if (!response.ok)
                return [];
            const data = yield response.json();
            return (data.items || []).map((design) => ({
                label: design.title || `Design ${design.id}`,
                value: design.id,
            }));
        }
        catch (error) {
            console.error('Failed to fetch designs:', error);
            return [];
        }
    });
}
function fetchUserAssets(auth, assetType) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${exports.canvaCommon.baseUrl}/folders/root/items?item_types=image`, {
                headers: {
                    'Authorization': `Bearer ${auth.access_token}`,
                },
            });
            if (!response.ok)
                return [];
            const data = yield response.json();
            return (data.items || [])
                .filter((item) => { var _a; return item.type === 'image' && (!assetType || ((_a = item.image) === null || _a === void 0 ? void 0 : _a.type) === assetType); })
                .map((item) => {
                var _a, _b, _c;
                return ({
                    label: ((_a = item.image) === null || _a === void 0 ? void 0 : _a.name) || `Asset ${(_b = item.image) === null || _b === void 0 ? void 0 : _b.id}`,
                    value: ((_c = item.image) === null || _c === void 0 ? void 0 : _c.id) || '',
                });
            })
                .filter((item) => item.value);
        }
        catch (error) {
            console.error('Failed to fetch assets:', error);
            return [];
        }
    });
}
function fetchUserFolders(auth) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const folders = [{ label: 'Root (Top Level)', value: 'root' }];
            const response = yield fetch(`${exports.canvaCommon.baseUrl}/folders/root/items?item_types=folder`, {
                headers: {
                    'Authorization': `Bearer ${auth.access_token}`,
                },
            });
            if (!response.ok)
                return folders;
            const data = yield response.json();
            const subfolders = (data.items || [])
                .filter((item) => item.type === 'folder')
                .map((item) => {
                var _a, _b, _c;
                return ({
                    label: ((_a = item.folder) === null || _a === void 0 ? void 0 : _a.name) || `Folder ${(_b = item.folder) === null || _b === void 0 ? void 0 : _b.id}`,
                    value: ((_c = item.folder) === null || _c === void 0 ? void 0 : _c.id) || '',
                });
            })
                .filter((item) => item.value);
            return [...folders, ...subfolders];
        }
        catch (error) {
            console.error('Failed to fetch folders:', error);
            return [{ label: 'Root (Top Level)', value: 'root' }];
        }
    });
}
//# sourceMappingURL=index.js.map