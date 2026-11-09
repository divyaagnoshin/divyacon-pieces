"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedIssueTriggerOutputSchema = exports.newIssueTriggerOutputSchema = exports.addUserToTeamActionOutputSchema = exports.linkIssuesActionOutputSchema = exports.applyCommandActionOutputSchema = exports.getIssueHistoryActionOutputSchema = exports.deleteAttachmentActionOutputSchema = exports.downloadAttachmentActionOutputSchema = exports.uploadAttachmentActionOutputSchema = exports.listAttachmentsActionOutputSchema = exports.removeTagFromIssueActionOutputSchema = exports.listTagsActionOutputSchema = exports.addTagToIssueActionOutputSchema = exports.createTagActionOutputSchema = exports.listCommentsActionOutputSchema = exports.addCommentActionOutputSchema = exports.searchIssuesActionOutputSchema = exports.updateIssueActionOutputSchema = exports.getIssueActionOutputSchema = exports.createIssueActionOutputSchema = void 0;
// Shape returned by flattenIssue: nested objects become underscore-joined keys,
// and customFields keys vary per project, hence dynamicKey.
const issueFields = [
    { key: 'idReadable', label: 'Issue ID' },
    { key: 'summary', label: 'Summary' },
    { key: 'description', label: 'Description' },
    { key: 'id', label: 'Internal ID' },
    { key: 'project_id', label: 'Project ID' },
    { key: 'project_name', label: 'Project Name' },
    { key: 'project_shortName', label: 'Project Short Name' },
    { key: 'reporter_id', label: 'Reporter ID' },
    { key: 'reporter_name', label: 'Reporter Name' },
    { key: 'reporter_login', label: 'Reporter Login' },
    {
        key: 'customFields',
        label: 'Custom Fields',
        description: 'Custom field values keyed by field name (Priority, State, Assignee, Estimation, ...). The available keys depend on the project.',
        dynamicKey: true,
    },
    { key: 'created', label: 'Created', format: 'datetime' },
    { key: 'updated', label: 'Updated', format: 'datetime' },
    { key: 'resolved', label: 'Resolved', format: 'datetime' },
    { key: 'commentsCount', label: 'Comments Count', format: 'number' },
    { key: 'votes', label: 'Votes', format: 'number' },
];
const commentFields = [
    { key: 'id', label: 'Comment ID' },
    { key: 'text', label: 'Text' },
    { key: 'author_name', label: 'Author Name' },
    { key: 'author_login', label: 'Author Login' },
    { key: 'created', label: 'Created', format: 'datetime' },
];
const commentListFields = [
    ...commentFields,
    { key: 'updated', label: 'Updated', format: 'datetime' },
];
const attachmentFields = [
    { key: 'id', label: 'Attachment ID' },
    { key: 'name', label: 'File Name' },
    { key: 'content_type', label: 'Content Type' },
    { key: 'size_bytes', label: 'Size', format: 'filesize' },
    { key: 'author_name', label: 'Author Name' },
    { key: 'author_login', label: 'Author Login' },
    { key: 'created', label: 'Created', format: 'datetime' },
];
const uploadedAttachmentFields = [
    { key: 'id', label: 'Attachment ID' },
    { key: 'name', label: 'File Name' },
];
const tagBaseFields = [
    { key: 'id', label: 'Tag ID' },
    { key: 'name', label: 'Name' },
    { key: 'owner_id', label: 'Owner ID' },
    { key: 'owner_name', label: 'Owner Name' },
];
const activityFields = [
    { key: 'type', label: 'Activity Type' },
    { key: 'timestamp', label: 'Timestamp', format: 'datetime' },
    { key: 'author_name', label: 'Author Name' },
    { key: 'author_login', label: 'Author Login' },
    { key: 'added_values', label: 'Added Values' },
    { key: 'removed_values', label: 'Removed Values' },
    { key: 'comment_text', label: 'Comment Text' },
];
exports.createIssueActionOutputSchema = { fields: issueFields };
exports.getIssueActionOutputSchema = { fields: issueFields };
exports.updateIssueActionOutputSchema = { fields: issueFields };
exports.searchIssuesActionOutputSchema = {
    itemLabel: '{idReadable}: {summary}',
    fields: [
        { key: 'issues', label: 'Issues', value: '', listItems: issueFields },
    ],
};
exports.addCommentActionOutputSchema = { fields: commentFields };
exports.listCommentsActionOutputSchema = {
    itemLabel: '{author_name}: {text}',
    fields: [
        { key: 'comments', label: 'Comments', value: '', listItems: commentListFields },
    ],
};
exports.createTagActionOutputSchema = {
    fields: [
        ...tagBaseFields,
        { key: 'untagOnResolve', label: 'Remove When Resolved', format: 'boolean' },
    ],
};
exports.addTagToIssueActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Tag ID' },
        { key: 'name', label: 'Name' },
    ],
};
exports.listTagsActionOutputSchema = {
    itemLabel: '{name}',
    fields: [
        {
            key: 'tags',
            label: 'Tags',
            value: '',
            listItems: [
                ...tagBaseFields,
                { key: 'visible_for_name', label: 'Visible For' },
                { key: 'updateable_by_name', label: 'Updateable By' },
                { key: 'untag_on_resolve', label: 'Remove When Resolved', format: 'boolean' },
            ],
        },
    ],
};
exports.removeTagFromIssueActionOutputSchema = {
    fields: [{ key: 'success', label: 'Success', format: 'boolean' }],
};
exports.listAttachmentsActionOutputSchema = {
    itemLabel: '{name}',
    fields: [
        { key: 'attachments', label: 'Attachments', value: '', listItems: attachmentFields },
    ],
};
exports.uploadAttachmentActionOutputSchema = {
    itemLabel: '{name}',
    fields: [
        {
            key: 'attachments',
            label: 'Uploaded Attachments',
            value: '',
            listItems: uploadedAttachmentFields,
        },
    ],
};
exports.downloadAttachmentActionOutputSchema = {
    fields: [
        { key: 'file_name', label: 'File Name' },
        { key: 'attachment_id', label: 'Attachment ID' },
        { key: 'content_type', label: 'Content Type' },
        { key: 'size_bytes', label: 'Size', format: 'filesize' },
        { key: 'base64_content', label: 'Base64 Content' },
    ],
};
exports.deleteAttachmentActionOutputSchema = {
    fields: [{ key: 'success', label: 'Success', format: 'boolean' }],
};
exports.getIssueHistoryActionOutputSchema = {
    itemLabel: '{author_name}: {type}',
    fields: [
        { key: 'activities', label: 'Activities', value: '', listItems: activityFields },
    ],
};
exports.applyCommandActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'command', label: 'Command' },
    ],
};
exports.linkIssuesActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'link_type', label: 'Link Type' },
        { key: 'target_issue', label: 'Target Issue' },
    ],
};
exports.addUserToTeamActionOutputSchema = {
    fields: [
        { key: 'id', label: 'User ID' },
        { key: 'name', label: 'Name' },
        { key: 'login', label: 'Login' },
    ],
};
exports.newIssueTriggerOutputSchema = { fields: issueFields };
exports.updatedIssueTriggerOutputSchema = { fields: issueFields };
//# sourceMappingURL=output-schemas.js.map