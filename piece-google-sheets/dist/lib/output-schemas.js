"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sheetsFindWorksheetActionOutputSchema = exports.sheetsFindRowsActionOutputSchema = exports.sheetsFindOrCreateWorksheetActionOutputSchema = exports.sheetsFindOrCreateRowActionOutputSchema = exports.sheetsExportWorksheetActionOutputSchema = exports.sheetsDeleteWorksheetActionOutputSchema = exports.sheetsDeleteRowActionOutputSchema = exports.sheetsDeleteMultipleRowsActionOutputSchema = exports.sheetsDeleteDimensionActionOutputSchema = exports.sheetsCreateSpreadsheetActionOutputSchema = exports.sheetsCopyWorksheetActionOutputSchema = exports.sheetsClearValuesActionOutputSchema = exports.sheetsAppendValuesActionOutputSchema = exports.sheetsAutoResizeDimensionsActionOutputSchema = exports.sheetsAppendDimensionActionOutputSchema = exports.sheetsAddWorksheetActionOutputSchema = exports.sheetsAddRowActionOutputSchema = exports.sheetsAddRowAtTopActionOutputSchema = exports.sheetsAddMultipleRowsActionOutputSchema = exports.sheetsAddColumnActionOutputSchema = exports.googleSheetsNewOrUpdatedRowTriggerOutputSchema = exports.googlesheetsNewRowAddedTriggerOutputSchema = exports.newWorksheetTriggerOutputSchema = exports.updateMultipleRowsActionOutputSchema = exports.getNextRowsActionOutputSchema = exports.findSpreadsheetsActionOutputSchema = exports.newSpreadsheetTriggerOutputSchema = exports.exportSheetActionOutputSchema = exports.createColumnActionOutputSchema = exports.copyWorksheetActionOutputSchema = exports.readDataRangeActionOutputSchema = exports.getManyRowsActionOutputSchema = exports.findRowByNumActionOutputSchema = exports.formatRowActionOutputSchema = exports.renameWorksheetActionOutputSchema = exports.deleteWorksheetActionOutputSchema = exports.clearRowsActionOutputSchema = exports.clearSheetActionOutputSchema = exports.findOrCreateWorksheetActionOutputSchema = exports.createWorksheetActionOutputSchema = exports.createSpreadsheetActionOutputSchema = exports.findOrCreateRowActionOutputSchema = exports.findRowsActionOutputSchema = exports.deleteMultipleRowsActionOutputSchema = exports.deleteRowActionOutputSchema = exports.updateRowActionOutputSchema = exports.googleSheetsInsertMultipleRowsActionOutputSchema = exports.insertRowAtTopActionOutputSchema = exports.insertRowActionOutputSchema = exports.findWorksheetActionOutputSchema = void 0;
exports.sheetsUpdateValuesActionOutputSchema = exports.sheetsUpdateSheetPropertiesActionOutputSchema = exports.sheetsUpdateRowActionOutputSchema = exports.sheetsUpdateMultipleRowsActionOutputSchema = exports.sheetsUpdateDimensionPropertiesActionOutputSchema = exports.sheetsSearchSpreadsheetsActionOutputSchema = exports.sheetsRenameWorksheetActionOutputSchema = exports.sheetsInsertDimensionActionOutputSchema = exports.sheetsGetValuesActionOutputSchema = exports.sheetsGetSpreadsheetActionOutputSchema = exports.sheetsGetRowActionOutputSchema = exports.sheetsGetNextRowsActionOutputSchema = exports.sheetsGetAllRowsActionOutputSchema = exports.sheetsFormatCellsActionOutputSchema = void 0;
exports.findWorksheetActionOutputSchema = {
    fields: [
        {
            key: 'found',
            label: 'Found',
            format: 'boolean',
        },
        {
            key: 'worksheets',
            label: 'Worksheets',
            labelKey: 'title',
            listItems: [
                {
                    key: 'sheetId',
                    label: 'Sheet ID',
                    value: 'properties.sheetId',
                },
                {
                    key: 'title',
                    label: 'Title',
                    value: 'properties.title',
                },
                {
                    key: 'index',
                    label: 'Index',
                    value: 'properties.index',
                    format: 'number',
                },
                {
                    key: 'sheetType',
                    label: 'Sheet Type',
                    value: 'properties.sheetType',
                },
                {
                    key: 'rowCount',
                    label: 'Row Count',
                    value: 'properties.gridProperties.rowCount',
                    format: 'number',
                },
                {
                    key: 'columnCount',
                    label: 'Column Count',
                    value: 'properties.gridProperties.columnCount',
                    format: 'number',
                },
            ],
        },
    ],
};
exports.insertRowActionOutputSchema = {
    fields: [
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
        },
        {
            key: 'tableRange',
            label: 'Table Range',
        },
        {
            key: 'row',
            label: 'Row Number',
            value: 'row',
        },
        {
            key: 'updates',
            label: 'Updates',
            children: [
                {
                    key: 'updatedRange',
                    label: 'Updated Range',
                },
                {
                    key: 'updatedRows',
                    label: 'Updated Rows',
                    format: 'number',
                },
                {
                    key: 'updatedColumns',
                    label: 'Updated Columns',
                    format: 'number',
                },
                {
                    key: 'updatedCells',
                    label: 'Updated Cells',
                    format: 'number',
                },
            ],
        },
    ],
};
exports.insertRowAtTopActionOutputSchema = {
    fields: [
        {
            key: 'row',
            label: 'Row Number',
            format: 'number',
        },
        {
            key: 'updates',
            label: 'Updates',
            children: [
                {
                    key: 'spreadsheetId',
                    label: 'Spreadsheet ID',
                    value: 'spreadsheetId',
                },
                {
                    key: 'updatedRange',
                    label: 'Updated Range',
                    value: 'updatedRange',
                },
                {
                    key: 'updatedRows',
                    label: 'Updated Rows',
                    value: 'updatedRows',
                    format: 'number',
                },
                {
                    key: 'updatedColumns',
                    label: 'Updated Columns',
                    value: 'updatedColumns',
                    format: 'number',
                },
                {
                    key: 'updatedCells',
                    label: 'Updated Cells',
                    value: 'updatedCells',
                    format: 'number',
                },
            ],
        },
    ],
};
exports.googleSheetsInsertMultipleRowsActionOutputSchema = {
    fields: [
        {
            key: 'tableRange',
            label: 'Table Range',
        },
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
        },
        {
            key: 'updates',
            label: 'Updates',
            children: [
                {
                    key: 'updatedRange',
                    label: 'Updated Range',
                    value: 'updatedRange',
                },
                {
                    key: 'updatedRows',
                    label: 'Updated Rows',
                    value: 'updatedRows',
                    format: 'number',
                },
                {
                    key: 'updatedColumns',
                    label: 'Updated Columns',
                    value: 'updatedColumns',
                    format: 'number',
                },
                {
                    key: 'updatedCells',
                    label: 'Updated Cells',
                    value: 'updatedCells',
                    format: 'number',
                },
                {
                    key: 'spreadsheetId',
                    label: 'Spreadsheet ID',
                    value: 'spreadsheetId',
                },
            ],
        },
    ],
};
exports.updateRowActionOutputSchema = {
    fields: [
        {
            key: 'row',
            label: 'Row Number',
            value: 'row',
        },
        {
            key: 'updatedRange',
            label: 'Updated Range',
            value: 'updates.updatedRange',
        },
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
            value: 'updates.spreadsheetId',
        },
    ],
};
exports.deleteRowActionOutputSchema = {
    fields: [
        {
            key: 'success',
            label: 'Success',
            value: 'success',
            format: 'boolean',
        },
    ],
};
exports.deleteMultipleRowsActionOutputSchema = {
    fields: [
        {
            key: 'success',
            label: 'Success',
            format: 'boolean',
        },
        {
            key: 'deletedRanges',
            label: 'Deleted Ranges',
            labelKey: 'startRow',
            listItems: [
                {
                    key: 'startRow',
                    label: 'Start Row',
                    format: 'number',
                },
                {
                    key: 'endRow',
                    label: 'End Row',
                    format: 'number',
                },
            ],
        },
    ],
};
exports.findRowsActionOutputSchema = {
    itemLabel: 'Row {row}',
    fields: [
        {
            key: 'rows',
            label: 'Found Rows',
            value: '',
            listItems: [
                {
                    key: 'row',
                    label: 'Row Number',
                    value: 'row',
                },
                {
                    key: 'values',
                    label: 'Values',
                    value: 'values',
                    dynamicKey: true,
                },
            ],
        },
    ],
};
exports.findOrCreateRowActionOutputSchema = {
    fields: [
        {
            key: 'found',
            label: 'Found',
            format: 'boolean',
        },
        {
            key: 'created',
            label: 'Created',
            format: 'boolean',
        },
        {
            key: 'row',
            label: 'Row Number',
        },
        {
            key: 'values',
            label: 'Values',
            dynamicKey: true,
            children: [
                {
                    key: 'A',
                    label: 'Column A',
                    value: 'A',
                },
                {
                    key: 'B',
                    label: 'Column B',
                    value: 'B',
                },
                {
                    key: 'C',
                    label: 'Column C',
                    value: 'C',
                },
            ],
        },
    ],
};
exports.createSpreadsheetActionOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Spreadsheet ID',
        },
    ],
};
exports.createWorksheetActionOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Worksheet ID',
        },
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
        },
        {
            key: 'updatedRange',
            label: 'Updated Range',
            value: 'updates.updatedRange',
        },
    ],
};
exports.findOrCreateWorksheetActionOutputSchema = {
    fields: [
        {
            key: 'found',
            label: 'Found',
            format: 'boolean',
        },
        {
            key: 'created',
            label: 'Created',
            format: 'boolean',
        },
        {
            key: 'worksheet',
            label: 'Worksheet',
            children: [
                {
                    key: 'title',
                    label: 'Title',
                },
                {
                    key: 'sheetId',
                    label: 'Sheet ID',
                },
                {
                    key: 'index',
                    label: 'Index',
                    format: 'number',
                },
                {
                    key: 'sheetType',
                    label: 'Sheet Type',
                },
                {
                    key: 'gridProperties',
                    label: 'Grid Properties',
                    children: [
                        {
                            key: 'rowCount',
                            label: 'Row Count',
                            format: 'number',
                        },
                        {
                            key: 'columnCount',
                            label: 'Column Count',
                            format: 'number',
                        },
                    ],
                },
            ],
        },
    ],
};
exports.clearSheetActionOutputSchema = {
    fields: [
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
        },
    ],
};
exports.clearRowsActionOutputSchema = {
    fields: [
        {
            key: 'success',
            label: 'Success',
            format: 'boolean',
        },
        {
            key: 'clearedRange',
            label: 'Cleared Range',
        },
        {
            key: 'startingRow',
            label: 'Starting Row',
            format: 'number',
        },
        {
            key: 'endingRow',
            label: 'Ending Row',
            format: 'number',
        },
    ],
};
exports.deleteWorksheetActionOutputSchema = {
    fields: [
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
        },
    ],
};
exports.renameWorksheetActionOutputSchema = {
    fields: [
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
        },
    ],
};
exports.formatRowActionOutputSchema = {
    fields: [
        {
            key: 'success',
            label: 'Success',
            format: 'boolean',
        },
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
        },
    ],
};
exports.findRowByNumActionOutputSchema = {
    fields: [
        {
            key: 'found',
            label: 'Found',
            format: 'boolean',
        },
        {
            key: 'row',
            label: 'Row Number',
        },
        {
            key: 'values',
            label: 'Values',
            dynamicKey: true,
        },
    ],
};
exports.getManyRowsActionOutputSchema = {
    itemLabel: 'Row {row}',
    fields: [
        {
            key: 'rows',
            label: 'Rows',
            value: '',
            listItems: [
                {
                    key: 'row',
                    label: 'Row Number',
                    value: 'row',
                },
                {
                    key: 'values',
                    label: 'Values',
                    value: 'values',
                    dynamicKey: true,
                },
            ],
        },
    ],
};
exports.readDataRangeActionOutputSchema = {
    fields: [
        {
            key: 'range',
            label: 'Resolved Range',
        },
        {
            key: 'majorDimension',
            label: 'Major Dimension',
        },
        {
            key: 'values',
            label: 'Rows',
            description: 'Array of rows, each containing cell values',
        },
    ],
};
exports.copyWorksheetActionOutputSchema = {
    fields: [
        {
            key: 'title',
            label: 'Title',
        },
        {
            key: 'sheetId',
            label: 'Sheet ID',
        },
        {
            key: 'index',
            label: 'Index',
            format: 'number',
        },
        {
            key: 'sheetType',
            label: 'Sheet Type',
        },
        {
            key: 'gridProperties',
            label: 'Grid Properties',
            children: [
                {
                    key: 'rowCount',
                    label: 'Row Count',
                    format: 'number',
                },
                {
                    key: 'columnCount',
                    label: 'Column Count',
                    format: 'number',
                },
            ],
        },
    ],
};
exports.createColumnActionOutputSchema = {
    fields: [
        {
            key: 'updatedRange',
            label: 'Updated Range',
        },
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
        },
        {
            key: 'updatedColumns',
            label: 'Updated Columns',
            format: 'number',
        },
        {
            key: 'updatedRows',
            label: 'Updated Rows',
            format: 'number',
        },
        {
            key: 'updatedCells',
            label: 'Updated Cells',
            format: 'number',
        },
    ],
};
exports.exportSheetActionOutputSchema = {
    fields: [
        {
            key: 'filename',
            label: 'File Name',
        },
        {
            key: 'format',
            label: 'Format',
        },
        {
            key: 'file',
            label: 'File',
            format: 'url',
        },
    ],
};
exports.newSpreadsheetTriggerOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'Name',
        },
        {
            key: 'id',
            label: 'Spreadsheet ID',
        },
        {
            key: 'webViewLink',
            label: 'Web View Link',
            format: 'url',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'createdTime',
            label: 'Created Time',
            format: 'datetime',
        },
        {
            key: 'modifiedTime',
            label: 'Modified Time',
            format: 'datetime',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
        },
        {
            key: 'iconLink',
            label: 'Icon Link',
            format: 'image',
        },
        {
            key: 'thumbnailLink',
            label: 'Thumbnail Link',
            format: 'image',
        },
        {
            key: 'shared',
            label: 'Shared',
            format: 'boolean',
        },
        {
            key: 'starred',
            label: 'Starred',
            format: 'boolean',
        },
        {
            key: 'trashed',
            label: 'Trashed',
            format: 'boolean',
        },
        {
            key: 'ownedByMe',
            label: 'Owned By Me',
            format: 'boolean',
        },
        {
            key: 'parents',
            label: 'Parent Folder IDs',
        },
        {
            key: 'lastModifyingUser',
            label: 'Last Modifying User',
            children: [
                {
                    key: 'displayName',
                    label: 'Display Name',
                },
                {
                    key: 'emailAddress',
                    label: 'Email',
                    format: 'email',
                },
                {
                    key: 'photoLink',
                    label: 'Photo',
                    format: 'image',
                },
            ],
        },
        {
            key: 'owners',
            label: 'Owners',
            labelKey: 'displayName',
            listItems: [
                {
                    key: 'displayName',
                    label: 'Display Name',
                },
                {
                    key: 'emailAddress',
                    label: 'Email',
                    format: 'email',
                },
                {
                    key: 'photoLink',
                    label: 'Photo',
                    format: 'image',
                },
            ],
        },
        {
            key: 'permissions',
            label: 'Permissions',
            labelKey: 'displayName',
            listItems: [
                {
                    key: 'displayName',
                    label: 'Display Name',
                },
                {
                    key: 'emailAddress',
                    label: 'Email',
                    format: 'email',
                },
                {
                    key: 'role',
                    label: 'Role',
                },
                {
                    key: 'type',
                    label: 'Type',
                },
                {
                    key: 'id',
                    label: 'Permission ID',
                },
            ],
        },
    ],
};
exports.findSpreadsheetsActionOutputSchema = {
    fields: [
        {
            key: 'found',
            label: 'Found',
            format: 'boolean',
        },
        {
            key: 'spreadsheets',
            label: 'Spreadsheets',
            labelKey: 'name',
            listItems: [
                {
                    key: 'name',
                    label: 'Name',
                },
                {
                    key: 'id',
                    label: 'Spreadsheet ID',
                },
                {
                    key: 'webViewLink',
                    label: 'Web View Link',
                    format: 'url',
                },
                {
                    key: 'createdTime',
                    label: 'Created Time',
                    format: 'datetime',
                },
                {
                    key: 'modifiedTime',
                    label: 'Modified Time',
                    format: 'datetime',
                },
            ],
        },
    ],
};
exports.getNextRowsActionOutputSchema = {
    itemLabel: 'Row {row}',
    fields: [
        {
            key: 'rows',
            label: 'Rows',
            value: '',
            listItems: [
                {
                    key: 'row',
                    label: 'Row Number',
                    value: 'row',
                },
                {
                    key: 'values',
                    label: 'Values',
                    value: 'values',
                    dynamicKey: true,
                },
            ],
        },
    ],
};
exports.updateMultipleRowsActionOutputSchema = {
    fields: [
        {
            key: 'totalUpdatedRows',
            label: 'Total Updated Rows',
            value: 'totalUpdatedRows',
            format: 'number',
        },
        {
            key: 'totalUpdatedColumns',
            label: 'Total Updated Columns',
            value: 'totalUpdatedColumns',
            format: 'number',
        },
        {
            key: 'totalUpdatedCells',
            label: 'Total Updated Cells',
            value: 'totalUpdatedCells',
            format: 'number',
        },
        {
            key: 'totalUpdatedSheets',
            label: 'Total Updated Sheets',
            value: 'totalUpdatedSheets',
            format: 'number',
        },
        {
            key: 'spreadsheetId',
            label: 'Spreadsheet ID',
            value: 'spreadsheetId',
        },
        {
            key: 'responses',
            label: 'Responses',
            value: 'responses',
            labelKey: 'updatedRange',
            listItems: [
                {
                    key: 'updatedRange',
                    label: 'Updated Range',
                    value: 'updatedRange',
                },
                {
                    key: 'updatedRows',
                    label: 'Updated Rows',
                    value: 'updatedRows',
                    format: 'number',
                },
                {
                    key: 'updatedColumns',
                    label: 'Updated Columns',
                    value: 'updatedColumns',
                    format: 'number',
                },
                {
                    key: 'updatedCells',
                    label: 'Updated Cells',
                    value: 'updatedCells',
                    format: 'number',
                },
                {
                    key: 'spreadsheetId',
                    label: 'Spreadsheet ID',
                    value: 'spreadsheetId',
                },
            ],
        },
    ],
};
exports.newWorksheetTriggerOutputSchema = {
    fields: [
        {
            key: 'title',
            label: 'Title',
            value: 'properties.title',
        },
        {
            key: 'sheetId',
            label: 'Sheet ID',
            value: 'properties.sheetId',
        },
        {
            key: 'index',
            label: 'Index',
            value: 'properties.index',
            format: 'number',
        },
        {
            key: 'sheetType',
            label: 'Sheet Type',
            value: 'properties.sheetType',
        },
        {
            key: 'gridProperties',
            label: 'Grid Properties',
            value: 'properties.gridProperties',
            children: [
                {
                    key: 'rowCount',
                    label: 'Row Count',
                    value: 'rowCount',
                    format: 'number',
                },
                {
                    key: 'columnCount',
                    label: 'Column Count',
                    value: 'columnCount',
                    format: 'number',
                },
            ],
        },
    ],
};
exports.googlesheetsNewRowAddedTriggerOutputSchema = {
    fields: [
        {
            key: 'row',
            label: 'Row Number',
            value: 'row',
        },
        {
            key: 'values',
            label: 'Values',
            value: 'values',
            dynamicKey: true,
        },
    ],
};
exports.googleSheetsNewOrUpdatedRowTriggerOutputSchema = {
    fields: [
        {
            key: 'row',
            label: 'Row Number',
            value: 'row',
        },
        {
            key: 'values',
            label: 'Values',
            value: 'values',
            dynamicKey: true,
        },
    ],
};
const valuesUpdateFields = [
    { key: 'spreadsheetId', label: 'Spreadsheet ID', value: 'spreadsheetId' },
    { key: 'updatedRange', label: 'Updated Range', value: 'updatedRange' },
    { key: 'updatedRows', label: 'Updated Rows', value: 'updatedRows', format: 'number' },
    { key: 'updatedColumns', label: 'Updated Columns', value: 'updatedColumns', format: 'number' },
    { key: 'updatedCells', label: 'Updated Cells', value: 'updatedCells', format: 'number' },
];
const valuesAppendFields = [
    { key: 'spreadsheetId', label: 'Spreadsheet ID', value: 'spreadsheetId' },
    { key: 'tableRange', label: 'Table Range', value: 'tableRange' },
    { key: 'updates', label: 'Updates', value: 'updates', children: valuesUpdateFields },
];
exports.sheetsAddColumnActionOutputSchema = {
    fields: valuesUpdateFields,
};
exports.sheetsAddMultipleRowsActionOutputSchema = {
    fields: valuesAppendFields,
};
exports.sheetsAddRowAtTopActionOutputSchema = {
    fields: [
        { key: 'row', label: 'Row Number', value: 'row', format: 'number' },
        { key: 'updates', label: 'Updates', value: 'updates', children: valuesUpdateFields },
    ],
};
exports.sheetsAddRowActionOutputSchema = {
    fields: [
        ...valuesAppendFields,
        { key: 'row', label: 'Row Number', value: 'row', format: 'number' },
    ],
};
exports.sheetsAddWorksheetActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Worksheet ID', value: 'id', format: 'number' },
        { key: 'spreadsheetId', label: 'Spreadsheet ID', value: 'spreadsheetId' },
        { key: 'updates', label: 'Updates', value: 'updates', children: valuesUpdateFields },
    ],
};
const batchUpdateSuccessFields = [
    { key: 'success', label: 'Success', value: 'success', format: 'boolean' },
    { key: 'spreadsheetId', label: 'Spreadsheet ID', value: 'spreadsheetId' },
];
exports.sheetsAppendDimensionActionOutputSchema = {
    fields: batchUpdateSuccessFields,
};
exports.sheetsAutoResizeDimensionsActionOutputSchema = {
    fields: batchUpdateSuccessFields,
};
exports.sheetsAppendValuesActionOutputSchema = {
    fields: [
        { key: 'updatedRange', label: 'Updated Range', value: 'updatedRange' },
        { key: 'updatedRows', label: 'Updated Rows', value: 'updatedRows', format: 'number' },
        { key: 'updatedColumns', label: 'Updated Columns', value: 'updatedColumns', format: 'number' },
        { key: 'updatedCells', label: 'Updated Cells', value: 'updatedCells', format: 'number' },
    ],
};
exports.sheetsClearValuesActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', value: 'success', format: 'boolean' },
        { key: 'startingRow', label: 'Starting Row', value: 'startingRow', format: 'number' },
        { key: 'endingRow', label: 'Ending Row', value: 'endingRow', format: 'number' },
        { key: 'clearedRange', label: 'Cleared Range', value: 'clearedRange' },
    ],
};
const sheetPropertiesFields = [
    { key: 'sheetId', label: 'Worksheet ID', value: 'sheetId', format: 'number' },
    { key: 'title', label: 'Title', value: 'title' },
    { key: 'index', label: 'Index', value: 'index', format: 'number' },
    { key: 'sheetType', label: 'Sheet Type', value: 'sheetType' },
    {
        key: 'gridProperties',
        label: 'Grid Properties',
        value: 'gridProperties',
        children: [
            { key: 'rowCount', label: 'Row Count', value: 'rowCount', format: 'number' },
            { key: 'columnCount', label: 'Column Count', value: 'columnCount', format: 'number' },
        ],
    },
];
const rowValuesFields = [
    { key: 'row', label: 'Row Number', value: 'row', format: 'number' },
    { key: 'values', label: 'Values', value: 'values', dynamicKey: true },
];
exports.sheetsCopyWorksheetActionOutputSchema = {
    fields: sheetPropertiesFields,
};
exports.sheetsCreateSpreadsheetActionOutputSchema = {
    fields: [{ key: 'id', label: 'Spreadsheet ID', value: 'id' }],
};
exports.sheetsDeleteDimensionActionOutputSchema = {
    fields: batchUpdateSuccessFields,
};
exports.sheetsDeleteMultipleRowsActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', value: 'success', format: 'boolean' },
        {
            key: 'deletedRanges',
            label: 'Deleted Ranges',
            value: 'deletedRanges',
            labelKey: 'startRow',
            listItems: [
                { key: 'startRow', label: 'Start Row', value: 'startRow', format: 'number' },
                { key: 'endRow', label: 'End Row', value: 'endRow', format: 'number' },
            ],
        },
    ],
};
exports.sheetsDeleteRowActionOutputSchema = {
    fields: [{ key: 'success', label: 'Success', value: 'success', format: 'boolean' }],
};
exports.sheetsDeleteWorksheetActionOutputSchema = {
    fields: [{ key: 'spreadsheetId', label: 'Spreadsheet ID', value: 'spreadsheetId' }],
};
exports.sheetsExportWorksheetActionOutputSchema = {
    fields: [
        { key: 'format', label: 'Format', value: 'format' },
        { key: 'filename', label: 'File Name', value: 'filename' },
        { key: 'file', label: 'File', value: 'file', format: 'url' },
        { key: 'text', label: 'Text', value: 'text' },
    ],
};
exports.sheetsFindOrCreateRowActionOutputSchema = {
    fields: [
        { key: 'found', label: 'Found', value: 'found', format: 'boolean' },
        { key: 'created', label: 'Created', value: 'created', format: 'boolean' },
        ...rowValuesFields,
    ],
};
exports.sheetsFindOrCreateWorksheetActionOutputSchema = {
    fields: [
        { key: 'found', label: 'Found', value: 'found', format: 'boolean' },
        { key: 'created', label: 'Created', value: 'created', format: 'boolean' },
        { key: 'worksheet', label: 'Worksheet', value: 'worksheet', children: sheetPropertiesFields },
    ],
};
exports.sheetsFindRowsActionOutputSchema = {
    itemLabel: 'Row {row}',
    fields: [
        {
            key: 'rows',
            label: 'Found Rows',
            value: '',
            listItems: rowValuesFields,
        },
    ],
};
exports.sheetsFindWorksheetActionOutputSchema = {
    fields: [
        { key: 'found', label: 'Found', value: 'found', format: 'boolean' },
        {
            key: 'worksheets',
            label: 'Worksheets',
            value: 'worksheets',
            labelKey: 'title',
            listItems: sheetPropertiesFields,
        },
    ],
};
exports.sheetsFormatCellsActionOutputSchema = {
    fields: batchUpdateSuccessFields,
};
exports.sheetsGetAllRowsActionOutputSchema = {
    fields: [
        {
            key: 'rows',
            label: 'Rows',
            value: 'rows',
            labelKey: 'row',
            listItems: rowValuesFields,
        },
        { key: 'count', label: 'Count', value: 'count', format: 'number' },
    ],
};
exports.sheetsGetNextRowsActionOutputSchema = {
    itemLabel: 'Row {row}',
    fields: [
        {
            key: 'rows',
            label: 'Rows',
            value: '',
            listItems: rowValuesFields,
        },
    ],
};
exports.sheetsGetRowActionOutputSchema = {
    fields: [
        { key: 'found', label: 'Found', value: 'found', format: 'boolean' },
        ...rowValuesFields,
    ],
};
const spreadsheetWorksheetSummaryFields = [
    { key: 'sheet_id', label: 'Worksheet ID', value: 'sheet_id', format: 'number' },
    { key: 'title', label: 'Title', value: 'title' },
    { key: 'index', label: 'Index', value: 'index', format: 'number' },
    { key: 'sheet_type', label: 'Sheet Type', value: 'sheet_type' },
    { key: 'row_count', label: 'Row Count', value: 'row_count', format: 'number' },
    { key: 'column_count', label: 'Column Count', value: 'column_count', format: 'number' },
];
exports.sheetsGetSpreadsheetActionOutputSchema = {
    fields: [
        { key: 'spreadsheet_id', label: 'Spreadsheet ID', value: 'spreadsheet_id' },
        { key: 'title', label: 'Title', value: 'title' },
        { key: 'locale', label: 'Locale', value: 'locale' },
        { key: 'time_zone', label: 'Time Zone', value: 'time_zone' },
        { key: 'url', label: 'Spreadsheet URL', value: 'url', format: 'url' },
        {
            key: 'worksheets',
            label: 'Worksheets',
            value: 'worksheets',
            labelKey: 'title',
            listItems: spreadsheetWorksheetSummaryFields,
        },
        { key: 'worksheet_count', label: 'Worksheet Count', value: 'worksheet_count', format: 'number' },
    ],
};
exports.sheetsGetValuesActionOutputSchema = {
    fields: [
        { key: 'range', label: 'Range', value: 'range' },
        { key: 'majorDimension', label: 'Major Dimension', value: 'majorDimension' },
        { key: 'values', label: 'Values', value: 'values' },
    ],
};
exports.sheetsInsertDimensionActionOutputSchema = {
    fields: batchUpdateSuccessFields,
};
exports.sheetsRenameWorksheetActionOutputSchema = {
    fields: [{ key: 'spreadsheetId', label: 'Spreadsheet ID', value: 'spreadsheetId' }],
};
exports.sheetsSearchSpreadsheetsActionOutputSchema = {
    fields: [
        { key: 'found', label: 'Found', value: 'found', format: 'boolean' },
        {
            key: 'spreadsheets',
            label: 'Spreadsheets',
            value: 'spreadsheets',
            labelKey: 'name',
            listItems: [
                { key: 'id', label: 'Spreadsheet ID', value: 'id' },
                { key: 'name', label: 'Name', value: 'name' },
                { key: 'webViewLink', label: 'Web View Link', value: 'webViewLink', format: 'url' },
                { key: 'createdTime', label: 'Created Time', value: 'createdTime', format: 'datetime' },
                { key: 'modifiedTime', label: 'Modified Time', value: 'modifiedTime', format: 'datetime' },
            ],
        },
    ],
};
exports.sheetsUpdateDimensionPropertiesActionOutputSchema = {
    fields: batchUpdateSuccessFields,
};
const batchUpdateValuesFields = [
    { key: 'spreadsheetId', label: 'Spreadsheet ID', value: 'spreadsheetId' },
    { key: 'totalUpdatedRows', label: 'Total Updated Rows', value: 'totalUpdatedRows', format: 'number' },
    {
        key: 'totalUpdatedColumns',
        label: 'Total Updated Columns',
        value: 'totalUpdatedColumns',
        format: 'number',
    },
    { key: 'totalUpdatedCells', label: 'Total Updated Cells', value: 'totalUpdatedCells', format: 'number' },
    {
        key: 'totalUpdatedSheets',
        label: 'Total Updated Sheets',
        value: 'totalUpdatedSheets',
        format: 'number',
    },
];
exports.sheetsUpdateMultipleRowsActionOutputSchema = {
    fields: batchUpdateValuesFields,
};
exports.sheetsUpdateRowActionOutputSchema = {
    fields: [
        { key: 'updates', label: 'Updates', value: 'updates', children: valuesUpdateFields },
        { key: 'row', label: 'Row Number', value: 'row', format: 'number' },
    ],
};
exports.sheetsUpdateSheetPropertiesActionOutputSchema = {
    fields: batchUpdateSuccessFields,
};
exports.sheetsUpdateValuesActionOutputSchema = {
    fields: [
        { key: 'updatedRange', label: 'Updated Range', value: 'updatedRange' },
        { key: 'updatedRows', label: 'Updated Rows', value: 'updatedRows', format: 'number' },
        { key: 'updatedColumns', label: 'Updated Columns', value: 'updatedColumns', format: 'number' },
        { key: 'updatedCells', label: 'Updated Cells', value: 'updatedCells', format: 'number' },
    ],
};
//# sourceMappingURL=output-schemas.js.map