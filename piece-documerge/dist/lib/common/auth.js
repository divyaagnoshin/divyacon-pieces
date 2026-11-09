"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documergeAuth = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@agnocon/pieces-framework");
const client_1 = require("./client");
exports.documergeAuth = pieces_framework_1.PieceAuth.SecretText({
    displayName: 'API Key',
    description: 'Get your API token from your dashboard by clicking API Tokens in the top right corner of your profile.',
    required: true,
    validate: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
        var _b;
        if (!auth || typeof auth !== 'string') {
            return {
                valid: false,
                error: 'Please provide a valid API key.',
            };
        }
        const client = new client_1.DocuMergeClient(auth);
        try {
            yield client.get('/api/documents');
            return {
                valid: true,
            };
        }
        catch (error) {
            const status = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status;
            const message = (error === null || error === void 0 ? void 0 : error.message) || 'Unknown error occurred';
            if (status === 401 || status === 403) {
                return {
                    valid: false,
                    error: 'Invalid API key. Please verify the key in your DocuMerge dashboard and try again.',
                };
            }
            return {
                valid: false,
                error: `Authentication failed: ${message}`,
            };
        }
    }),
});
//# sourceMappingURL=auth.js.map