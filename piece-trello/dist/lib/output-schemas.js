"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deadlineTriggerOutputSchema = exports.newCardTriggerOutputSchema = exports.cardMovedTriggerOutputSchema = exports.addCardAttachmentActionOutputSchema = exports.getCardAttachmentsActionOutputSchema = exports.getCardAttachmentActionOutputSchema = exports.updateCardActionOutputSchema = exports.getCardActionOutputSchema = exports.createCardActionOutputSchema = exports.archiveBoardActionOutputSchema = exports.updateBoardActionOutputSchema = exports.addReactionToCommentActionOutputSchema = exports.setChecklistItemStateActionOutputSchema = exports.listCardChecklistsActionOutputSchema = exports.addChecklistItemActionOutputSchema = exports.addChecklistToCardActionOutputSchema = exports.getMyMemberActionOutputSchema = exports.getMemberActionOutputSchema = exports.listBoardMembersActionOutputSchema = exports.listOrganizationBoardsActionOutputSchema = exports.listBoardsActionOutputSchema = exports.getBoardActionOutputSchema = exports.createBoardActionOutputSchema = exports.archiveListActionOutputSchema = exports.renameListActionOutputSchema = exports.listListsActionOutputSchema = exports.getListActionOutputSchema = exports.createListActionOutputSchema = exports.archiveCardActionOutputSchema = exports.moveCardActionOutputSchema = exports.addLabelToCardActionOutputSchema = exports.listBoardLabelsActionOutputSchema = exports.updateLabelActionOutputSchema = exports.createBoardLabelActionOutputSchema = exports.removeMemberFromCardActionOutputSchema = exports.addMemberToCardActionOutputSchema = exports.updateCommentActionOutputSchema = exports.listCardCommentsActionOutputSchema = exports.addCommentToCardActionOutputSchema = exports.listCardMembersActionOutputSchema = exports.listCardsInBoardActionOutputSchema = exports.listCardsInListActionOutputSchema = exports.searchMembersActionOutputSchema = exports.searchCardsActionOutputSchema = exports.listCardAttachmentsAiActionOutputSchema = exports.updateCardAiActionOutputSchema = exports.getCardAiActionOutputSchema = exports.createCardAiActionOutputSchema = void 0;
const labelFields = [
    { key: 'id', label: 'Label ID' },
    { key: 'name', label: 'Name' },
    { key: 'color', label: 'Color' },
];
const boardLabelFields = [
    ...labelFields,
    { key: 'idBoard', label: 'Board ID' },
    { key: 'uses', label: 'Uses', format: 'number' },
];
const cardFields = [
    { key: 'id', label: 'Card ID' },
    { key: 'name', label: 'Name' },
    { key: 'desc', label: 'Description' },
    { key: 'url', label: 'URL', format: 'url' },
    { key: 'shortUrl', label: 'Short URL', format: 'url' },
    { key: 'closed', label: 'Archived', format: 'boolean' },
    { key: 'due', label: 'Due Date', format: 'datetime' },
    { key: 'dueComplete', label: 'Due Complete', format: 'boolean' },
    { key: 'dateLastActivity', label: 'Last Activity', format: 'datetime' },
    { key: 'idBoard', label: 'Board ID' },
    { key: 'idList', label: 'List ID' },
    { key: 'idMembers', label: 'Member IDs' },
    { key: 'idChecklists', label: 'Checklist IDs' },
    { key: 'labels', label: 'Labels', labelKey: 'name', listItems: labelFields },
];
const attachmentFields = [
    { key: 'id', label: 'Attachment ID' },
    { key: 'name', label: 'Name' },
    { key: 'url', label: 'URL', format: 'url' },
    { key: 'mimeType', label: 'MIME Type' },
    { key: 'bytes', label: 'Size (Bytes)', format: 'filesize' },
    { key: 'isUpload', label: 'Is Upload', format: 'boolean' },
    { key: 'date', label: 'Added At', format: 'datetime' },
];
const listFields = [
    { key: 'id', label: 'List ID' },
    { key: 'name', label: 'Name' },
    { key: 'closed', label: 'Archived', format: 'boolean' },
    { key: 'color', label: 'Color' },
    { key: 'idBoard', label: 'Board ID' },
    { key: 'pos', label: 'Position', format: 'number' },
];
const boardFields = [
    { key: 'id', label: 'Board ID' },
    { key: 'name', label: 'Name' },
    { key: 'desc', label: 'Description' },
    { key: 'closed', label: 'Archived', format: 'boolean' },
    { key: 'url', label: 'URL', format: 'url' },
    { key: 'shortUrl', label: 'Short URL', format: 'url' },
    { key: 'idOrganization', label: 'Organization ID' },
    {
        key: 'prefs',
        label: 'Preferences',
        children: [
            { key: 'permissionLevel', label: 'Permission Level' },
            { key: 'background', label: 'Background Color' },
        ],
    },
];
const memberSummaryFields = [
    { key: 'id', label: 'Member ID' },
    { key: 'fullName', label: 'Full Name' },
    { key: 'username', label: 'Username' },
    { key: 'avatarUrl', label: 'Avatar URL', format: 'image' },
    { key: 'initials', label: 'Initials' },
];
const boardMemberFields = [
    { key: 'id', label: 'Member ID' },
    { key: 'fullName', label: 'Full Name' },
    { key: 'username', label: 'Username' },
];
const checkItemFields = [
    { key: 'id', label: 'Check Item ID' },
    { key: 'name', label: 'Name' },
    { key: 'state', label: 'State' },
    { key: 'due', label: 'Due Date', format: 'datetime' },
    { key: 'idMember', label: 'Member ID' },
    { key: 'idChecklist', label: 'Checklist ID' },
];
const checklistFields = [
    { key: 'id', label: 'Checklist ID' },
    { key: 'name', label: 'Name' },
    { key: 'idBoard', label: 'Board ID' },
    { key: 'idCard', label: 'Card ID' },
    {
        key: 'checkItems',
        label: 'Check Items',
        labelKey: 'name',
        listItems: checkItemFields,
    },
];
const memberFields = [
    { key: 'id', label: 'Member ID' },
    { key: 'username', label: 'Username' },
    { key: 'fullName', label: 'Full Name' },
    { key: 'email', label: 'Email', format: 'email' },
    { key: 'url', label: 'URL', format: 'url' },
    { key: 'avatarUrl', label: 'Avatar URL', format: 'image' },
];
const reactionFields = [
    { key: 'id', label: 'Reaction ID' },
    { key: 'idMember', label: 'Member ID' },
    { key: 'idModel', label: 'Comment ID' },
    {
        key: 'member',
        label: 'Member',
        children: [
            { key: 'id', label: 'Member ID' },
            { key: 'fullName', label: 'Full Name' },
            { key: 'username', label: 'Username' },
        ],
    },
    {
        key: 'emoji',
        label: 'Emoji',
        children: [
            { key: 'shortName', label: 'Short Name' },
            { key: 'native', label: 'Native' },
            { key: 'name', label: 'Name' },
        ],
    },
];
const commentActionFields = [
    { key: 'id', label: 'Comment ID' },
    { key: 'type', label: 'Type' },
    { key: 'date', label: 'Date', format: 'datetime' },
    {
        key: 'data',
        label: 'Data',
        children: [
            { key: 'text', label: 'Text' },
            {
                key: 'card',
                label: 'Card',
                children: [
                    { key: 'id', label: 'Card ID' },
                    { key: 'name', label: 'Name' },
                ],
            },
            { key: 'dateLastEdited', label: 'Last Edited', format: 'datetime' },
        ],
    },
    {
        key: 'memberCreator',
        label: 'Member Creator',
        children: [
            { key: 'id', label: 'Member ID' },
            { key: 'fullName', label: 'Full Name' },
            { key: 'username', label: 'Username' },
        ],
    },
];
exports.createCardAiActionOutputSchema = { fields: cardFields };
exports.getCardAiActionOutputSchema = { fields: cardFields };
exports.updateCardAiActionOutputSchema = { fields: cardFields };
exports.listCardAttachmentsAiActionOutputSchema = {
    itemLabel: '{name}',
    fields: [
        { key: 'attachments', label: 'Attachments', value: '', listItems: attachmentFields },
    ],
};
exports.searchCardsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'cards', label: 'Cards', labelKey: 'name', listItems: cardFields },
    ],
};
exports.searchMembersActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        {
            key: 'members',
            label: 'Members',
            labelKey: 'fullName',
            listItems: [
                ...memberSummaryFields,
                { key: 'email', label: 'Email', format: 'email' },
                { key: 'active', label: 'Active', format: 'boolean' },
            ],
        },
    ],
};
exports.listCardsInListActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'cards', label: 'Cards', labelKey: 'name', listItems: cardFields },
    ],
};
exports.listCardsInBoardActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'cards', label: 'Cards', labelKey: 'name', listItems: cardFields },
    ],
};
exports.listCardMembersActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        {
            key: 'members',
            label: 'Members',
            labelKey: 'fullName',
            listItems: memberSummaryFields,
        },
    ],
};
exports.addCommentToCardActionOutputSchema = { fields: commentActionFields };
exports.listCardCommentsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        {
            key: 'comments',
            label: 'Comments',
            labelKey: 'id',
            listItems: commentActionFields,
        },
    ],
};
exports.updateCommentActionOutputSchema = { fields: commentActionFields };
exports.addMemberToCardActionOutputSchema = {
    itemLabel: '{fullName}',
    fields: [
        { key: 'members', label: 'Card Members', value: '', listItems: memberSummaryFields },
    ],
};
exports.removeMemberFromCardActionOutputSchema = {
    itemLabel: '{fullName}',
    fields: [
        { key: 'members', label: 'Card Members', value: '', listItems: memberSummaryFields },
    ],
};
exports.createBoardLabelActionOutputSchema = { fields: boardLabelFields };
exports.updateLabelActionOutputSchema = { fields: boardLabelFields };
exports.listBoardLabelsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'labels', label: 'Labels', labelKey: 'name', listItems: boardLabelFields },
    ],
};
exports.addLabelToCardActionOutputSchema = {
    fields: [{ key: 'labelIds', label: 'Label IDs', value: '' }],
};
exports.moveCardActionOutputSchema = { fields: cardFields };
exports.archiveCardActionOutputSchema = { fields: cardFields };
exports.createListActionOutputSchema = { fields: listFields };
exports.getListActionOutputSchema = { fields: listFields };
exports.listListsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'lists', label: 'Lists', labelKey: 'name', listItems: listFields },
    ],
};
exports.renameListActionOutputSchema = { fields: listFields };
exports.archiveListActionOutputSchema = { fields: listFields };
exports.createBoardActionOutputSchema = { fields: boardFields };
exports.getBoardActionOutputSchema = { fields: boardFields };
exports.listBoardsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'boards', label: 'Boards', labelKey: 'name', listItems: boardFields },
    ],
};
exports.listOrganizationBoardsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'boards', label: 'Boards', labelKey: 'name', listItems: boardFields },
    ],
};
exports.listBoardMembersActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        {
            key: 'members',
            label: 'Members',
            labelKey: 'fullName',
            listItems: boardMemberFields,
        },
    ],
};
exports.getMemberActionOutputSchema = { fields: memberFields };
exports.getMyMemberActionOutputSchema = { fields: memberFields };
exports.addChecklistToCardActionOutputSchema = { fields: checklistFields };
exports.addChecklistItemActionOutputSchema = { fields: checkItemFields };
exports.listCardChecklistsActionOutputSchema = {
    fields: [
        { key: 'count', label: 'Count', format: 'number' },
        {
            key: 'checklists',
            label: 'Checklists',
            labelKey: 'name',
            listItems: checklistFields,
        },
    ],
};
exports.setChecklistItemStateActionOutputSchema = { fields: checkItemFields };
exports.addReactionToCommentActionOutputSchema = { fields: reactionFields };
exports.updateBoardActionOutputSchema = { fields: boardFields };
exports.archiveBoardActionOutputSchema = { fields: boardFields };
exports.createCardActionOutputSchema = { fields: cardFields };
exports.getCardActionOutputSchema = { fields: cardFields };
exports.updateCardActionOutputSchema = { fields: cardFields };
exports.getCardAttachmentActionOutputSchema = { fields: attachmentFields };
exports.getCardAttachmentsActionOutputSchema = {
    itemLabel: '{name}',
    fields: [
        { key: 'attachments', label: 'Attachments', value: '', listItems: attachmentFields },
    ],
};
exports.addCardAttachmentActionOutputSchema = { fields: attachmentFields };
exports.cardMovedTriggerOutputSchema = { fields: cardFields };
exports.newCardTriggerOutputSchema = { fields: cardFields };
exports.deadlineTriggerOutputSchema = { fields: cardFields };
//# sourceMappingURL=output-schemas.js.map