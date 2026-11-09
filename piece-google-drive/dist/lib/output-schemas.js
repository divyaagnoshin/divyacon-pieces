"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driveEmptyTrashOutputSchema = exports.driveDeleteSharedDriveOutputSchema = exports.driveDeleteReplyOutputSchema = exports.driveExportWorkspaceFileOutputSchema = exports.driveDownloadFileOutputSchema = exports.driveUploadFromUrlOutputSchema = exports.driveUpdateSharedDriveOutputSchema = exports.driveCreateSharedDriveOutputSchema = exports.driveCreateFolderOutputSchema = exports.driveSaveFileAsPdfOutputSchema = exports.driveUpdateReplyOutputSchema = exports.driveListRepliesOutputSchema = exports.driveGetReplyOutputSchema = exports.driveCreateCommentOutputSchema = exports.driveCreateReplyOutputSchema = exports.driveListCommentsOutputSchema = exports.driveGetSharedDriveOutputSchema = exports.driveListSharedDrivesOutputSchema = exports.driveGetAboutOutputSchema = exports.driveReplaceFileContentOutputSchema = exports.driveUntrashFileOutputSchema = exports.driveTrashFileOutputSchema = exports.driveUpdatePermissionOutputSchema = exports.driveSetPublicAccessOutputSchema = exports.driveListPermissionsOutputSchema = exports.driveShareFileOutputSchema = exports.driveUpdateFileMetadataOutputSchema = exports.driveMoveFileOutputSchema = exports.driveCopyFileOutputSchema = exports.driveUploadFileOutputSchema = exports.driveCreateFileFromTextOutputSchema = exports.driveSearchFilesOutputSchema = exports.driveListFilesOutputSchema = exports.driveGetFileOutputSchema = exports.newFolderTriggerOutputSchema = exports.newFileTriggerOutputSchema = exports.trashGdriveFileActionOutputSchema = exports.deletePermissionsActionOutputSchema = exports.updatePermissionsActionOutputSchema = exports.setPublicAccessActionOutputSchema = exports.googleDriveMoveFileActionOutputSchema = exports.saveFileAsPdfActionOutputSchema = exports.duplicateFileActionOutputSchema = exports.searchFolderActionOutputSchema = exports.listFilesActionOutputSchema = exports.getFileOrFolderByIdActionOutputSchema = exports.readFileActionOutputSchema = exports.uploadGdriveFileActionOutputSchema = exports.createNewGdriveFileActionOutputSchema = exports.createNewGdriveFolderActionOutputSchema = void 0;
exports.driveRemovePermissionOutputSchema = void 0;
exports.createNewGdriveFolderActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'Folder Name',
        },
        {
            key: 'id',
            label: 'Folder ID',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.createNewGdriveFileActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.uploadGdriveFileActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.readFileActionOutputSchema = {
    fields: [
        {
            key: 'file',
            label: 'File URL',
            value: '',
            format: 'url',
        },
    ],
};
exports.getFileOrFolderByIdActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'Name',
        },
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.listFilesActionOutputSchema = {
    fields: [
        {
            key: 'files',
            label: 'Files',
            labelKey: 'name',
            listItems: [
                {
                    key: 'name',
                    label: 'Name',
                    value: 'name',
                },
                {
                    key: 'id',
                    label: 'File ID',
                    value: 'id',
                },
                {
                    key: 'mimeType',
                    label: 'MIME Type',
                    value: 'mimeType',
                },
                {
                    key: 'trashed',
                    label: 'Trashed',
                    value: 'trashed',
                    format: 'boolean',
                },
                {
                    key: 'parents',
                    label: 'Parent Folder ID',
                    value: 'parents[0]',
                },
            ],
        },
        {
            key: 'incompleteSearch',
            label: 'Incomplete Search',
            value: 'incompleteSearch',
            format: 'boolean',
        },
    ],
};
exports.searchFolderActionOutputSchema = {
    fields: [
        {
            key: 'results',
            label: 'Results',
            value: '',
            labelKey: 'name',
            listItems: [
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
                    key: 'id',
                    label: 'File ID',
                    value: 'id',
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
            ],
        },
    ],
};
exports.duplicateFileActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.saveFileAsPdfActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.googleDriveMoveFileActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
        {
            key: 'webContentLink',
            label: 'Download Link',
            format: 'url',
        },
        {
            key: 'iconLink',
            label: 'Icon',
            format: 'image',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
        },
        {
            key: 'fileExtension',
            label: 'File Extension',
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
            key: 'shared',
            label: 'Shared',
            format: 'boolean',
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
            key: 'parents',
            label: 'Parent Folder IDs',
        },
        {
            key: 'owners',
            label: 'Owners',
            labelKey: 'displayName',
            listItems: [
                {
                    key: 'displayName',
                    label: 'Name',
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
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
        {
            key: 'lastModifyingUser',
            label: 'Last Modifying User',
            children: [
                {
                    key: 'displayName',
                    label: 'Name',
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
                    label: 'Name',
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
exports.setPublicAccessActionOutputSchema = {
    fields: [
        {
            key: 'type',
            label: 'Type',
        },
        {
            key: 'role',
            label: 'Role',
        },
        {
            key: 'id',
            label: 'Permission ID',
        },
        {
            key: 'allowFileDiscovery',
            label: 'Allow File Discovery',
            format: 'boolean',
        },
        {
            key: 'downloadUrl',
            label: 'Download URL',
            format: 'url',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.updatePermissionsActionOutputSchema = {
    fields: [
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
};
exports.deletePermissionsActionOutputSchema = {
    fields: [
        {
            key: 'removed',
            label: 'Removed',
            value: 'removed',
            format: 'boolean',
        },
        {
            key: 'message',
            label: 'Message',
            value: 'message',
        },
    ],
};
exports.trashGdriveFileActionOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.newFileTriggerOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'webViewLink',
            label: 'View Link',
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
            key: 'id',
            label: 'File ID',
        },
    ],
};
exports.newFolderTriggerOutputSchema = {
    fields: [
        {
            key: 'name',
            label: 'Folder Name',
        },
        {
            key: 'id',
            label: 'Folder ID',
        },
        {
            key: 'createdTime',
            label: 'Created Time',
            format: 'datetime',
        },
    ],
};
const fileFieldsForGet = [
    {
        key: 'id',
        label: 'File ID',
    },
    {
        key: 'name',
        label: 'File Name',
    },
    {
        key: 'mimeType',
        label: 'MIME Type',
    },
    {
        key: 'size',
        label: 'Size',
        format: 'filesize',
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
        key: 'webViewLink',
        label: 'View Link',
        format: 'url',
    },
    {
        key: 'webContentLink',
        label: 'Download Link',
        format: 'url',
    },
    {
        key: 'iconLink',
        label: 'Icon',
        format: 'image',
    },
    {
        key: 'fileExtension',
        label: 'File Extension',
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
        key: 'shared',
        label: 'Shared',
        format: 'boolean',
    },
    {
        key: 'parents',
        label: 'Parent Folder IDs',
    },
    {
        key: 'owners',
        label: 'Owners',
        labelKey: 'displayName',
        listItems: [
            {
                key: 'displayName',
                label: 'Name',
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
            {
                key: 'me',
                label: 'Is Me',
                format: 'boolean',
            },
        ],
    },
    {
        key: 'lastModifyingUser',
        label: 'Last Modifying User',
        children: [
            {
                key: 'displayName',
                label: 'Name',
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
];
exports.driveGetFileOutputSchema = {
    fields: fileFieldsForGet,
};
exports.driveListFilesOutputSchema = {
    fields: [
        {
            key: 'files',
            label: 'Files',
            labelKey: 'name',
            listItems: [
                {
                    key: 'id',
                    label: 'File ID',
                },
                {
                    key: 'name',
                    label: 'File Name',
                },
                {
                    key: 'mimeType',
                    label: 'MIME Type',
                },
                {
                    key: 'size',
                    label: 'Size',
                    format: 'filesize',
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
                    key: 'webViewLink',
                    label: 'View Link',
                    format: 'url',
                },
                {
                    key: 'webContentLink',
                    label: 'Download Link',
                    format: 'url',
                },
                {
                    key: 'fileExtension',
                    label: 'File Extension',
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
                    key: 'shared',
                    label: 'Shared',
                    format: 'boolean',
                },
            ],
        },
        {
            key: 'incompleteSearch',
            label: 'Incomplete Search',
            format: 'boolean',
        },
    ],
};
exports.driveSearchFilesOutputSchema = {
    fields: [
        {
            key: 'files',
            label: 'Search Results',
            labelKey: 'name',
            listItems: [
                {
                    key: 'id',
                    label: 'File ID',
                },
                {
                    key: 'name',
                    label: 'File Name',
                },
                {
                    key: 'mimeType',
                    label: 'MIME Type',
                },
                {
                    key: 'size',
                    label: 'Size',
                    format: 'filesize',
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
                    key: 'webViewLink',
                    label: 'View Link',
                    format: 'url',
                },
                {
                    key: 'webContentLink',
                    label: 'Download Link',
                    format: 'url',
                },
                {
                    key: 'fileExtension',
                    label: 'File Extension',
                },
            ],
        },
    ],
};
exports.driveCreateFileFromTextOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
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
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
        {
            key: 'webContentLink',
            label: 'Download Link',
            format: 'url',
        },
        {
            key: 'fileExtension',
            label: 'File Extension',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
        },
        {
            key: 'parents',
            label: 'Parent Folder IDs',
        },
        {
            key: 'owners',
            label: 'Owners',
            labelKey: 'displayName',
            listItems: [
                {
                    key: 'displayName',
                    label: 'Name',
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
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
        {
            key: 'lastModifyingUser',
            label: 'Last Modifying User',
            children: [
                {
                    key: 'displayName',
                    label: 'Name',
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
            key: 'shared',
            label: 'Shared',
            format: 'boolean',
        },
    ],
};
exports.driveUploadFileOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
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
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
        {
            key: 'webContentLink',
            label: 'Download Link',
            format: 'url',
        },
        {
            key: 'iconLink',
            label: 'Icon',
            format: 'image',
        },
        {
            key: 'fileExtension',
            label: 'File Extension',
        },
        {
            key: 'parents',
            label: 'Parent Folder IDs',
        },
        {
            key: 'owners',
            label: 'Owners',
            labelKey: 'displayName',
            listItems: [
                {
                    key: 'displayName',
                    label: 'Name',
                },
                {
                    key: 'emailAddress',
                    label: 'Email',
                    format: 'email',
                },
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveCopyFileOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
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
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
        {
            key: 'webContentLink',
            label: 'Download Link',
            format: 'url',
        },
        {
            key: 'fileExtension',
            label: 'File Extension',
        },
        {
            key: 'parents',
            label: 'Parent Folder IDs',
        },
        {
            key: 'owners',
            label: 'Owners',
            labelKey: 'displayName',
            listItems: [
                {
                    key: 'displayName',
                    label: 'Name',
                },
                {
                    key: 'emailAddress',
                    label: 'Email',
                    format: 'email',
                },
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveMoveFileOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
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
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
        {
            key: 'webContentLink',
            label: 'Download Link',
            format: 'url',
        },
        {
            key: 'fileExtension',
            label: 'File Extension',
        },
        {
            key: 'parents',
            label: 'Parent Folder IDs',
        },
        {
            key: 'shared',
            label: 'Shared',
            format: 'boolean',
        },
        {
            key: 'owners',
            label: 'Owners',
            labelKey: 'displayName',
            listItems: [
                {
                    key: 'displayName',
                    label: 'Name',
                },
                {
                    key: 'emailAddress',
                    label: 'Email',
                    format: 'email',
                },
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveUpdateFileMetadataOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'description',
            label: 'Description',
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
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
        },
    ],
};
exports.driveShareFileOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Permission ID',
        },
        {
            key: 'type',
            label: 'Type',
        },
        {
            key: 'role',
            label: 'Role',
        },
        {
            key: 'emailAddress',
            label: 'Email Address',
            format: 'email',
        },
        {
            key: 'displayName',
            label: 'Display Name',
        },
        {
            key: 'photoLink',
            label: 'Photo',
            format: 'image',
        },
        {
            key: 'pendingOwner',
            label: 'Pending Owner',
            format: 'boolean',
        },
        {
            key: 'deleted',
            label: 'Deleted',
            format: 'boolean',
        },
        {
            key: 'permissionDetails',
            label: 'Permission Details',
            labelKey: 'role',
            listItems: [
                {
                    key: 'role',
                    label: 'Role',
                },
                {
                    key: 'permissionType',
                    label: 'Permission Type',
                },
                {
                    key: 'inherited',
                    label: 'Inherited',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveListPermissionsOutputSchema = {
    fields: [
        {
            key: 'permissions',
            label: 'Permissions',
            labelKey: 'displayName',
            listItems: [
                {
                    key: 'id',
                    label: 'Permission ID',
                },
                {
                    key: 'type',
                    label: 'Type',
                },
                {
                    key: 'role',
                    label: 'Role',
                },
                {
                    key: 'emailAddress',
                    label: 'Email Address',
                    format: 'email',
                },
                {
                    key: 'displayName',
                    label: 'Display Name',
                },
                {
                    key: 'photoLink',
                    label: 'Photo',
                    format: 'image',
                },
                {
                    key: 'deleted',
                    label: 'Deleted',
                    format: 'boolean',
                },
                {
                    key: 'pendingOwner',
                    label: 'Pending Owner',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveSetPublicAccessOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Permission ID',
        },
        {
            key: 'type',
            label: 'Type',
        },
        {
            key: 'role',
            label: 'Role',
        },
        {
            key: 'allowFileDiscovery',
            label: 'Allow File Discovery',
            format: 'boolean',
        },
        {
            key: 'permissionDetails',
            label: 'Permission Details',
            labelKey: 'role',
            listItems: [
                {
                    key: 'role',
                    label: 'Role',
                },
                {
                    key: 'permissionType',
                    label: 'Permission Type',
                },
                {
                    key: 'inherited',
                    label: 'Inherited',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveUpdatePermissionOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Permission ID',
        },
        {
            key: 'type',
            label: 'Type',
        },
        {
            key: 'role',
            label: 'Role',
        },
        {
            key: 'emailAddress',
            label: 'Email Address',
            format: 'email',
        },
        {
            key: 'displayName',
            label: 'Display Name',
        },
        {
            key: 'photoLink',
            label: 'Photo',
            format: 'image',
        },
    ],
};
exports.driveTrashFileOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'trashed',
            label: 'Trashed',
            format: 'boolean',
        },
        {
            key: 'modifiedTime',
            label: 'Modified Time',
            format: 'datetime',
        },
        {
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
    ],
};
exports.driveUntrashFileOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'trashed',
            label: 'Trashed',
            format: 'boolean',
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
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
    ],
};
exports.driveReplaceFileContentOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
        },
        {
            key: 'modifiedTime',
            label: 'Modified Time',
            format: 'datetime',
        },
        {
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
    ],
};
exports.driveGetAboutOutputSchema = {
    fields: [
        {
            key: 'user',
            label: 'Current User',
            children: [
                {
                    key: 'displayName',
                    label: 'Display Name',
                },
                {
                    key: 'emailAddress',
                    label: 'Email Address',
                    format: 'email',
                },
                {
                    key: 'photoLink',
                    label: 'Photo',
                    format: 'image',
                },
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
                {
                    key: 'permissionId',
                    label: 'Permission ID',
                },
            ],
        },
        {
            key: 'storageQuota',
            label: 'Storage Quota',
            children: [
                {
                    key: 'limit',
                    label: 'Total Limit',
                    format: 'filesize',
                },
                {
                    key: 'usage',
                    label: 'Used Space',
                    format: 'filesize',
                },
                {
                    key: 'usageInDrive',
                    label: 'Used in Drive',
                    format: 'filesize',
                },
                {
                    key: 'usageInDriveTrash',
                    label: 'Used in Trash',
                    format: 'filesize',
                },
            ],
        },
        {
            key: 'maxUploadSize',
            label: 'Max Upload Size',
            format: 'filesize',
        },
    ],
};
exports.driveListSharedDrivesOutputSchema = {
    fields: [
        {
            key: 'drives',
            label: 'Shared Drives',
            labelKey: 'name',
            listItems: [
                {
                    key: 'id',
                    label: 'Drive ID',
                },
                {
                    key: 'name',
                    label: 'Drive Name',
                },
                {
                    key: 'kind',
                    label: 'Kind',
                },
                {
                    key: 'colorRgb',
                    label: 'Color',
                },
                {
                    key: 'createdTime',
                    label: 'Created Time',
                    format: 'datetime',
                },
            ],
        },
    ],
};
exports.driveGetSharedDriveOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Drive ID',
        },
        {
            key: 'name',
            label: 'Drive Name',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
        {
            key: 'colorRgb',
            label: 'Color',
        },
        {
            key: 'createdTime',
            label: 'Created Time',
            format: 'datetime',
        },
        {
            key: 'restrictions',
            label: 'Restrictions',
            children: [
                {
                    key: 'adminManagedRestrictions',
                    label: 'Admin Managed',
                    format: 'boolean',
                },
                {
                    key: 'copyRequiresWriterPermission',
                    label: 'Copy Requires Writer Permission',
                    format: 'boolean',
                },
                {
                    key: 'domainUsersOnly',
                    label: 'Domain Users Only',
                    format: 'boolean',
                },
                {
                    key: 'driveMembersOnly',
                    label: 'Drive Members Only',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveListCommentsOutputSchema = {
    fields: [
        {
            key: 'comments',
            label: 'Comments',
            labelKey: 'content',
            listItems: [
                {
                    key: 'id',
                    label: 'Comment ID',
                },
                {
                    key: 'content',
                    label: 'Content',
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
                    key: 'author',
                    label: 'Author',
                    children: [
                        {
                            key: 'displayName',
                            label: 'Name',
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
            ],
        },
    ],
};
exports.driveCreateReplyOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Reply ID',
        },
        {
            key: 'content',
            label: 'Content',
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
            key: 'author',
            label: 'Author',
            children: [
                {
                    key: 'displayName',
                    label: 'Name',
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
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveCreateCommentOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Comment ID',
        },
        {
            key: 'content',
            label: 'Content',
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
            key: 'author',
            label: 'Author',
            children: [
                {
                    key: 'displayName',
                    label: 'Name',
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
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveGetReplyOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Reply ID',
        },
        {
            key: 'content',
            label: 'Content',
        },
        {
            key: 'htmlContent',
            label: 'HTML Content',
            format: 'html',
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
            key: 'deleted',
            label: 'Deleted',
            format: 'boolean',
        },
        {
            key: 'author',
            label: 'Author',
            children: [
                {
                    key: 'displayName',
                    label: 'Name',
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
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveListRepliesOutputSchema = {
    fields: [
        {
            key: 'replies',
            label: 'Replies',
            labelKey: 'content',
            listItems: [
                {
                    key: 'id',
                    label: 'Reply ID',
                },
                {
                    key: 'content',
                    label: 'Content',
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
                    key: 'deleted',
                    label: 'Deleted',
                    format: 'boolean',
                },
                {
                    key: 'author',
                    label: 'Author',
                    children: [
                        {
                            key: 'displayName',
                            label: 'Name',
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
            ],
        },
    ],
};
exports.driveUpdateReplyOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Reply ID',
        },
        {
            key: 'content',
            label: 'Content',
        },
        {
            key: 'modifiedTime',
            label: 'Modified Time',
            format: 'datetime',
        },
        {
            key: 'deleted',
            label: 'Deleted',
            format: 'boolean',
        },
        {
            key: 'author',
            label: 'Author',
            children: [
                {
                    key: 'displayName',
                    label: 'Name',
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
                {
                    key: 'me',
                    label: 'Is Me',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.driveSaveFileAsPdfOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'size',
            label: 'Size',
            format: 'filesize',
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
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
    ],
};
exports.driveCreateFolderOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Folder ID',
        },
        {
            key: 'name',
            label: 'Folder Name',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
        {
            key: 'createdTime',
            label: 'Created Time',
            format: 'datetime',
        },
        {
            key: 'parents',
            label: 'Parent Folder IDs',
        },
        {
            key: 'webViewLink',
            label: 'View Link',
            format: 'url',
        },
    ],
};
exports.driveCreateSharedDriveOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Drive ID',
        },
        {
            key: 'name',
            label: 'Drive Name',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
        {
            key: 'colorRgb',
            label: 'Color',
        },
        {
            key: 'createdTime',
            label: 'Created Time',
            format: 'datetime',
        },
    ],
};
exports.driveUpdateSharedDriveOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'Drive ID',
        },
        {
            key: 'name',
            label: 'Drive Name',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
        {
            key: 'colorRgb',
            label: 'Color',
        },
        {
            key: 'createdTime',
            label: 'Created Time',
            format: 'datetime',
        },
    ],
};
exports.driveUploadFromUrlOutputSchema = {
    fields: [
        {
            key: 'id',
            label: 'File ID',
        },
        {
            key: 'name',
            label: 'File Name',
        },
        {
            key: 'mimeType',
            label: 'MIME Type',
        },
        {
            key: 'kind',
            label: 'Kind',
        },
    ],
};
exports.driveDownloadFileOutputSchema = {
    fields: [
        {
            key: 'file',
            label: 'File URL',
            value: '',
            format: 'url',
        },
    ],
};
exports.driveExportWorkspaceFileOutputSchema = {
    fields: [
        {
            key: 'file',
            label: 'File URL',
            value: '',
            format: 'url',
        },
    ],
};
exports.driveDeleteReplyOutputSchema = {
    fields: [
        {
            key: 'success',
            label: 'Success',
            format: 'boolean',
        },
        {
            key: 'reply_id',
            label: 'Reply ID',
        },
    ],
};
exports.driveDeleteSharedDriveOutputSchema = {
    fields: [
        {
            key: 'deleted',
            label: 'Deleted',
            format: 'boolean',
        },
        {
            key: 'driveId',
            label: 'Drive ID',
        },
    ],
};
exports.driveEmptyTrashOutputSchema = {
    fields: [
        {
            key: 'success',
            label: 'Success',
            format: 'boolean',
        },
        {
            key: 'driveId',
            label: 'Drive ID',
        },
    ],
};
exports.driveRemovePermissionOutputSchema = {
    fields: [
        {
            key: 'removed',
            label: 'Removed',
            format: 'boolean',
        },
        {
            key: 'message',
            label: 'Message',
        },
    ],
};
//# sourceMappingURL=output-schemas.js.map