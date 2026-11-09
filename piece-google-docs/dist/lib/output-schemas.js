"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportAsPdfActionOutputSchema = exports.createDocumentFromMarkdownActionOutputSchema = exports.replaceBodyWithMarkdownActionOutputSchema = exports.replaceSectionWithMarkdownActionOutputSchema = exports.createAndPopulateTableActionOutputSchema = exports.batchUpdateActionOutputSchema = exports.searchDocumentsActionOutputSchema = exports.copyDocumentActionOutputSchema = exports.getDocumentPlaintextActionOutputSchema = exports.getDocumentEndIndexActionOutputSchema = exports.replaceImageActionOutputSchema = exports.insertPageBreakActionOutputSchema = exports.insertInlineImageActionOutputSchema = exports.updateDocumentStyleActionOutputSchema = exports.updateTableRowStyleActionOutputSchema = exports.unmergeTableCellsActionOutputSchema = exports.insertImageInTableCellActionOutputSchema = exports.insertTextInTableCellActionOutputSchema = exports.deleteTableColumnActionOutputSchema = exports.deleteTableRowActionOutputSchema = exports.insertTableColumnActionOutputSchema = exports.insertTableRowActionOutputSchema = exports.insertTableActionOutputSchema = exports.deleteNamedRangeActionOutputSchema = exports.deleteHeaderActionOutputSchema = exports.deleteFooterActionOutputSchema = exports.createNamedRangeActionOutputSchema = exports.createFootnoteActionOutputSchema = exports.createHeaderActionOutputSchema = exports.createFooterActionOutputSchema = exports.deleteParagraphBulletsActionOutputSchema = exports.createParagraphBulletsActionOutputSchema = exports.replaceAllTextActionOutputSchema = exports.deleteContentRangeActionOutputSchema = exports.insertTextActionOutputSchema = exports.newDocumentTriggerOutputSchema = exports.findDocumentActionOutputSchema = exports.readDocumentActionOutputSchema = exports.editTemplateActionOutputSchema = exports.appendTextActionOutputSchema = exports.createDocumentActionOutputSchema = void 0;
const driveFileFields = [
    {
        key: 'id',
        label: 'Document ID',
        value: 'id',
    },
    {
        key: 'name',
        label: 'Name',
        value: 'name',
    },
    {
        key: 'mimeType',
        label: 'MIME Type',
        value: 'mimeType',
    },
    {
        key: 'webViewLink',
        label: 'Web View Link',
        value: 'webViewLink',
        format: 'url',
    },
    {
        key: 'iconLink',
        label: 'Icon',
        value: 'iconLink',
        format: 'image',
    },
    {
        key: 'thumbnailLink',
        label: 'Thumbnail',
        value: 'thumbnailLink',
        format: 'image',
    },
    {
        key: 'size',
        label: 'Size',
        value: 'size',
        format: 'filesize',
    },
    {
        key: 'createdTime',
        label: 'Created Time',
        value: 'createdTime',
        format: 'datetime',
    },
    {
        key: 'modifiedTime',
        label: 'Modified Time',
        value: 'modifiedTime',
        format: 'datetime',
    },
    {
        key: 'trashed',
        label: 'Trashed',
        value: 'trashed',
        format: 'boolean',
    },
    {
        key: 'shared',
        label: 'Shared',
        value: 'shared',
        format: 'boolean',
    },
    {
        key: 'starred',
        label: 'Starred',
        value: 'starred',
        format: 'boolean',
    },
    {
        key: 'parents',
        label: 'Parent Folder IDs',
        value: 'parents',
    },
    {
        key: 'owners',
        label: 'Owners',
        value: 'owners',
        labelKey: 'displayName',
        listItems: [
            {
                key: 'displayName',
                label: 'Name',
                value: 'displayName',
            },
            {
                key: 'emailAddress',
                label: 'Email',
                value: 'emailAddress',
                format: 'email',
            },
            {
                key: 'photoLink',
                label: 'Photo',
                value: 'photoLink',
                format: 'image',
            },
        ],
    },
    {
        key: 'lastModifyingUser',
        label: 'Last Modifying User',
        value: 'lastModifyingUser',
        children: [
            {
                key: 'displayName',
                label: 'Name',
                value: 'displayName',
            },
            {
                key: 'emailAddress',
                label: 'Email',
                value: 'emailAddress',
                format: 'email',
            },
            {
                key: 'photoLink',
                label: 'Photo',
                value: 'photoLink',
                format: 'image',
            },
        ],
    },
];
exports.createDocumentActionOutputSchema = {
    fields: [
        {
            key: 'documentId',
            label: 'Document ID',
            value: 'documentId',
        },
        {
            key: 'requiredRevisionId',
            label: 'Revision ID',
            value: 'writeControl.requiredRevisionId',
        },
    ],
};
exports.appendTextActionOutputSchema = {
    fields: [
        {
            key: 'documentId',
            label: 'Document ID',
            value: 'documentId',
        },
        {
            key: 'requiredRevisionId',
            label: 'Revision ID',
            value: 'writeControl.requiredRevisionId',
        },
    ],
};
exports.editTemplateActionOutputSchema = {
    fields: [
        {
            key: 'documentId',
            label: 'Document ID',
            value: 'data.documentId',
        },
        {
            key: 'requiredRevisionId',
            label: 'Revision ID',
            value: 'data.writeControl.requiredRevisionId',
        },
        {
            key: 'status',
            label: 'Status Code',
            value: 'status',
            format: 'number',
        },
        {
            key: 'statusText',
            label: 'Status Text',
            value: 'statusText',
        },
    ],
};
exports.readDocumentActionOutputSchema = {
    fields: [
        {
            key: 'title',
            label: 'Title',
            value: 'title',
        },
        {
            key: 'documentId',
            label: 'Document ID',
            value: 'documentId',
        },
        {
            key: 'revisionId',
            label: 'Revision ID',
            value: 'revisionId',
        },
        {
            key: 'suggestionsViewMode',
            label: 'Suggestions View Mode',
            value: 'suggestionsViewMode',
        },
        {
            key: 'content',
            label: 'Body Content',
            value: 'body.content',
            listItems: [
                {
                    key: 'startIndex',
                    label: 'Start Index',
                    value: 'startIndex',
                    format: 'number',
                },
                {
                    key: 'endIndex',
                    label: 'End Index',
                    value: 'endIndex',
                    format: 'number',
                },
                {
                    key: 'elements',
                    label: 'Paragraph Text',
                    value: 'paragraph.elements',
                    labelKey: 'textRun.content',
                    listItems: [
                        {
                            key: 'text',
                            label: 'Text',
                            value: 'textRun.content',
                        },
                    ],
                },
            ],
        },
    ],
};
exports.findDocumentActionOutputSchema = {
    fields: [
        {
            key: 'found',
            label: 'Found',
            value: 'found',
            format: 'boolean',
        },
        {
            key: 'file',
            label: 'Document',
            value: 'file',
            children: driveFileFields,
        },
    ],
};
exports.newDocumentTriggerOutputSchema = {
    fields: driveFileFields,
};
exports.insertTextActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'insertedCharacters', label: 'Inserted Characters', format: 'number' },
        { key: 'mode', label: 'Mode' },
    ],
};
exports.deleteContentRangeActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'deletedFrom', label: 'Deleted From Index', format: 'number' },
        { key: 'deletedTo', label: 'Deleted To Index', format: 'number' },
    ],
};
exports.replaceAllTextActionOutputSchema = {
    fields: [
        { key: 'documentId', label: 'Document ID' },
        { key: 'occurrencesChanged', label: 'Occurrences Changed', format: 'number' },
    ],
};
exports.createParagraphBulletsActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'startIndex', label: 'Start Index', format: 'number' },
        { key: 'endIndex', label: 'End Index', format: 'number' },
        { key: 'bulletPreset', label: 'Bullet Preset' },
    ],
};
exports.deleteParagraphBulletsActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'rangeStart', label: 'Range Start', format: 'number' },
        { key: 'rangeEnd', label: 'Range End', format: 'number' },
    ],
};
exports.createFooterActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'footerId', label: 'Footer ID' },
    ],
};
exports.createHeaderActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'headerId', label: 'Header ID' },
    ],
};
exports.createFootnoteActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'footnoteId', label: 'Footnote ID' },
    ],
};
exports.createNamedRangeActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'name', label: 'Range Name' },
        { key: 'namedRangeId', label: 'Named Range ID' },
    ],
};
exports.deleteFooterActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'deletedFooterId', label: 'Deleted Footer ID' },
    ],
};
exports.deleteHeaderActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'deletedHeaderId', label: 'Deleted Header ID' },
    ],
};
exports.deleteNamedRangeActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'deletedNamedRangeId', label: 'Deleted Named Range ID' },
        { key: 'deletedName', label: 'Deleted Range Name' },
    ],
};
exports.insertTableActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'rows', label: 'Rows', format: 'number' },
        { key: 'columns', label: 'Columns', format: 'number' },
        { key: 'mode', label: 'Mode' },
    ],
};
exports.insertTableRowActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'tableStartIndex', label: 'Table Start Index', format: 'number' },
        { key: 'rowIndex', label: 'Row Index', format: 'number' },
        { key: 'columnIndex', label: 'Column Index', format: 'number' },
        { key: 'insertBelow', label: 'Inserted Below', format: 'boolean' },
    ],
};
exports.insertTableColumnActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'tableStartIndex', label: 'Table Start Index', format: 'number' },
        { key: 'rowIndex', label: 'Row Index', format: 'number' },
        { key: 'columnIndex', label: 'Column Index', format: 'number' },
        { key: 'insertRight', label: 'Inserted to the Right', format: 'boolean' },
    ],
};
exports.deleteTableRowActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'tableStartIndex', label: 'Table Start Index', format: 'number' },
        { key: 'deletedRowIndex', label: 'Deleted Row Index', format: 'number' },
    ],
};
exports.deleteTableColumnActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'tableStartIndex', label: 'Table Start Index', format: 'number' },
        { key: 'deletedColumnIndex', label: 'Deleted Column Index', format: 'number' },
    ],
};
exports.insertTextInTableCellActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'tableStartIndex', label: 'Table Start Index', format: 'number' },
        { key: 'rowIndex', label: 'Row Index', format: 'number' },
        { key: 'columnIndex', label: 'Column Index', format: 'number' },
        { key: 'insertedAtIndex', label: 'Inserted At Index', format: 'number' },
        { key: 'insertedCharacters', label: 'Inserted Characters', format: 'number' },
    ],
};
exports.insertImageInTableCellActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'tableStartIndex', label: 'Table Start Index', format: 'number' },
        { key: 'rowIndex', label: 'Row Index', format: 'number' },
        { key: 'columnIndex', label: 'Column Index', format: 'number' },
        { key: 'insertedAtIndex', label: 'Inserted At Index', format: 'number' },
        { key: 'uri', label: 'Image URI', format: 'url' },
    ],
};
exports.unmergeTableCellsActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'tableStartIndex', label: 'Table Start Index', format: 'number' },
        { key: 'rowIndex', label: 'Row Index', format: 'number' },
        { key: 'columnIndex', label: 'Column Index', format: 'number' },
        { key: 'rowSpan', label: 'Row Span', format: 'number' },
        { key: 'columnSpan', label: 'Column Span', format: 'number' },
    ],
};
exports.updateTableRowStyleActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'tableStartIndex', label: 'Table Start Index', format: 'number' },
        { key: 'rowIndices', label: 'Row Indices' },
        { key: 'updatedFields', label: 'Updated Fields' },
    ],
};
exports.updateDocumentStyleActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'updatedFields', label: 'Updated Fields' },
    ],
};
exports.insertInlineImageActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'insertedObjectId', label: 'Inserted Object ID' },
        { key: 'mode', label: 'Mode' },
    ],
};
exports.insertPageBreakActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'mode', label: 'Mode' },
    ],
};
exports.replaceImageActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'imageObjectId', label: 'Image Object ID' },
    ],
};
exports.getDocumentEndIndexActionOutputSchema = {
    fields: [
        { key: 'documentId', label: 'Document ID' },
        { key: 'title', label: 'Title' },
        { key: 'endIndex', label: 'End Index', format: 'number' },
        { key: 'maxInsertIndex', label: 'Max Insert Index', format: 'number' },
    ],
};
exports.getDocumentPlaintextActionOutputSchema = {
    fields: [
        { key: 'documentId', label: 'Document ID' },
        { key: 'title', label: 'Title' },
        { key: 'plainText', label: 'Plain Text' },
    ],
};
exports.copyDocumentActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Document ID' },
        { key: 'name', label: 'Name' },
        { key: 'webViewLink', label: 'Web View Link', format: 'url' },
        { key: 'parents', label: 'Parent Folder IDs' },
    ],
};
exports.searchDocumentsActionOutputSchema = {
    fields: [
        {
            key: 'documents',
            label: 'Documents',
            value: 'documents',
            labelKey: 'name',
            listItems: [
                { key: 'id', label: 'Document ID' },
                { key: 'name', label: 'Name' },
                { key: 'createdTime', label: 'Created Time', format: 'datetime' },
                { key: 'modifiedTime', label: 'Modified Time', format: 'datetime' },
                { key: 'webViewLink', label: 'Web View Link', format: 'url' },
                { key: 'ownerEmail', label: 'Owner Email', format: 'email' },
            ],
        },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'nextPageToken', label: 'Next Page Token' },
    ],
};
exports.batchUpdateActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'appliedRequests', label: 'Applied Requests', format: 'number' },
        { key: 'replies', label: 'Replies' },
    ],
};
exports.createAndPopulateTableActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'rows', label: 'Rows', format: 'number' },
        { key: 'columns', label: 'Columns', format: 'number' },
        { key: 'cellsPopulated', label: 'Cells Populated', format: 'number' },
    ],
};
exports.replaceSectionWithMarkdownActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'replacedFrom', label: 'Replaced From Index', format: 'number' },
        { key: 'replacedTo', label: 'Replaced To Index', format: 'number' },
        { key: 'url', label: 'Document URL', format: 'url' },
    ],
};
exports.replaceBodyWithMarkdownActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'url', label: 'Document URL', format: 'url' },
    ],
};
exports.createDocumentFromMarkdownActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'title', label: 'Title' },
        { key: 'url', label: 'Document URL', format: 'url' },
    ],
};
exports.exportAsPdfActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'documentId', label: 'Document ID' },
        { key: 'file', label: 'PDF File' },
    ],
};
//# sourceMappingURL=output-schemas.js.map