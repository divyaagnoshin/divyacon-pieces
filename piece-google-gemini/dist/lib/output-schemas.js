"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToSpeechActionOutputSchema = exports.generateContentWithFilesearchActionOutputSchema = exports.generateContentFromImageActionOutputSchema = exports.chatGeminiActionOutputSchema = exports.generateContentActionOutputSchema = void 0;
exports.generateContentActionOutputSchema = {
    fields: [
        {
            key: 'text',
            label: 'Generated Content',
            value: '',
        },
    ],
};
exports.chatGeminiActionOutputSchema = {
    fields: [
        {
            key: 'response',
            label: 'Response',
            value: 'response',
        },
        {
            key: 'history',
            label: 'Conversation History',
            value: 'history',
            listItems: [
                {
                    key: 'role',
                    label: 'Role',
                    value: 'role',
                },
                {
                    key: 'text',
                    label: 'Text',
                    value: 'parts[0].text',
                },
            ],
        },
    ],
};
exports.generateContentFromImageActionOutputSchema = {
    fields: [
        {
            key: 'text',
            label: 'Generated Text',
            value: 'text',
        },
        {
            key: 'modelVersion',
            label: 'Model Version',
            value: 'raw.modelVersion',
        },
        {
            key: 'finishReason',
            label: 'Finish Reason',
            value: 'raw.candidates[0].finishReason',
        },
        {
            key: 'candidates',
            label: 'Candidates',
            value: 'raw.candidates',
            listItems: [
                {
                    key: 'text',
                    label: 'Text',
                    value: 'content.parts[0].text',
                },
                {
                    key: 'role',
                    label: 'Role',
                    value: 'content.role',
                },
                {
                    key: 'finishReason',
                    label: 'Finish Reason',
                    value: 'finishReason',
                },
            ],
        },
        {
            key: 'usageMetadata',
            label: 'Usage Metadata',
            value: 'raw.usageMetadata',
            children: [
                {
                    key: 'promptTokenCount',
                    label: 'Prompt Tokens',
                    value: 'promptTokenCount',
                    format: 'number',
                },
                {
                    key: 'candidatesTokenCount',
                    label: 'Candidates Tokens',
                    value: 'candidatesTokenCount',
                    format: 'number',
                },
                {
                    key: 'totalTokenCount',
                    label: 'Total Tokens',
                    value: 'totalTokenCount',
                    format: 'number',
                },
                {
                    key: 'serviceTier',
                    label: 'Service Tier',
                    value: 'serviceTier',
                },
            ],
        },
    ],
};
exports.generateContentWithFilesearchActionOutputSchema = {
    fields: [
        {
            key: 'text',
            label: 'Generated Content',
            value: '',
        },
    ],
};
exports.textToSpeechActionOutputSchema = {
    fields: [
        {
            key: 'audioFile',
            label: 'Audio File URL',
            value: '',
            format: 'url',
        },
    ],
};
//# sourceMappingURL=output-schemas.js.map