"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedRecordTriggerOutputSchema = exports.newRecordTriggerOutputSchema = exports.findBaseActionOutputSchema = exports.getBaseSchemaActionOutputSchema = exports.createBaseActionOutputSchema = exports.createTableActionOutputSchema = exports.findTableActionOutputSchema = exports.findTableByIdActionOutputSchema = exports.findRecordActionOutputSchema = exports.addCommentToRecordActionOutputSchema = exports.deleteRecordActionOutputSchema = exports.uploadFileToColumnActionOutputSchema = exports.findRecordByIdActionOutputSchema = exports.cleanRecordActionOutputSchema = exports.updateRecordActionOutputSchema = exports.createRecordActionOutputSchema = exports.getCurrentUserActionOutputSchema = exports.listRecordCommentsActionOutputSchema = exports.deleteRecordsBatchActionOutputSchema = exports.upsertRecordsActionOutputSchema = exports.searchRecordsActionOutputSchema = exports.listRecordsActionOutputSchema = exports.listBasesActionOutputSchema = exports.updateTableActionOutputSchema = exports.updateFieldActionOutputSchema = exports.createFieldActionOutputSchema = exports.addCommentToRecordAiActionOutputSchema = exports.getBaseSchemaAiActionOutputSchema = exports.createBaseAiActionOutputSchema = exports.createTableAiActionOutputSchema = exports.uploadAttachmentAiActionOutputSchema = exports.deleteRecordAiActionOutputSchema = exports.updateRecordAiActionOutputSchema = exports.getRecordAiActionOutputSchema = exports.createRecordAiActionOutputSchema = void 0;
const airtableRecordFields = [
    { key: 'id', label: 'Record ID' },
    { key: 'createdTime', label: 'Created Time', format: 'datetime' },
    { key: 'fields', label: 'Fields', dynamicKey: true },
];
const airtableRawFieldDefinitionFields = [
    { key: 'id', label: 'Field ID' },
    { key: 'name', label: 'Field Name' },
    { key: 'type', label: 'Field Type' },
    { key: 'description', label: 'Description' },
    { key: 'options', label: 'Options' },
];
const airtableRawTableFields = [
    { key: 'id', label: 'Table ID' },
    { key: 'name', label: 'Table Name' },
    { key: 'description', label: 'Description' },
    { key: 'primaryFieldId', label: 'Primary Field ID' },
    { key: 'fields', label: 'Fields', listItems: airtableRawFieldDefinitionFields },
    {
        key: 'views',
        label: 'Views',
        listItems: [
            { key: 'id', label: 'View ID' },
            { key: 'name', label: 'View Name' },
            { key: 'type', label: 'View Type' },
        ],
    },
];
const airtableStrippedFieldDefinitionFields = [
    { key: 'id', label: 'Field ID' },
    { key: 'name', label: 'Field Name' },
    { key: 'type', label: 'Field Type' },
    { key: 'description', label: 'Description' },
];
const airtableStrippedTableFields = [
    { key: 'id', label: 'Table ID' },
    { key: 'name', label: 'Table Name' },
    { key: 'description', label: 'Description' },
    { key: 'primaryFieldId', label: 'Primary Field ID' },
    { key: 'fields', label: 'Fields', listItems: airtableStrippedFieldDefinitionFields },
];
const airtableDeletedRecordFields = [
    { key: 'id', label: 'Deleted Record ID' },
    { key: 'deleted', label: 'Deleted', format: 'boolean' },
];
const airtableBaseFields = [
    { key: 'id', label: 'Base ID' },
    { key: 'name', label: 'Base Name' },
    { key: 'permissionLevel', label: 'Permission Level' },
];
const airtableCommentFields = [
    { key: 'id', label: 'Comment ID' },
    { key: 'createdTime', label: 'Created Time', format: 'datetime' },
    { key: 'lastUpdatedTime', label: 'Last Updated Time', format: 'datetime' },
    { key: 'text', label: 'Comment Text' },
    { key: 'parentCommentId', label: 'Parent Comment ID' },
    {
        key: 'author',
        label: 'Author',
        children: [
            { key: 'id', label: 'User ID' },
            { key: 'email', label: 'Email', format: 'email' },
            { key: 'name', label: 'Name' },
        ],
    },
    {
        key: 'mentioned',
        label: 'Mentioned Users',
        dynamicKey: true,
        children: [
            { key: 'id', label: 'ID' },
            { key: 'type', label: 'Type' },
            { key: 'displayName', label: 'Display Name' },
            { key: 'email', label: 'Email', format: 'email' },
        ],
    },
    {
        key: 'reactions',
        label: 'Reactions',
        listItems: [
            {
                key: 'emoji',
                label: 'Emoji',
                children: [{ key: 'unicodeCharacter', label: 'Character' }],
            },
            {
                key: 'reactingUser',
                label: 'Reacting User',
                children: [
                    { key: 'userId', label: 'User ID' },
                    { key: 'email', label: 'Email', format: 'email' },
                    { key: 'name', label: 'Name' },
                ],
            },
        ],
    },
];
exports.createRecordAiActionOutputSchema = {
    fields: airtableRecordFields,
};
exports.getRecordAiActionOutputSchema = {
    fields: airtableRecordFields,
};
exports.updateRecordAiActionOutputSchema = {
    fields: airtableRecordFields,
};
exports.deleteRecordAiActionOutputSchema = {
    fields: airtableDeletedRecordFields,
};
exports.uploadAttachmentAiActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Record ID' },
        { key: 'createdTime', label: 'Created Time', format: 'datetime' },
        { key: 'fields', label: 'Fields', dynamicKey: true },
    ],
};
exports.createTableAiActionOutputSchema = {
    fields: airtableRawTableFields,
};
exports.createBaseAiActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Base ID' },
        { key: 'tables', label: 'Tables', listItems: airtableRawTableFields },
    ],
};
exports.getBaseSchemaAiActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Table Count', format: 'number' },
        { key: 'tables', label: 'Tables', listItems: airtableStrippedTableFields },
    ],
};
exports.addCommentToRecordAiActionOutputSchema = {
    fields: airtableCommentFields,
};
exports.createFieldActionOutputSchema = {
    fields: airtableRawFieldDefinitionFields,
};
exports.updateFieldActionOutputSchema = {
    fields: airtableRawFieldDefinitionFields,
};
exports.updateTableActionOutputSchema = {
    fields: airtableRawTableFields,
};
exports.listBasesActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Base Count', format: 'number' },
        {
            key: 'bases',
            label: 'Bases',
            labelKey: 'name',
            listItems: airtableBaseFields,
        },
    ],
};
exports.listRecordsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Record Count', format: 'number' },
        { key: 'offset', label: 'Next Page Offset' },
        {
            key: 'records',
            label: 'Records',
            labelKey: 'id',
            listItems: airtableRecordFields,
        },
    ],
};
exports.searchRecordsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Record Count', format: 'number' },
        {
            key: 'records',
            label: 'Records',
            labelKey: 'id',
            listItems: airtableRecordFields,
        },
    ],
};
exports.upsertRecordsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Record Count', format: 'number' },
        {
            key: 'records',
            label: 'Records',
            labelKey: 'id',
            listItems: airtableRecordFields,
        },
        { key: 'createdRecords', label: 'Created Record IDs' },
        { key: 'updatedRecords', label: 'Updated Record IDs' },
    ],
};
exports.deleteRecordsBatchActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Deleted Count', format: 'number' },
        {
            key: 'records',
            label: 'Deleted Records',
            labelKey: 'id',
            listItems: airtableDeletedRecordFields,
        },
    ],
};
exports.listRecordCommentsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Comment Count', format: 'number' },
        { key: 'offset', label: 'Next Page Offset' },
        {
            key: 'comments',
            label: 'Comments',
            labelKey: 'text',
            listItems: airtableCommentFields,
        },
    ],
};
exports.getCurrentUserActionOutputSchema = {
    fields: [{ key: 'id', label: 'User ID' }],
};
exports.createRecordActionOutputSchema = { fields: airtableRecordFields };
exports.updateRecordActionOutputSchema = { fields: airtableRecordFields };
exports.cleanRecordActionOutputSchema = { fields: airtableRecordFields };
exports.findRecordByIdActionOutputSchema = { fields: airtableRecordFields };
exports.uploadFileToColumnActionOutputSchema = { fields: airtableRecordFields };
exports.deleteRecordActionOutputSchema = { fields: airtableDeletedRecordFields };
exports.addCommentToRecordActionOutputSchema = { fields: airtableCommentFields };
exports.findRecordActionOutputSchema = {
    itemLabel: '{id}',
    fields: [{ key: 'records', label: 'Records', value: '', listItems: airtableRecordFields }],
};
exports.findTableByIdActionOutputSchema = { fields: airtableRawTableFields };
exports.findTableActionOutputSchema = { fields: airtableRawTableFields };
exports.createTableActionOutputSchema = { fields: airtableRawTableFields };
exports.createBaseActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Base ID' },
        { key: 'tables', label: 'Tables', listItems: airtableRawTableFields },
    ],
};
exports.getBaseSchemaActionOutputSchema = {
    itemLabel: '{name}',
    fields: [{ key: 'tables', label: 'Tables', value: '', listItems: airtableRawTableFields }],
};
exports.findBaseActionOutputSchema = {
    itemLabel: '{name}',
    fields: [{ key: 'bases', label: 'Bases', value: '', listItems: airtableBaseFields }],
};
exports.newRecordTriggerOutputSchema = { fields: airtableRecordFields };
exports.updatedRecordTriggerOutputSchema = { fields: airtableRecordFields };
//# sourceMappingURL=output-schemas.js.map