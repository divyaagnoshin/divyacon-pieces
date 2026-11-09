"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUserTriggerOutputSchema = exports.newTeamCustomEmojiTriggerOutputSchema = exports.newSavedMessageTriggerOutputSchema = exports.newReactionRemovedTriggerOutputSchema = exports.newReactionAddedTriggerOutputSchema = exports.newModalInteractionTriggerOutputSchema = exports.newCommandInDirectMessageTriggerOutputSchema = exports.newCommandTriggerOutputSchema = exports.newMentionTriggerOutputSchema = exports.newMentionInDirectMessageTriggerOutputSchema = exports.newMessageInChannelTriggerOutputSchema = exports.newDirectMessageTriggerOutputSchema = exports.newMessageTriggerOutputSchema = exports.channelCreatedTriggerOutputSchema = exports.requestActionActionOutputSchema = exports.approvalActionOutputSchema = exports.updateGroupUsersActionOutputSchema = exports.listUserGroupsActionOutputSchema = exports.getGroupByHandleActionOutputSchema = exports.listCustomEmojiActionOutputSchema = exports.updateProfileActionOutputSchema = exports.getUserByIdActionOutputSchema = exports.listUsersActionOutputSchema = exports.findUserByHandleActionOutputSchema = exports.findUserByEmailActionOutputSchema = exports.listFilesActionOutputSchema = exports.getFileActionOutputSchema = exports.uploadFileActionOutputSchema = exports.listUserReactionsActionOutputSchema = exports.getReactionsActionOutputSchema = exports.permalinkActionOutputSchema = exports.ephemeralMessageActionOutputSchema = exports.listScheduledMessagesActionOutputSchema = exports.scheduleMessageActionOutputSchema = exports.searchAllActionOutputSchema = exports.searchMessagesActionOutputSchema = exports.channelHistoryActionOutputSchema = exports.threadRepliesActionOutputSchema = exports.getMessageActionOutputSchema = exports.chatUpdateOutputSchema = exports.chatPostMessageOutputSchema = exports.listChannelMembersActionOutputSchema = exports.listUserConversationsActionOutputSchema = exports.listChannelsActionOutputSchema = exports.findChannelActionOutputSchema = exports.joinChannelActionOutputSchema = exports.channelResponseOutputSchema = void 0;
const channelFields = [
    { key: 'id', label: 'Channel ID' },
    { key: 'name', label: 'Name' },
    { key: 'is_channel', label: 'Is Channel', format: 'boolean' },
    { key: 'is_group', label: 'Is Group', format: 'boolean' },
    { key: 'is_private', label: 'Is Private', format: 'boolean' },
    { key: 'is_archived', label: 'Is Archived', format: 'boolean' },
    { key: 'is_general', label: 'Is General', format: 'boolean' },
    { key: 'is_member', label: 'Is Member', format: 'boolean' },
    { key: 'is_shared', label: 'Is Shared', format: 'boolean' },
    { key: 'created', label: 'Created (Unix Timestamp)', format: 'number' },
    { key: 'creator', label: 'Creator User ID' },
    { key: 'num_members', label: 'Member Count', format: 'number' },
    {
        key: 'topic',
        label: 'Topic',
        children: [
            { key: 'value', label: 'Value' },
            { key: 'creator', label: 'Set By User ID' },
            { key: 'last_set', label: 'Last Set (Unix Timestamp)', format: 'number' },
        ],
    },
    {
        key: 'purpose',
        label: 'Purpose',
        children: [
            { key: 'value', label: 'Value' },
            { key: 'creator', label: 'Set By User ID' },
            { key: 'last_set', label: 'Last Set (Unix Timestamp)', format: 'number' },
        ],
    },
    { key: 'previous_names', label: 'Previous Names' },
];
exports.channelResponseOutputSchema = {
    fields: [{ key: 'channel', label: 'Channel', children: channelFields }],
};
exports.joinChannelActionOutputSchema = {
    fields: [
        { key: 'channel', label: 'Channel', children: channelFields },
        { key: 'warning', label: 'Warning' },
    ],
};
exports.findChannelActionOutputSchema = {
    fields: channelFields,
};
exports.listChannelsActionOutputSchema = {
    fields: [
        {
            key: 'channels',
            label: 'Channels',
            listItems: [
                { key: 'id', label: 'Channel ID' },
                { key: 'name', label: 'Name' },
                { key: 'is_private', label: 'Is Private', format: 'boolean' },
                { key: 'is_archived', label: 'Is Archived', format: 'boolean' },
                { key: 'is_member', label: 'Is Member', format: 'boolean' },
                { key: 'num_members', label: 'Member Count', format: 'number' },
            ],
            labelKey: 'name',
        },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
exports.listUserConversationsActionOutputSchema = {
    fields: [
        {
            key: 'channels',
            label: 'Channels',
            listItems: [
                { key: 'id', label: 'Channel ID' },
                { key: 'name', label: 'Name' },
                { key: 'is_private', label: 'Is Private', format: 'boolean' },
                { key: 'is_archived', label: 'Is Archived', format: 'boolean' },
                { key: 'is_im', label: 'Is Direct Message', format: 'boolean' },
            ],
            labelKey: 'name',
        },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
exports.listChannelMembersActionOutputSchema = {
    fields: [
        { key: 'members', label: 'Member User IDs' },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
const messageFields = [
    { key: 'ts', label: 'Timestamp' },
    { key: 'user', label: 'User ID' },
    { key: 'text', label: 'Text' },
    { key: 'type', label: 'Type' },
    { key: 'subtype', label: 'Subtype' },
    { key: 'bot_id', label: 'Bot ID' },
    { key: 'team', label: 'Team ID' },
    { key: 'thread_ts', label: 'Thread Timestamp' },
    { key: 'reply_count', label: 'Reply Count', format: 'number' },
    { key: 'reply_users_count', label: 'Reply Users Count', format: 'number' },
    { key: 'latest_reply', label: 'Latest Reply Timestamp' },
    { key: 'is_locked', label: 'Is Locked', format: 'boolean' },
    {
        key: 'edited',
        label: 'Edited',
        children: [
            { key: 'user', label: 'Edited By User ID' },
            { key: 'ts', label: 'Edited At (Timestamp)' },
        ],
    },
    {
        key: 'reactions',
        label: 'Reactions',
        listItems: [
            { key: 'name', label: 'Emoji Name' },
            { key: 'count', label: 'Count', format: 'number' },
        ],
        labelKey: 'name',
    },
];
exports.chatPostMessageOutputSchema = {
    fields: [
        { key: 'channel', label: 'Channel ID' },
        { key: 'ts', label: 'Timestamp' },
        { key: 'message', label: 'Message', children: messageFields },
    ],
};
exports.chatUpdateOutputSchema = {
    fields: [
        { key: 'channel', label: 'Channel ID' },
        { key: 'ts', label: 'Timestamp' },
        { key: 'text', label: 'Text' },
        { key: 'message', label: 'Message', children: messageFields },
    ],
};
exports.getMessageActionOutputSchema = {
    fields: [
        { key: 'messages', label: 'Messages', listItems: messageFields, labelKey: 'text' },
        { key: 'has_more', label: 'Has More', format: 'boolean' },
    ],
};
exports.threadRepliesActionOutputSchema = {
    fields: [
        { key: 'messages', label: 'Messages', listItems: messageFields, labelKey: 'text' },
        { key: 'has_more', label: 'Has More', format: 'boolean' },
    ],
};
exports.channelHistoryActionOutputSchema = {
    fields: [{ key: 'messages', value: '', label: 'Messages', listItems: messageFields, labelKey: 'text' }],
    itemLabel: '{fields.text}',
};
const searchMatchFields = [
    { key: 'ts', label: 'Timestamp' },
    { key: 'text', label: 'Text' },
    { key: 'user', label: 'User ID' },
    { key: 'username', label: 'Username' },
    { key: 'type', label: 'Type' },
    {
        key: 'channel',
        label: 'Channel',
        children: [
            { key: 'id', label: 'Channel ID' },
            { key: 'name', label: 'Name' },
            { key: 'is_private', label: 'Is Private', format: 'boolean' },
            { key: 'is_archived', label: 'Is Archived', format: 'boolean' },
        ],
    },
    { key: 'permalink', label: 'Permalink', format: 'url' },
    { key: 'score', label: 'Relevance Score', format: 'number' },
];
exports.searchMessagesActionOutputSchema = {
    fields: [{ key: 'matches', value: '', label: 'Matches', listItems: searchMatchFields, labelKey: 'text' }],
    itemLabel: '{fields.text}',
};
const fileFields = [
    { key: 'id', label: 'File ID' },
    { key: 'name', label: 'Name' },
    { key: 'title', label: 'Title' },
    { key: 'mimetype', label: 'MIME Type' },
    { key: 'filetype', label: 'File Type' },
    { key: 'pretty_type', label: 'Pretty Type' },
    { key: 'size', label: 'Size', format: 'filesize' },
    { key: 'user', label: 'Uploaded By User ID' },
    { key: 'created', label: 'Created (Unix Timestamp)', format: 'number' },
    { key: 'url_private', label: 'Private URL', format: 'url' },
    { key: 'url_private_download', label: 'Download URL', format: 'url' },
    { key: 'permalink', label: 'Permalink', format: 'url' },
    { key: 'permalink_public', label: 'Public Permalink', format: 'url' },
    { key: 'is_public', label: 'Is Public', format: 'boolean' },
    { key: 'is_external', label: 'Is External', format: 'boolean' },
];
exports.searchAllActionOutputSchema = {
    fields: [
        { key: 'messages', label: 'Messages', listItems: searchMatchFields, labelKey: 'text' },
        { key: 'files', label: 'Files', listItems: fileFields, labelKey: 'name' },
        { key: 'message_count', label: 'Message Count', format: 'number' },
        { key: 'file_count', label: 'File Count', format: 'number' },
    ],
};
exports.scheduleMessageActionOutputSchema = {
    fields: [
        { key: 'scheduled_message_id', label: 'Scheduled Message ID' },
        { key: 'channel', label: 'Channel ID' },
        { key: 'post_at', label: 'Post At (Unix Timestamp)', format: 'number' },
        { key: 'message', label: 'Message', children: messageFields },
    ],
};
exports.listScheduledMessagesActionOutputSchema = {
    fields: [
        {
            key: 'scheduled_messages',
            value: '',
            label: 'Scheduled Messages',
            listItems: [
                { key: 'id', label: 'Scheduled Message ID' },
                { key: 'channel_id', label: 'Channel ID' },
                { key: 'post_at', label: 'Post At (Unix Timestamp)', format: 'number' },
                { key: 'date_created', label: 'Created (Unix Timestamp)', format: 'number' },
                { key: 'text', label: 'Text' },
            ],
            labelKey: 'text',
        },
    ],
    itemLabel: '{fields.text}',
};
exports.ephemeralMessageActionOutputSchema = {
    fields: [{ key: 'message_ts', label: 'Message Timestamp' }],
};
exports.permalinkActionOutputSchema = {
    fields: [
        { key: 'channel', label: 'Channel ID' },
        { key: 'permalink', label: 'Permalink', format: 'url' },
    ],
};
exports.getReactionsActionOutputSchema = {
    fields: [
        { key: 'type', label: 'Item Type' },
        { key: 'channel', label: 'Channel ID' },
        {
            key: 'message',
            label: 'Message',
            children: [
                { key: 'ts', label: 'Timestamp' },
                { key: 'user', label: 'User ID' },
                { key: 'text', label: 'Text' },
                { key: 'permalink', label: 'Permalink', format: 'url' },
                {
                    key: 'reactions',
                    label: 'Reactions',
                    listItems: [
                        { key: 'name', label: 'Emoji Name' },
                        { key: 'count', label: 'Count', format: 'number' },
                    ],
                    labelKey: 'name',
                },
            ],
        },
        {
            key: 'file',
            label: 'File',
            children: [
                { key: 'id', label: 'File ID' },
                { key: 'name', label: 'Name' },
                {
                    key: 'reactions',
                    label: 'Reactions',
                    listItems: [
                        { key: 'name', label: 'Emoji Name' },
                        { key: 'count', label: 'Count', format: 'number' },
                    ],
                    labelKey: 'name',
                },
            ],
        },
    ],
};
exports.listUserReactionsActionOutputSchema = {
    fields: [
        {
            key: 'items',
            label: 'Items',
            listItems: [
                { key: 'type', label: 'Item Type' },
                { key: 'channel', label: 'Channel ID' },
                {
                    key: 'message',
                    label: 'Message',
                    children: [
                        { key: 'ts', label: 'Timestamp' },
                        { key: 'user', label: 'User ID' },
                        { key: 'text', label: 'Text' },
                    ],
                },
                {
                    key: 'file',
                    label: 'File',
                    children: [
                        { key: 'id', label: 'File ID' },
                        { key: 'name', label: 'Name' },
                    ],
                },
            ],
        },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
exports.uploadFileActionOutputSchema = {
    fields: [{ key: 'files', label: 'Files', listItems: fileFields, labelKey: 'name' }],
};
exports.getFileActionOutputSchema = {
    fields: [...fileFields, { key: 'data', label: 'File Data URL', format: 'url' }],
};
exports.listFilesActionOutputSchema = {
    fields: [
        { key: 'files', label: 'Files', listItems: fileFields, labelKey: 'name' },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
const userMemberFields = [
    { key: 'id', label: 'User ID' },
    { key: 'name', label: 'Username' },
    { key: 'real_name', label: 'Real Name' },
    { key: 'deleted', label: 'Deleted', format: 'boolean' },
    { key: 'is_admin', label: 'Is Admin', format: 'boolean' },
    { key: 'is_owner', label: 'Is Owner', format: 'boolean' },
    { key: 'is_bot', label: 'Is Bot', format: 'boolean' },
    { key: 'is_restricted', label: 'Is Restricted', format: 'boolean' },
    { key: 'tz', label: 'Timezone' },
    {
        key: 'profile',
        label: 'Profile',
        children: [
            { key: 'email', label: 'Email', format: 'email' },
            { key: 'real_name', label: 'Real Name' },
            { key: 'display_name', label: 'Display Name' },
            { key: 'title', label: 'Title' },
            { key: 'phone', label: 'Phone' },
            { key: 'image_192', label: 'Avatar', format: 'image' },
            { key: 'status_text', label: 'Status Text' },
            { key: 'status_emoji', label: 'Status Emoji' },
            { key: 'first_name', label: 'First Name' },
            { key: 'last_name', label: 'Last Name' },
        ],
    },
];
exports.findUserByEmailActionOutputSchema = {
    fields: [{ key: 'user', label: 'User', children: userMemberFields }],
};
exports.findUserByHandleActionOutputSchema = {
    fields: userMemberFields,
};
exports.listUsersActionOutputSchema = {
    fields: [
        { key: 'users', value: '', label: 'Users', listItems: userMemberFields, labelKey: 'real_name' },
    ],
    itemLabel: '{fields.real_name}',
};
const profileFields = [
    { key: 'real_name', label: 'Real Name' },
    { key: 'display_name', label: 'Display Name' },
    { key: 'email', label: 'Email', format: 'email' },
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'title', label: 'Title' },
    { key: 'phone', label: 'Phone' },
    { key: 'status_text', label: 'Status Text' },
    { key: 'status_emoji', label: 'Status Emoji' },
    { key: 'image_192', label: 'Avatar', format: 'image' },
    { key: 'team', label: 'Team ID' },
];
exports.getUserByIdActionOutputSchema = {
    fields: [{ key: 'profile', label: 'Profile', children: profileFields }],
};
exports.updateProfileActionOutputSchema = {
    fields: [{ key: 'profile', label: 'Profile', children: profileFields }],
};
exports.listCustomEmojiActionOutputSchema = {
    fields: [
        { key: 'emoji', label: 'Custom Emoji' },
        { key: 'count', label: 'Count', format: 'number' },
    ],
};
const usergroupFields = [
    { key: 'id', label: 'Group ID' },
    { key: 'team_id', label: 'Team ID' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'handle', label: 'Handle' },
    { key: 'is_external', label: 'Is External', format: 'boolean' },
    { key: 'date_create', label: 'Created (Unix Timestamp)', format: 'number' },
    { key: 'date_update', label: 'Updated (Unix Timestamp)', format: 'number' },
    { key: 'date_delete', label: 'Deleted (Unix Timestamp)', format: 'number' },
    { key: 'created_by', label: 'Created By User ID' },
    { key: 'updated_by', label: 'Updated By User ID' },
    { key: 'user_count', label: 'Member Count', format: 'number' },
    { key: 'users', label: 'Member User IDs' },
];
exports.getGroupByHandleActionOutputSchema = {
    fields: usergroupFields,
};
exports.listUserGroupsActionOutputSchema = {
    fields: [{ key: 'usergroups', label: 'User Groups', listItems: usergroupFields, labelKey: 'name' }],
};
exports.updateGroupUsersActionOutputSchema = {
    fields: [{ key: 'usergroup', label: 'User Group', children: usergroupFields }],
};
exports.approvalActionOutputSchema = {
    fields: [
        { key: 'approved', label: 'Approved', format: 'boolean' },
        { key: 'messageTs', label: 'Message Timestamp' },
    ],
};
exports.requestActionActionOutputSchema = {
    fields: [
        { key: 'action', label: 'Selected Action' },
        { key: 'payload', label: 'Payload' },
    ],
};
exports.channelCreatedTriggerOutputSchema = {
    fields: [
        { key: 'type', label: 'Event Type' },
        {
            key: 'channel',
            label: 'Channel',
            children: [
                { key: 'id', label: 'Channel ID' },
                { key: 'name', label: 'Name' },
                { key: 'created', label: 'Created (Unix Timestamp)', format: 'number' },
                { key: 'creator', label: 'Creator User ID' },
            ],
        },
        { key: 'event_ts', label: 'Event Timestamp' },
    ],
};
const messageEventFields = [
    { key: 'channel', label: 'Channel ID' },
    { key: 'channel_type', label: 'Channel Type' },
    { key: 'event_ts', label: 'Event Timestamp' },
    ...messageFields,
];
exports.newMessageTriggerOutputSchema = {
    fields: messageEventFields,
};
exports.newDirectMessageTriggerOutputSchema = {
    fields: messageEventFields,
};
exports.newMessageInChannelTriggerOutputSchema = {
    fields: messageEventFields,
};
exports.newMentionInDirectMessageTriggerOutputSchema = {
    fields: messageEventFields,
};
exports.newMentionTriggerOutputSchema = {
    fields: [...messageEventFields, { key: 'clean_text', label: 'Clean Text (Mentions Removed)' }],
};
const parsedCommandField = {
    key: 'parsed_command',
    label: 'Parsed Command',
    children: [
        { key: 'command', label: 'Command' },
        { key: 'args', label: 'Arguments' },
    ],
};
exports.newCommandTriggerOutputSchema = {
    fields: [...messageEventFields, parsedCommandField],
};
exports.newCommandInDirectMessageTriggerOutputSchema = {
    fields: [...messageEventFields, parsedCommandField],
};
exports.newModalInteractionTriggerOutputSchema = {
    fields: [
        { key: 'type', label: 'Interaction Type' },
        { key: 'trigger_id', label: 'Trigger ID' },
        { key: 'api_app_id', label: 'App ID' },
        {
            key: 'team',
            label: 'Team',
            children: [
                { key: 'id', label: 'Team ID' },
                { key: 'domain', label: 'Team Domain' },
            ],
        },
        {
            key: 'user',
            label: 'User',
            children: [
                { key: 'id', label: 'User ID' },
                { key: 'username', label: 'Username' },
                { key: 'name', label: 'Name' },
                { key: 'team_id', label: 'Team ID' },
            ],
        },
        {
            key: 'view',
            label: 'View',
            children: [
                { key: 'id', label: 'View ID' },
                { key: 'callback_id', label: 'Callback ID' },
                { key: 'private_metadata', label: 'Private Metadata' },
                {
                    key: 'state',
                    label: 'State',
                    children: [{ key: 'values', label: 'Submitted Values' }],
                },
                { key: 'hash', label: 'Hash' },
            ],
        },
    ],
};
const reactionEventFields = [
    { key: 'type', label: 'Event Type' },
    { key: 'user', label: 'User ID' },
    { key: 'reaction', label: 'Emoji Name' },
    { key: 'item_user', label: 'Item Owner User ID' },
    {
        key: 'item',
        label: 'Item',
        children: [
            { key: 'type', label: 'Item Type' },
            { key: 'channel', label: 'Channel ID' },
            { key: 'ts', label: 'Message Timestamp' },
        ],
    },
    { key: 'event_ts', label: 'Event Timestamp' },
];
exports.newReactionAddedTriggerOutputSchema = {
    fields: reactionEventFields,
};
exports.newReactionRemovedTriggerOutputSchema = {
    fields: reactionEventFields,
};
exports.newSavedMessageTriggerOutputSchema = {
    fields: [
        { key: 'type', label: 'Item Type' },
        { key: 'channel', label: 'Channel ID' },
        { key: 'message', label: 'Message', children: messageFields },
    ],
};
exports.newTeamCustomEmojiTriggerOutputSchema = {
    fields: [
        { key: 'id', label: 'Emoji Name' },
        { key: 'image', label: 'Image URL', format: 'url' },
    ],
};
exports.newUserTriggerOutputSchema = {
    fields: [{ key: 'team_id', label: 'Team ID' }, ...userMemberFields],
};
//# sourceMappingURL=output-schemas.js.map