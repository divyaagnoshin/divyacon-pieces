"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssemblyAIClient = exports.baseUrl = void 0;
const tslib_1 = require("tslib");
const assemblyai_1 = require("assemblyai");
const package_json_1 = tslib_1.__importDefault(require("../../package.json"));
exports.baseUrl = 'https://api.assemblyai.com';
// Proxyman proxy
// export const baseUrl = 'http://localhost:10000';
const getAssemblyAIClient = (context) => {
    if (!context.auth)
        throw new Error('The AssemblyAI API key is required.');
    return new assemblyai_1.AssemblyAI({
        apiKey: context.auth.secret_text,
        userAgent: {
            integration: {
                name: 'Activepieces',
                version: package_json_1.default.version,
            },
        },
        baseUrl: exports.baseUrl,
    });
};
exports.getAssemblyAIClient = getAssemblyAIClient;
//# sourceMappingURL=client.js.map