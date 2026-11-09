"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPineconeClient = createPineconeClient;
exports.validateApiKey = validateApiKey;
exports.createPineconeClientFromAuth = createPineconeClientFromAuth;
const pinecone_1 = require("@pinecone-database/pinecone");
function createPineconeClient(authConfig) {
    if (!authConfig.apiKey) {
        throw new Error('Pinecone API key is required. Please provide a valid API key from your Pinecone console.');
    }
    const config = {
        apiKey: authConfig.apiKey,
    };
    return new pinecone_1.Pinecone(config);
}
function validateApiKey(apiKey) {
    if (!apiKey || typeof apiKey !== 'string') {
        throw new Error('Invalid API key: API key must be a non-empty string');
    }
    if (apiKey.length < 10) {
        throw new Error('Invalid API key: API key appears to be too short');
    }
}
function createPineconeClientFromAuth(auth) {
    if (typeof auth === 'string') {
        return createPineconeClient({ apiKey: auth });
    }
    const actualAuth = auth.props;
    if (!actualAuth || !actualAuth.apiKey) {
        throw new Error('Invalid authentication: API key is required');
    }
    return createPineconeClient({
        apiKey: actualAuth.apiKey,
    });
}
//# sourceMappingURL=pinecone-client.js.map