"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInviteLinkActionOutputSchema = exports.editMessageTextActionOutputSchema = exports.forwardMessageActionOutputSchema = exports.getFileActionOutputSchema = exports.requestApprovalMessageActionOutputSchema = exports.sendAudioActionOutputSchema = exports.sendDocumentActionOutputSchema = exports.sendMediaActionOutputSchema = exports.unpinMessageActionOutputSchema = exports.pinMessageActionOutputSchema = exports.getChatMemberActionOutputSchema = exports.getChatActionOutputSchema = exports.deleteMessageActionOutputSchema = exports.sendChatActionActionOutputSchema = exports.sendPollActionOutputSchema = exports.sendMediaGroupActionOutputSchema = exports.sendLocationActionOutputSchema = exports.sendTextMessageActionOutputSchema = exports.telegramAnswerCallbackQueryActionOutputSchema = exports.telegramCreateInviteLinkActionOutputSchema = exports.telegramEditMessageTextActionOutputSchema = exports.telegramForwardMessageActionOutputSchema = exports.telegramGetFileActionOutputSchema = exports.telegramGetBotInfoActionOutputSchema = exports.telegramGetChatMemberCountActionOutputSchema = exports.telegramGetChatAdministratorsActionOutputSchema = exports.telegramGetChatMemberActionOutputSchema = exports.telegramGetChatActionOutputSchema = exports.telegramUnpinMessageActionOutputSchema = exports.telegramPinMessageActionOutputSchema = exports.telegramDeleteMessageActionOutputSchema = exports.telegramSendChatActionActionOutputSchema = exports.telegramSendPollActionOutputSchema = exports.telegramSendMediaGroupActionOutputSchema = exports.telegramSendLocationActionOutputSchema = exports.telegramSendDocumentActionOutputSchema = exports.telegramSendAudioActionOutputSchema = exports.telegramSendPhotoOrVideoActionOutputSchema = exports.telegramSendMessageActionOutputSchema = void 0;
const telegramChatFields = [
    { key: 'id', label: 'Chat ID', value: 'id' },
    { key: 'type', label: 'Chat Type', value: 'type' },
    { key: 'title', label: 'Title', value: 'title' },
];
const telegramFromFields = [
    { key: 'id', label: 'Bot ID', value: 'id' },
    { key: 'username', label: 'Username', value: 'username' },
    { key: 'is_bot', label: 'Is Bot', value: 'is_bot', format: 'boolean' },
];
const telegramPhotoSizeFields = [
    { key: 'file_id', label: 'File ID', value: 'file_id' },
    { key: 'file_unique_id', label: 'File Unique ID', value: 'file_unique_id' },
    { key: 'width', label: 'Width', value: 'width', format: 'number' },
    { key: 'height', label: 'Height', value: 'height', format: 'number' },
    { key: 'file_size', label: 'File Size', value: 'file_size', format: 'filesize' },
];
const telegramVideoFields = [
    { key: 'file_id', label: 'File ID', value: 'file_id' },
    { key: 'file_unique_id', label: 'File Unique ID', value: 'file_unique_id' },
    { key: 'width', label: 'Width', value: 'width', format: 'number' },
    { key: 'height', label: 'Height', value: 'height', format: 'number' },
    { key: 'duration', label: 'Duration (s)', value: 'duration', format: 'number' },
    { key: 'file_name', label: 'File Name', value: 'file_name' },
    { key: 'mime_type', label: 'MIME Type', value: 'mime_type' },
    { key: 'file_size', label: 'File Size', value: 'file_size', format: 'filesize' },
];
const telegramAnimationFields = [
    { key: 'file_id', label: 'File ID', value: 'file_id' },
    { key: 'file_unique_id', label: 'File Unique ID', value: 'file_unique_id' },
    { key: 'width', label: 'Width', value: 'width', format: 'number' },
    { key: 'height', label: 'Height', value: 'height', format: 'number' },
    { key: 'duration', label: 'Duration (s)', value: 'duration', format: 'number' },
    { key: 'file_name', label: 'File Name', value: 'file_name' },
    { key: 'mime_type', label: 'MIME Type', value: 'mime_type' },
    { key: 'file_size', label: 'File Size', value: 'file_size', format: 'filesize' },
];
const telegramStickerFields = [
    { key: 'file_id', label: 'File ID', value: 'file_id' },
    { key: 'file_unique_id', label: 'File Unique ID', value: 'file_unique_id' },
    { key: 'width', label: 'Width', value: 'width', format: 'number' },
    { key: 'height', label: 'Height', value: 'height', format: 'number' },
    { key: 'emoji', label: 'Emoji', value: 'emoji' },
    { key: 'set_name', label: 'Sticker Set Name', value: 'set_name' },
    { key: 'file_size', label: 'File Size', value: 'file_size', format: 'filesize' },
];
const telegramAudioFields = [
    { key: 'file_id', label: 'File ID', value: 'file_id' },
    { key: 'file_unique_id', label: 'File Unique ID', value: 'file_unique_id' },
    { key: 'duration', label: 'Duration (s)', value: 'duration', format: 'number' },
    { key: 'performer', label: 'Performer', value: 'performer' },
    { key: 'title', label: 'Track Title', value: 'title' },
    { key: 'file_name', label: 'File Name', value: 'file_name' },
    { key: 'mime_type', label: 'MIME Type', value: 'mime_type' },
    { key: 'file_size', label: 'File Size', value: 'file_size', format: 'filesize' },
];
const telegramDocumentFields = [
    { key: 'file_id', label: 'File ID', value: 'file_id' },
    { key: 'file_unique_id', label: 'File Unique ID', value: 'file_unique_id' },
    { key: 'file_name', label: 'File Name', value: 'file_name' },
    { key: 'mime_type', label: 'MIME Type', value: 'mime_type' },
    { key: 'file_size', label: 'File Size', value: 'file_size', format: 'filesize' },
];
const telegramLocationFields = [
    { key: 'latitude', label: 'Latitude', value: 'latitude', format: 'number' },
    { key: 'longitude', label: 'Longitude', value: 'longitude', format: 'number' },
];
exports.telegramSendMessageActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        { key: 'message_id', label: 'Message ID', value: 'body.result.message_id' },
        { key: 'text', label: 'Message Text', value: 'body.result.text' },
        { key: 'date', label: 'Date', value: 'body.result.date', format: 'datetime' },
        { key: 'chat', label: 'Chat', value: 'body.result.chat', children: telegramChatFields },
        { key: 'from', label: 'From', value: 'body.result.from', children: telegramFromFields },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
exports.telegramSendPhotoOrVideoActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        { key: 'message_id', label: 'Message ID', value: 'body.result.message_id' },
        { key: 'caption', label: 'Caption', value: 'body.result.caption' },
        { key: 'date', label: 'Date', value: 'body.result.date', format: 'datetime' },
        {
            key: 'photo',
            label: 'Photo Sizes',
            value: 'body.result.photo',
            listItems: telegramPhotoSizeFields,
        },
        { key: 'video', label: 'Video', value: 'body.result.video', children: telegramVideoFields },
        {
            key: 'sticker',
            label: 'Sticker',
            value: 'body.result.sticker',
            children: telegramStickerFields,
        },
        {
            key: 'animation',
            label: 'Animation',
            value: 'body.result.animation',
            children: telegramAnimationFields,
        },
        { key: 'chat', label: 'Chat', value: 'body.result.chat', children: telegramChatFields },
        { key: 'from', label: 'From', value: 'body.result.from', children: telegramFromFields },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
exports.telegramSendAudioActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        { key: 'message_id', label: 'Message ID', value: 'body.result.message_id' },
        { key: 'caption', label: 'Caption', value: 'body.result.caption' },
        { key: 'date', label: 'Date', value: 'body.result.date', format: 'datetime' },
        { key: 'audio', label: 'Audio', value: 'body.result.audio', children: telegramAudioFields },
        { key: 'chat', label: 'Chat', value: 'body.result.chat', children: telegramChatFields },
        { key: 'from', label: 'From', value: 'body.result.from', children: telegramFromFields },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
exports.telegramSendDocumentActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        { key: 'message_id', label: 'Message ID', value: 'body.result.message_id' },
        { key: 'caption', label: 'Caption', value: 'body.result.caption' },
        { key: 'date', label: 'Date', value: 'body.result.date', format: 'datetime' },
        {
            key: 'document',
            label: 'Document',
            value: 'body.result.document',
            children: telegramDocumentFields,
        },
        { key: 'chat', label: 'Chat', value: 'body.result.chat', children: telegramChatFields },
        { key: 'from', label: 'From', value: 'body.result.from', children: telegramFromFields },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
exports.telegramSendLocationActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        { key: 'message_id', label: 'Message ID', value: 'body.result.message_id' },
        { key: 'date', label: 'Date', value: 'body.result.date', format: 'datetime' },
        {
            key: 'location',
            label: 'Location',
            value: 'body.result.location',
            children: telegramLocationFields,
        },
        { key: 'chat', label: 'Chat', value: 'body.result.chat', children: telegramChatFields },
        { key: 'from', label: 'From', value: 'body.result.from', children: telegramFromFields },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
const telegramMediaGroupItemFields = [
    { key: 'message_id', label: 'Message ID', value: 'message_id' },
    { key: 'caption', label: 'Caption', value: 'caption' },
    { key: 'media_group_id', label: 'Media Group ID', value: 'media_group_id' },
    { key: 'photo', label: 'Photo Sizes', value: 'photo', listItems: telegramPhotoSizeFields },
    { key: 'video', label: 'Video', value: 'video', children: telegramVideoFields },
    { key: 'audio', label: 'Audio', value: 'audio', children: telegramAudioFields },
    { key: 'document', label: 'Document', value: 'document', children: telegramDocumentFields },
    { key: 'chat', label: 'Chat', value: 'chat', children: telegramChatFields },
    { key: 'from', label: 'From', value: 'from', children: telegramFromFields },
];
const telegramPollOptionFields = [
    { key: 'text', label: 'Text', value: 'text' },
    { key: 'voter_count', label: 'Voter Count', value: 'voter_count', format: 'number' },
];
const telegramPollFields = [
    { key: 'id', label: 'Poll ID', value: 'id' },
    { key: 'question', label: 'Question', value: 'question' },
    {
        key: 'options',
        label: 'Options',
        value: 'options',
        labelKey: 'text',
        listItems: telegramPollOptionFields,
    },
    { key: 'total_voter_count', label: 'Total Voter Count', value: 'total_voter_count', format: 'number' },
    { key: 'is_closed', label: 'Is Closed', value: 'is_closed', format: 'boolean' },
    { key: 'is_anonymous', label: 'Is Anonymous', value: 'is_anonymous', format: 'boolean' },
    { key: 'type', label: 'Poll Type', value: 'type' },
    {
        key: 'allows_multiple_answers',
        label: 'Allows Multiple Answers',
        value: 'allows_multiple_answers',
        format: 'boolean',
    },
];
const telegramBooleanResultFields = [
    { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
    { key: 'result', label: 'Result', value: 'body.result', format: 'boolean' },
    { key: 'status', label: 'Status Code', value: 'status' },
];
exports.telegramSendMediaGroupActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        {
            key: 'result',
            label: 'Messages',
            value: 'body.result',
            listItems: telegramMediaGroupItemFields,
        },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
exports.telegramSendPollActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        { key: 'message_id', label: 'Message ID', value: 'body.result.message_id' },
        { key: 'date', label: 'Date', value: 'body.result.date', format: 'datetime' },
        { key: 'poll', label: 'Poll', value: 'body.result.poll', children: telegramPollFields },
        { key: 'chat', label: 'Chat', value: 'body.result.chat', children: telegramChatFields },
        { key: 'from', label: 'From', value: 'body.result.from', children: telegramFromFields },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
exports.telegramSendChatActionActionOutputSchema = {
    fields: telegramBooleanResultFields,
};
exports.telegramDeleteMessageActionOutputSchema = {
    fields: telegramBooleanResultFields,
};
exports.telegramPinMessageActionOutputSchema = {
    fields: telegramBooleanResultFields,
};
exports.telegramUnpinMessageActionOutputSchema = {
    fields: telegramBooleanResultFields,
};
const telegramChatFullInfoFields = [
    { key: 'id', label: 'Chat ID', value: 'id' },
    { key: 'type', label: 'Chat Type', value: 'type' },
    { key: 'title', label: 'Title', value: 'title' },
    { key: 'username', label: 'Username', value: 'username' },
    { key: 'first_name', label: 'First Name', value: 'first_name' },
    { key: 'last_name', label: 'Last Name', value: 'last_name' },
    { key: 'description', label: 'Description', value: 'description' },
    { key: 'invite_link', label: 'Invite Link', value: 'invite_link', format: 'url' },
];
exports.telegramGetChatActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'ok', format: 'boolean' },
        { key: 'result', label: 'Chat', value: 'result', children: telegramChatFullInfoFields },
    ],
};
const telegramChatMemberUserFields = [
    { key: 'id', label: 'User ID', value: 'id' },
    { key: 'is_bot', label: 'Is Bot', value: 'is_bot', format: 'boolean' },
    { key: 'first_name', label: 'First Name', value: 'first_name' },
    { key: 'username', label: 'Username', value: 'username' },
];
const telegramChatMemberFields = [
    { key: 'status', label: 'Status', value: 'status' },
    { key: 'user', label: 'User', value: 'user', children: telegramChatMemberUserFields },
    { key: 'is_anonymous', label: 'Is Anonymous', value: 'is_anonymous', format: 'boolean' },
    { key: 'can_pin_messages', label: 'Can Pin Messages', value: 'can_pin_messages', format: 'boolean' },
    { key: 'can_invite_users', label: 'Can Invite Users', value: 'can_invite_users', format: 'boolean' },
    {
        key: 'can_delete_messages',
        label: 'Can Delete Messages',
        value: 'can_delete_messages',
        format: 'boolean',
    },
];
exports.telegramGetChatMemberActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'ok', format: 'boolean' },
        { key: 'result', label: 'Member', value: 'result', children: telegramChatMemberFields },
    ],
};
exports.telegramGetChatAdministratorsActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'ok', format: 'boolean' },
        {
            key: 'result',
            label: 'Administrators',
            value: 'result',
            labelKey: 'status',
            listItems: telegramChatMemberFields,
        },
    ],
};
exports.telegramGetChatMemberCountActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'ok', format: 'boolean' },
        { key: 'result', label: 'Member Count', value: 'result', format: 'number' },
    ],
};
const telegramBotUserFields = [
    { key: 'id', label: 'Bot ID', value: 'id' },
    { key: 'is_bot', label: 'Is Bot', value: 'is_bot', format: 'boolean' },
    { key: 'first_name', label: 'First Name', value: 'first_name' },
    { key: 'username', label: 'Username', value: 'username' },
    { key: 'can_join_groups', label: 'Can Join Groups', value: 'can_join_groups', format: 'boolean' },
    {
        key: 'can_read_all_group_messages',
        label: 'Can Read All Group Messages',
        value: 'can_read_all_group_messages',
        format: 'boolean',
    },
    {
        key: 'supports_inline_queries',
        label: 'Supports Inline Queries',
        value: 'supports_inline_queries',
        format: 'boolean',
    },
];
exports.telegramGetBotInfoActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'ok', format: 'boolean' },
        { key: 'result', label: 'Bot', value: 'result', children: telegramBotUserFields },
    ],
};
const telegramGetFileInfoFields = [
    { key: 'file_id', label: 'File ID', value: 'file_id' },
    { key: 'file_unique_id', label: 'File Unique ID', value: 'file_unique_id' },
    { key: 'file_size', label: 'File Size', value: 'file_size', format: 'filesize' },
    { key: 'file_path', label: 'File Path', value: 'file_path' },
];
exports.telegramGetFileActionOutputSchema = {
    fields: [
        {
            key: 'file_info',
            label: 'File Info',
            value: 'file_info',
            children: telegramGetFileInfoFields,
        },
        { key: 'file_url', label: 'File URL', value: 'file_url', format: 'url' },
        { key: 'file_content_base64', label: 'File Content (Base64)', value: 'file_content_base64' },
    ],
};
exports.telegramForwardMessageActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        { key: 'message_id', label: 'Message ID', value: 'body.result.message_id' },
        { key: 'date', label: 'Date', value: 'body.result.date', format: 'datetime' },
        {
            key: 'forward_date',
            label: 'Forward Date',
            value: 'body.result.forward_date',
            format: 'datetime',
        },
        { key: 'chat', label: 'Chat', value: 'body.result.chat', children: telegramChatFields },
        { key: 'from', label: 'From', value: 'body.result.from', children: telegramFromFields },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
exports.telegramEditMessageTextActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'body.ok', format: 'boolean' },
        { key: 'message_id', label: 'Message ID', value: 'body.result.message_id' },
        { key: 'text', label: 'Message Text', value: 'body.result.text' },
        { key: 'date', label: 'Date', value: 'body.result.date', format: 'datetime' },
        { key: 'edit_date', label: 'Edit Date', value: 'body.result.edit_date', format: 'datetime' },
        { key: 'chat', label: 'Chat', value: 'body.result.chat', children: telegramChatFields },
        { key: 'from', label: 'From', value: 'body.result.from', children: telegramFromFields },
        { key: 'status', label: 'Status Code', value: 'status' },
    ],
};
const telegramInviteLinkCreatorFields = [
    { key: 'id', label: 'User ID', value: 'id' },
    { key: 'first_name', label: 'First Name', value: 'first_name' },
    { key: 'username', label: 'Username', value: 'username' },
];
const telegramInviteLinkFields = [
    { key: 'invite_link', label: 'Invite Link', value: 'invite_link', format: 'url' },
    { key: 'name', label: 'Name', value: 'name' },
    { key: 'creator', label: 'Creator', value: 'creator', children: telegramInviteLinkCreatorFields },
    {
        key: 'creates_join_request',
        label: 'Creates Join Request',
        value: 'creates_join_request',
        format: 'boolean',
    },
    { key: 'is_primary', label: 'Is Primary', value: 'is_primary', format: 'boolean' },
    { key: 'is_revoked', label: 'Is Revoked', value: 'is_revoked', format: 'boolean' },
];
exports.telegramCreateInviteLinkActionOutputSchema = {
    fields: [
        { key: 'ok', label: 'OK', value: 'ok', format: 'boolean' },
        { key: 'result', label: 'Invite Link', value: 'result', children: telegramInviteLinkFields },
    ],
};
exports.telegramAnswerCallbackQueryActionOutputSchema = {
    fields: telegramBooleanResultFields,
};
exports.sendTextMessageActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'text',
            label: 'Message Text',
            value: 'body.result.text',
        },
        {
            key: 'message_id',
            label: 'Message ID',
            value: 'body.result.message_id',
        },
        {
            key: 'date',
            label: 'Date',
            value: 'body.result.date',
            format: 'datetime',
        },
        {
            key: 'chat',
            label: 'Chat',
            value: 'body.result.chat',
            children: [
                {
                    key: 'id',
                    label: 'Chat ID',
                    value: 'id',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    value: 'last_name',
                },
                {
                    key: 'type',
                    label: 'Chat Type',
                    value: 'type',
                },
            ],
        },
        {
            key: 'from',
            label: 'From',
            value: 'body.result.from',
            children: [
                {
                    key: 'id',
                    label: 'Bot ID',
                    value: 'id',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'is_bot',
                    label: 'Is Bot',
                    value: 'is_bot',
                    format: 'boolean',
                },
            ],
        },
        {
            key: 'status',
            label: 'Status Code',
            value: 'status',
        },
    ],
};
exports.sendLocationActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'Success',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'message_id',
            label: 'Message ID',
            value: 'body.result.message_id',
        },
        {
            key: 'date',
            label: 'Sent Date',
            value: 'body.result.date',
            format: 'datetime',
        },
        {
            key: 'location',
            label: 'Location',
            value: 'body.result.location',
            children: [
                {
                    key: 'latitude',
                    label: 'Latitude',
                    value: 'latitude',
                    format: 'number',
                },
                {
                    key: 'longitude',
                    label: 'Longitude',
                    value: 'longitude',
                    format: 'number',
                },
            ],
        },
        {
            key: 'chat',
            label: 'Chat',
            value: 'body.result.chat',
            children: [
                {
                    key: 'id',
                    label: 'Chat ID',
                    value: 'id',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    value: 'last_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'type',
                    label: 'Type',
                    value: 'type',
                },
            ],
        },
        {
            key: 'from',
            label: 'From',
            value: 'body.result.from',
            children: [
                {
                    key: 'id',
                    label: 'Bot ID',
                    value: 'id',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'is_bot',
                    label: 'Is Bot',
                    value: 'is_bot',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.sendMediaGroupActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Messages',
            value: 'body.result',
            labelKey: 'caption',
            listItems: [
                {
                    key: 'message_id',
                    label: 'Message ID',
                    value: 'message_id',
                },
                {
                    key: 'caption',
                    label: 'Caption',
                    value: 'caption',
                },
                {
                    key: 'media_group_id',
                    label: 'Media Group ID',
                    value: 'media_group_id',
                },
                {
                    key: 'date',
                    label: 'Date',
                    value: 'date',
                    format: 'datetime',
                },
                {
                    key: 'chat',
                    label: 'Chat',
                    value: 'chat',
                    children: [
                        {
                            key: 'id',
                            label: 'Chat ID',
                            value: 'id',
                        },
                        {
                            key: 'first_name',
                            label: 'First Name',
                            value: 'first_name',
                        },
                        {
                            key: 'last_name',
                            label: 'Last Name',
                            value: 'last_name',
                        },
                        {
                            key: 'username',
                            label: 'Username',
                            value: 'username',
                        },
                        {
                            key: 'type',
                            label: 'Type',
                            value: 'type',
                        },
                    ],
                },
                {
                    key: 'from',
                    label: 'From',
                    value: 'from',
                    children: [
                        {
                            key: 'id',
                            label: 'Bot ID',
                            value: 'id',
                        },
                        {
                            key: 'first_name',
                            label: 'First Name',
                            value: 'first_name',
                        },
                        {
                            key: 'username',
                            label: 'Username',
                            value: 'username',
                        },
                        {
                            key: 'is_bot',
                            label: 'Is Bot',
                            value: 'is_bot',
                            format: 'boolean',
                        },
                    ],
                },
                {
                    key: 'photo',
                    label: 'Photo Sizes',
                    value: 'photo',
                    labelKey: 'width',
                    listItems: [
                        {
                            key: 'file_id',
                            label: 'File ID',
                            value: 'file_id',
                        },
                        {
                            key: 'file_unique_id',
                            label: 'File Unique ID',
                            value: 'file_unique_id',
                        },
                        {
                            key: 'width',
                            label: 'Width',
                            value: 'width',
                            format: 'number',
                        },
                        {
                            key: 'height',
                            label: 'Height',
                            value: 'height',
                            format: 'number',
                        },
                        {
                            key: 'file_size',
                            label: 'File Size',
                            value: 'file_size',
                            format: 'filesize',
                        },
                    ],
                },
            ],
        },
    ],
};
exports.sendPollActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'Success',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Result',
            value: 'body.result',
            children: [
                {
                    key: 'message_id',
                    label: 'Message ID',
                    value: 'message_id',
                },
                {
                    key: 'date',
                    label: 'Date',
                    value: 'date',
                    format: 'datetime',
                },
                {
                    key: 'chat',
                    label: 'Chat',
                    value: 'chat',
                    children: [
                        {
                            key: 'id',
                            label: 'Chat ID',
                            value: 'id',
                        },
                        {
                            key: 'first_name',
                            label: 'First Name',
                            value: 'first_name',
                        },
                        {
                            key: 'last_name',
                            label: 'Last Name',
                            value: 'last_name',
                        },
                        {
                            key: 'username',
                            label: 'Username',
                            value: 'username',
                        },
                        {
                            key: 'type',
                            label: 'Type',
                            value: 'type',
                        },
                    ],
                },
                {
                    key: 'from',
                    label: 'From',
                    value: 'from',
                    children: [
                        {
                            key: 'id',
                            label: 'Bot ID',
                            value: 'id',
                        },
                        {
                            key: 'first_name',
                            label: 'First Name',
                            value: 'first_name',
                        },
                        {
                            key: 'username',
                            label: 'Username',
                            value: 'username',
                        },
                        {
                            key: 'is_bot',
                            label: 'Is Bot',
                            value: 'is_bot',
                            format: 'boolean',
                        },
                    ],
                },
                {
                    key: 'poll',
                    label: 'Poll',
                    value: 'poll',
                    children: [
                        {
                            key: 'question',
                            label: 'Question',
                            value: 'question',
                        },
                        {
                            key: 'id',
                            label: 'Poll ID',
                            value: 'id',
                        },
                        {
                            key: 'type',
                            label: 'Type',
                            value: 'type',
                        },
                        {
                            key: 'total_voter_count',
                            label: 'Total Voter Count',
                            value: 'total_voter_count',
                            format: 'number',
                        },
                        {
                            key: 'is_closed',
                            label: 'Is Closed',
                            value: 'is_closed',
                            format: 'boolean',
                        },
                        {
                            key: 'is_anonymous',
                            label: 'Is Anonymous',
                            value: 'is_anonymous',
                            format: 'boolean',
                        },
                        {
                            key: 'allows_multiple_answers',
                            label: 'Allows Multiple Answers',
                            value: 'allows_multiple_answers',
                            format: 'boolean',
                        },
                        {
                            key: 'allows_revoting',
                            label: 'Allows Revoting',
                            value: 'allows_revoting',
                            format: 'boolean',
                        },
                        {
                            key: 'options',
                            label: 'Options',
                            value: 'options',
                            labelKey: 'text',
                            listItems: [
                                {
                                    key: 'text',
                                    label: 'Text',
                                    value: 'text',
                                },
                                {
                                    key: 'persistent_id',
                                    label: 'Option ID',
                                    value: 'persistent_id',
                                },
                                {
                                    key: 'voter_count',
                                    label: 'Voter Count',
                                    value: 'voter_count',
                                    format: 'number',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
exports.sendChatActionActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Result',
            value: 'body.result',
            format: 'boolean',
        },
        {
            key: 'status',
            label: 'Status Code',
            value: 'status',
        },
    ],
};
exports.deleteMessageActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Result',
            value: 'body.result',
            format: 'boolean',
        },
        {
            key: 'status',
            label: 'Status',
            value: 'status',
        },
    ],
};
exports.getChatActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'Success',
            value: 'ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Chat',
            value: 'result',
            children: [
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    value: 'last_name',
                },
                {
                    key: 'type',
                    label: 'Chat Type',
                    value: 'type',
                },
                {
                    key: 'id',
                    label: 'Chat ID',
                    value: 'id',
                },
                {
                    key: 'max_reaction_count',
                    label: 'Max Reaction Count',
                    value: 'max_reaction_count',
                    format: 'number',
                },
                {
                    key: 'can_send_gift',
                    label: 'Can Send Gift',
                    value: 'can_send_gift',
                    format: 'boolean',
                },
                {
                    key: 'active_usernames',
                    label: 'Active Usernames',
                    value: 'active_usernames',
                },
                {
                    key: 'accepted_gift_types',
                    label: 'Accepted Gift Types',
                    value: 'accepted_gift_types',
                    children: [
                        {
                            key: 'unlimited_gifts',
                            label: 'Unlimited Gifts',
                            value: 'unlimited_gifts',
                            format: 'boolean',
                        },
                        {
                            key: 'limited_gifts',
                            label: 'Limited Gifts',
                            value: 'limited_gifts',
                            format: 'boolean',
                        },
                        {
                            key: 'unique_gifts',
                            label: 'Unique Gifts',
                            value: 'unique_gifts',
                            format: 'boolean',
                        },
                        {
                            key: 'premium_subscription',
                            label: 'Premium Subscription',
                            value: 'premium_subscription',
                            format: 'boolean',
                        },
                        {
                            key: 'gifts_from_channels',
                            label: 'Gifts From Channels',
                            value: 'gifts_from_channels',
                            format: 'boolean',
                        },
                    ],
                },
            ],
        },
    ],
};
exports.getChatMemberActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Member',
            value: 'result',
            children: [
                {
                    key: 'status',
                    label: 'Status',
                    value: 'status',
                },
                {
                    key: 'user',
                    label: 'User',
                    value: 'user',
                    children: [
                        {
                            key: 'first_name',
                            label: 'First Name',
                            value: 'first_name',
                        },
                        {
                            key: 'last_name',
                            label: 'Last Name',
                            value: 'last_name',
                        },
                        {
                            key: 'username',
                            label: 'Username',
                            value: 'username',
                        },
                        {
                            key: 'id',
                            label: 'User ID',
                            value: 'id',
                        },
                        {
                            key: 'is_bot',
                            label: 'Is Bot',
                            value: 'is_bot',
                            format: 'boolean',
                        },
                        {
                            key: 'language_code',
                            label: 'Language Code',
                            value: 'language_code',
                        },
                    ],
                },
            ],
        },
    ],
};
exports.pinMessageActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Result',
            value: 'body.result',
            format: 'boolean',
        },
        {
            key: 'status',
            label: 'Status Code',
            value: 'status',
        },
    ],
};
exports.unpinMessageActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Result',
            value: 'body.result',
            format: 'boolean',
        },
        {
            key: 'status',
            label: 'Status Code',
            value: 'status',
        },
    ],
};
exports.sendMediaActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'message_id',
            label: 'Message ID',
            value: 'body.result.message_id',
        },
        {
            key: 'date',
            label: 'Date',
            value: 'body.result.date',
            format: 'datetime',
        },
        {
            key: 'from',
            label: 'From',
            value: 'body.result.from',
            children: [
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'is_bot',
                    label: 'Is Bot',
                    value: 'is_bot',
                    format: 'boolean',
                },
                {
                    key: 'id',
                    label: 'ID',
                    value: 'id',
                },
            ],
        },
        {
            key: 'chat',
            label: 'Chat',
            value: 'body.result.chat',
            children: [
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    value: 'last_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'type',
                    label: 'Type',
                    value: 'type',
                },
                {
                    key: 'id',
                    label: 'Chat ID',
                    value: 'id',
                },
            ],
        },
        {
            key: 'photo',
            label: 'Photo',
            value: 'body.result.photo',
            labelKey: 'width',
            listItems: [
                {
                    key: 'file_id',
                    label: 'File ID',
                    value: 'file_id',
                },
                {
                    key: 'file_unique_id',
                    label: 'File Unique ID',
                    value: 'file_unique_id',
                },
                {
                    key: 'width',
                    label: 'Width',
                    value: 'width',
                    format: 'number',
                },
                {
                    key: 'height',
                    label: 'Height',
                    value: 'height',
                    format: 'number',
                },
                {
                    key: 'file_size',
                    label: 'File Size',
                    value: 'file_size',
                    format: 'filesize',
                },
            ],
        },
    ],
};
exports.sendDocumentActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'message_id',
            label: 'Message ID',
            value: 'body.result.message_id',
        },
        {
            key: 'date',
            label: 'Date',
            value: 'body.result.date',
            format: 'datetime',
        },
        {
            key: 'chat',
            label: 'Chat',
            value: 'body.result.chat',
            children: [
                {
                    key: 'id',
                    label: 'Chat ID',
                    value: 'id',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    value: 'last_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'type',
                    label: 'Type',
                    value: 'type',
                },
            ],
        },
        {
            key: 'from',
            label: 'From',
            value: 'body.result.from',
            children: [
                {
                    key: 'id',
                    label: 'Bot ID',
                    value: 'id',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'is_bot',
                    label: 'Is Bot',
                    value: 'is_bot',
                    format: 'boolean',
                },
            ],
        },
        {
            key: 'document',
            label: 'Document',
            value: 'body.result.document',
            children: [
                {
                    key: 'file_name',
                    label: 'File Name',
                    value: 'file_name',
                },
                {
                    key: 'mime_type',
                    label: 'MIME Type',
                    value: 'mime_type',
                },
                {
                    key: 'file_size',
                    label: 'File Size',
                    value: 'file_size',
                    format: 'filesize',
                },
                {
                    key: 'file_id',
                    label: 'File ID',
                    value: 'file_id',
                },
                {
                    key: 'file_unique_id',
                    label: 'File Unique ID',
                    value: 'file_unique_id',
                },
            ],
        },
    ],
};
exports.sendAudioActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'message_id',
            label: 'Message ID',
            value: 'body.result.message_id',
        },
        {
            key: 'date',
            label: 'Sent Date',
            value: 'body.result.date',
            format: 'datetime',
        },
        {
            key: 'audio',
            label: 'Audio',
            value: 'body.result.audio',
            children: [
                {
                    key: 'file_name',
                    label: 'File Name',
                    value: 'file_name',
                },
                {
                    key: 'duration',
                    label: 'Duration',
                    value: 'duration',
                    format: 'duration',
                },
                {
                    key: 'mime_type',
                    label: 'MIME Type',
                    value: 'mime_type',
                },
                {
                    key: 'file_size',
                    label: 'File Size',
                    value: 'file_size',
                    format: 'filesize',
                },
                {
                    key: 'file_id',
                    label: 'File ID',
                    value: 'file_id',
                },
                {
                    key: 'file_unique_id',
                    label: 'File Unique ID',
                    value: 'file_unique_id',
                },
            ],
        },
        {
            key: 'chat',
            label: 'Chat',
            value: 'body.result.chat',
            children: [
                {
                    key: 'id',
                    label: 'Chat ID',
                    value: 'id',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    value: 'last_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'type',
                    label: 'Type',
                    value: 'type',
                },
            ],
        },
        {
            key: 'from',
            label: 'From',
            value: 'body.result.from',
            children: [
                {
                    key: 'id',
                    label: 'Bot ID',
                    value: 'id',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'is_bot',
                    label: 'Is Bot',
                    value: 'is_bot',
                    format: 'boolean',
                },
            ],
        },
    ],
};
exports.requestApprovalMessageActionOutputSchema = {
    fields: [
        {
            key: 'approved',
            label: 'Approved',
            format: 'boolean',
        },
        {
            key: 'chatId',
            label: 'Chat ID',
        },
    ],
};
exports.getFileActionOutputSchema = {
    fields: [
        {
            key: 'file_url',
            label: 'File URL',
            value: 'file_url',
            format: 'url',
        },
        {
            key: 'file_info',
            label: 'File Info',
            value: 'file_info',
            children: [
                {
                    key: 'file_path',
                    label: 'File Path',
                    value: 'file_path',
                },
                {
                    key: 'file_size',
                    label: 'File Size',
                    value: 'file_size',
                    format: 'filesize',
                },
                {
                    key: 'file_id',
                    label: 'File ID',
                    value: 'file_id',
                },
                {
                    key: 'file_unique_id',
                    label: 'File Unique ID',
                    value: 'file_unique_id',
                },
            ],
        },
    ],
};
exports.forwardMessageActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'text',
            label: 'Message Text',
            value: 'body.result.text',
        },
        {
            key: 'message_id',
            label: 'Message ID',
            value: 'body.result.message_id',
        },
        {
            key: 'date',
            label: 'Date',
            value: 'body.result.date',
            format: 'datetime',
        },
        {
            key: 'forward_date',
            label: 'Forward Date',
            value: 'body.result.forward_date',
            format: 'datetime',
        },
        {
            key: 'chat',
            label: 'Chat',
            value: 'body.result.chat',
            children: [
                {
                    key: 'id',
                    label: 'Chat ID',
                    value: 'id',
                },
                {
                    key: 'type',
                    label: 'Type',
                    value: 'type',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'last_name',
                    label: 'Last Name',
                    value: 'last_name',
                },
            ],
        },
        {
            key: 'from',
            label: 'From',
            value: 'body.result.from',
            children: [
                {
                    key: 'id',
                    label: 'User ID',
                    value: 'id',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'is_bot',
                    label: 'Is Bot',
                    value: 'is_bot',
                    format: 'boolean',
                },
            ],
        },
        {
            key: 'forward_from',
            label: 'Forward From',
            value: 'body.result.forward_from',
            children: [
                {
                    key: 'id',
                    label: 'User ID',
                    value: 'id',
                },
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'is_bot',
                    label: 'Is Bot',
                    value: 'is_bot',
                    format: 'boolean',
                },
            ],
        },
        {
            key: 'forward_origin',
            label: 'Forward Origin',
            value: 'body.result.forward_origin',
            children: [
                {
                    key: 'type',
                    label: 'Type',
                    value: 'type',
                },
                {
                    key: 'date',
                    label: 'Date',
                    value: 'date',
                    format: 'datetime',
                },
                {
                    key: 'sender_user',
                    label: 'Sender User',
                    value: 'sender_user',
                    children: [
                        {
                            key: 'id',
                            label: 'User ID',
                            value: 'id',
                        },
                        {
                            key: 'first_name',
                            label: 'First Name',
                            value: 'first_name',
                        },
                        {
                            key: 'username',
                            label: 'Username',
                            value: 'username',
                        },
                    ],
                },
            ],
        },
    ],
};
exports.editMessageTextActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'body.ok',
            format: 'boolean',
        },
        {
            key: 'result',
            label: 'Result',
            value: 'body.result',
            children: [
                {
                    key: 'text',
                    label: 'Message Text',
                    value: 'text',
                },
                {
                    key: 'message_id',
                    label: 'Message ID',
                    value: 'message_id',
                },
                {
                    key: 'date',
                    label: 'Sent Date',
                    value: 'date',
                    format: 'datetime',
                },
                {
                    key: 'edit_date',
                    label: 'Edit Date',
                    value: 'edit_date',
                    format: 'datetime',
                },
                {
                    key: 'from',
                    label: 'From',
                    value: 'from',
                    children: [
                        {
                            key: 'first_name',
                            label: 'First Name',
                            value: 'first_name',
                        },
                        {
                            key: 'username',
                            label: 'Username',
                            value: 'username',
                        },
                        {
                            key: 'id',
                            label: 'User ID',
                            value: 'id',
                        },
                        {
                            key: 'is_bot',
                            label: 'Is Bot',
                            value: 'is_bot',
                            format: 'boolean',
                        },
                    ],
                },
                {
                    key: 'chat',
                    label: 'Chat',
                    value: 'chat',
                    children: [
                        {
                            key: 'first_name',
                            label: 'First Name',
                            value: 'first_name',
                        },
                        {
                            key: 'last_name',
                            label: 'Last Name',
                            value: 'last_name',
                        },
                        {
                            key: 'username',
                            label: 'Username',
                            value: 'username',
                        },
                        {
                            key: 'type',
                            label: 'Chat Type',
                            value: 'type',
                        },
                        {
                            key: 'id',
                            label: 'Chat ID',
                            value: 'id',
                        },
                    ],
                },
            ],
        },
        {
            key: 'status',
            label: 'Status Code',
            value: 'status',
        },
    ],
};
exports.createInviteLinkActionOutputSchema = {
    fields: [
        {
            key: 'ok',
            label: 'OK',
            value: 'ok',
            format: 'boolean',
        },
        {
            key: 'invite_link',
            label: 'Invite Link',
            value: 'result.invite_link',
            format: 'url',
        },
        {
            key: 'name',
            label: 'Name',
            value: 'result.name',
        },
        {
            key: 'creates_join_request',
            label: 'Creates Join Request',
            value: 'result.creates_join_request',
            format: 'boolean',
        },
        {
            key: 'is_primary',
            label: 'Is Primary',
            value: 'result.is_primary',
            format: 'boolean',
        },
        {
            key: 'is_revoked',
            label: 'Is Revoked',
            value: 'result.is_revoked',
            format: 'boolean',
        },
        {
            key: 'creator',
            label: 'Creator',
            value: 'result.creator',
            children: [
                {
                    key: 'first_name',
                    label: 'First Name',
                    value: 'first_name',
                },
                {
                    key: 'username',
                    label: 'Username',
                    value: 'username',
                },
                {
                    key: 'id',
                    label: 'Creator ID',
                    value: 'id',
                },
                {
                    key: 'is_bot',
                    label: 'Is Bot',
                    value: 'is_bot',
                    format: 'boolean',
                },
            ],
        },
    ],
};
//# sourceMappingURL=output-schemas.js.map