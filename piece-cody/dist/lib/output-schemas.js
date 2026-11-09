"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findConversationOutputSchema = exports.findBotOutputSchema = exports.uploadFileOutputSchema = exports.sendMessageOutputSchema = exports.createDocumentFromTextOutputSchema = exports.createConversationOutputSchema = exports.listMessagesOutputSchema = exports.getMessageOutputSchema = exports.sendMessageAiOutputSchema = exports.deleteConversationOutputSchema = exports.listConversationsOutputSchema = exports.getConversationOutputSchema = exports.updateConversationOutputSchema = exports.createConversationAiOutputSchema = exports.uploadFileToKbOutputSchema = exports.deleteDocumentOutputSchema = exports.listDocumentsOutputSchema = exports.getDocumentOutputSchema = exports.createDocumentFromWebpageOutputSchema = exports.createTextDocumentOutputSchema = exports.renameFolderOutputSchema = exports.getFolderOutputSchema = exports.createFolderOutputSchema = exports.listFoldersOutputSchema = exports.listBotsOutputSchema = void 0;
const codyFolderFields = [
    { key: 'id', label: 'Folder ID' },
    { key: 'name', label: 'Name' },
    { key: 'created_at', label: 'Created At', format: 'datetime' },
];
const codyBotFields = [
    { key: 'id', label: 'Bot ID' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'model', label: 'Model' },
    { key: 'created_at', label: 'Created At', format: 'datetime' },
];
const codyConversationFields = [
    { key: 'id', label: 'Conversation ID' },
    { key: 'name', label: 'Name' },
    { key: 'bot_id', label: 'Bot ID' },
    { key: 'created_at', label: 'Created At', format: 'datetime' },
];
const codyMessageFields = [
    { key: 'id', label: 'Message ID' },
    { key: 'content', label: 'Content' },
    { key: 'conversation_id', label: 'Conversation ID' },
    { key: 'machine', label: 'Machine (Bot Reply)', format: 'boolean' },
    { key: 'failed_responding', label: 'Failed Responding', format: 'boolean' },
    { key: 'flagged', label: 'Flagged', format: 'boolean' },
    { key: 'created_at', label: 'Created At', format: 'datetime' },
];
const codyDocumentFields = [
    { key: 'id', label: 'Document ID' },
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
    { key: 'content_url', label: 'Content URL', format: 'url' },
    { key: 'folder_id', label: 'Folder ID' },
    { key: 'created_at', label: 'Created At', format: 'datetime' },
];
const codyPaginationFields = [
    { key: 'total', label: 'Total', format: 'number' },
    { key: 'count', label: 'Count', format: 'number' },
    { key: 'per_page', label: 'Per Page', format: 'number' },
    { key: 'current_page', label: 'Current Page', format: 'number' },
    { key: 'total_pages', label: 'Total Pages', format: 'number' },
];
const codyMetaField = {
    key: 'meta',
    label: 'Meta',
    children: [{ key: 'pagination', label: 'Pagination', children: codyPaginationFields }],
};
exports.listBotsOutputSchema = {
    fields: [
        { key: 'bots', label: 'Bots', labelKey: 'name', listItems: codyBotFields },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
exports.listFoldersOutputSchema = {
    fields: [
        { key: 'data', label: 'Folders', labelKey: 'name', listItems: codyFolderFields },
        codyMetaField,
    ],
};
exports.createFolderOutputSchema = {
    fields: [{ key: 'data', label: 'Folder', children: codyFolderFields }],
};
exports.getFolderOutputSchema = {
    fields: [{ key: 'data', label: 'Folder', children: codyFolderFields }],
};
exports.renameFolderOutputSchema = {
    fields: [{ key: 'data', label: 'Folder', children: codyFolderFields }],
};
exports.createTextDocumentOutputSchema = {
    fields: [{ key: 'data', label: 'Document', children: codyDocumentFields }],
};
exports.createDocumentFromWebpageOutputSchema = {
    fields: [{ key: 'data', label: 'Document', children: codyDocumentFields }],
};
exports.getDocumentOutputSchema = {
    fields: [{ key: 'data', label: 'Document', children: codyDocumentFields }],
};
exports.listDocumentsOutputSchema = {
    fields: [
        { key: 'data', label: 'Documents', labelKey: 'name', listItems: codyDocumentFields },
        codyMetaField,
    ],
};
exports.deleteDocumentOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'document_id', label: 'Document ID' },
    ],
};
exports.uploadFileToKbOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'message', label: 'Message' },
    ],
};
exports.createConversationAiOutputSchema = {
    fields: [{ key: 'data', label: 'Conversation', children: codyConversationFields }],
};
exports.updateConversationOutputSchema = {
    fields: [{ key: 'data', label: 'Conversation', children: codyConversationFields }],
};
exports.getConversationOutputSchema = {
    fields: [
        {
            key: 'data',
            label: 'Conversation',
            children: [
                ...codyConversationFields,
                {
                    key: 'document_ids',
                    label: 'Document IDs (Focus Mode)',
                    description: 'Present only when requested via the Includes parameter.',
                    children: [{ key: 'data', label: 'IDs' }],
                },
            ],
        },
    ],
};
exports.listConversationsOutputSchema = {
    fields: [
        {
            key: 'conversations',
            label: 'Conversations',
            labelKey: 'name',
            listItems: codyConversationFields,
        },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
exports.deleteConversationOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'conversation_id', label: 'Conversation ID' },
    ],
};
exports.sendMessageAiOutputSchema = {
    fields: [{ key: 'data', label: 'Message', children: codyMessageFields }],
};
exports.getMessageOutputSchema = {
    fields: [
        {
            key: 'data',
            label: 'Message',
            children: [
                ...codyMessageFields,
                {
                    key: 'sources',
                    label: 'Sources',
                    description: 'Present only when requested via the Includes parameter (value "sources").',
                    children: [{ key: 'data', label: 'Source Documents' }],
                },
                {
                    key: 'usage',
                    label: 'Usage',
                    description: 'Present only when requested via the Includes parameter (value "usage").',
                    children: [
                        { key: 'tokens', label: 'Tokens', format: 'number' },
                        { key: 'credits', label: 'Credits', format: 'number' },
                    ],
                },
            ],
        },
    ],
};
exports.listMessagesOutputSchema = {
    fields: [
        { key: 'data', label: 'Messages', listItems: codyMessageFields },
        codyMetaField,
    ],
};
exports.createConversationOutputSchema = {
    fields: [{ key: 'data', label: 'Conversation', children: codyConversationFields }],
};
exports.createDocumentFromTextOutputSchema = {
    fields: [{ key: 'data', label: 'Document', children: codyDocumentFields }],
};
exports.sendMessageOutputSchema = {
    fields: [{ key: 'data', label: 'Message', children: codyMessageFields }],
};
exports.uploadFileOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'message', label: 'Message' },
    ],
};
exports.findBotOutputSchema = {
    fields: [
        { key: 'found', label: 'Found', format: 'boolean' },
        { key: 'bots', label: 'Bots', labelKey: 'name', listItems: codyBotFields },
    ],
};
exports.findConversationOutputSchema = {
    fields: [
        { key: 'found', label: 'Found', format: 'boolean' },
        {
            key: 'conversations',
            label: 'Conversations',
            labelKey: 'name',
            listItems: codyConversationFields,
        },
    ],
};
//# sourceMappingURL=output-schemas.js.map