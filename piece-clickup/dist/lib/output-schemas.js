"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickupTriggerOutputSchemas = exports.automationCreatedTriggerOutputSchema = exports.keyResultTriggerOutputSchema = exports.goalTriggerOutputSchema = exports.spaceTriggerOutputSchema = exports.folderTriggerOutputSchema = exports.listTriggerOutputSchema = exports.taskHistoryTriggerOutputSchema = exports.taskEventTriggerOutputSchema = exports.listTimeEntriesOutputSchema = exports.timeEntryOutputSchema = exports.moveTaskOutputSchema = exports.taskWrapperOutputSchema = exports.spaceTagsOutputSchema = exports.accessibleCustomFieldsArrayOutputSchema = exports.checklistOutputSchema = exports.workspaceMembersOutputSchema = exports.membersOutputSchema = exports.getListsOutputSchema = exports.getFoldersOutputSchema = exports.folderOutputSchema = exports.accessibleCustomFieldsOutputSchema = exports.filterTimeEntriesOutputSchema = exports.getTaskCommentsOutputSchema = exports.createTaskCommentOutputSchema = exports.createMessageReactionOutputSchema = exports.getMessageReactionsOutputSchema = exports.messageRepliesOutputSchema = exports.channelMessagesOutputSchema = exports.messageOutputSchema = exports.getChannelsOutputSchema = exports.getChannelOutputSchema = exports.channelOutputSchema = exports.filterWorkspaceTasksOutputSchema = exports.getSpacesOutputSchema = exports.spaceOutputSchema = exports.listOutputSchema = exports.taskOutputSchema = void 0;
const userFields = [
    {
        "key": "id",
        "label": "User ID",
        "value": "id"
    },
    {
        "key": "username",
        "label": "Username",
        "value": "username"
    },
    {
        "key": "email",
        "label": "Email",
        "value": "email",
        "format": "email"
    },
    {
        "key": "color",
        "label": "Color",
        "value": "color"
    },
    {
        "key": "initials",
        "label": "Initials",
        "value": "initials"
    },
    {
        "key": "profilePicture",
        "label": "Profile Picture",
        "value": "profilePicture",
        "format": "image"
    }
];
const taskFields = [
    {
        "key": "name",
        "label": "Task Name"
    },
    {
        "key": "id",
        "label": "Task ID"
    },
    {
        "key": "description",
        "label": "Description"
    },
    {
        "key": "status",
        "label": "Status",
        "children": [
            {
                "key": "status",
                "label": "Status"
            },
            {
                "key": "type",
                "label": "Type"
            },
            {
                "key": "color",
                "label": "Color"
            }
        ]
    },
    {
        "key": "url",
        "label": "URL",
        "format": "url"
    },
    {
        "key": "date_created",
        "label": "Date Created",
        "format": "datetime"
    },
    {
        "key": "date_updated",
        "label": "Date Updated",
        "format": "datetime"
    },
    {
        "key": "due_date",
        "label": "Due Date",
        "format": "datetime"
    },
    {
        "key": "start_date",
        "label": "Start Date",
        "format": "datetime"
    },
    {
        "key": "priority",
        "label": "Priority"
    },
    {
        "key": "time_spent",
        "label": "Time Spent",
        "format": "duration"
    },
    {
        "key": "archived",
        "label": "Archived",
        "format": "boolean"
    },
    {
        "key": "creator",
        "label": "Creator",
        "children": [
            {
                "key": "username",
                "label": "Username"
            },
            {
                "key": "email",
                "label": "Email",
                "format": "email"
            },
            {
                "key": "id",
                "label": "User ID"
            }
        ]
    },
    {
        "key": "watchers",
        "label": "Watchers",
        "labelKey": "username",
        "listItems": [
            {
                "key": "username",
                "label": "Username"
            },
            {
                "key": "email",
                "label": "Email",
                "format": "email"
            },
            {
                "key": "id",
                "label": "User ID"
            }
        ]
    },
    {
        "key": "list",
        "label": "List",
        "children": [
            {
                "key": "name",
                "label": "Name"
            },
            {
                "key": "id",
                "label": "List ID"
            }
        ]
    },
    {
        "key": "folder",
        "label": "Folder",
        "children": [
            {
                "key": "name",
                "label": "Name"
            },
            {
                "key": "id",
                "label": "Folder ID"
            }
        ]
    },
    {
        "key": "space",
        "label": "Space",
        "children": [
            {
                "key": "id",
                "label": "Space ID"
            }
        ]
    },
    {
        "key": "team_id",
        "label": "Team ID"
    }
];
exports.taskOutputSchema = { fields: taskFields };
exports.listOutputSchema = {
    "fields": [
        {
            "key": "name",
            "label": "List Name"
        },
        {
            "key": "id",
            "label": "List ID"
        },
        {
            "key": "content",
            "label": "Content"
        },
        {
            "key": "task_count",
            "label": "Task Count",
            "format": "number"
        },
        {
            "key": "archived",
            "label": "Archived",
            "format": "boolean"
        },
        {
            "key": "permission_level",
            "label": "Permission Level"
        },
        {
            "key": "override_statuses",
            "label": "Override Statuses",
            "format": "boolean"
        },
        {
            "key": "inbound_address",
            "label": "Inbound Email Address",
            "format": "email"
        },
        {
            "key": "folder",
            "label": "Folder",
            "children": [
                {
                    "key": "name",
                    "label": "Folder Name"
                },
                {
                    "key": "id",
                    "label": "Folder ID"
                },
                {
                    "key": "hidden",
                    "label": "Hidden",
                    "format": "boolean"
                },
                {
                    "key": "archived",
                    "label": "Archived",
                    "format": "boolean"
                }
            ]
        },
        {
            "key": "space",
            "label": "Space",
            "children": [
                {
                    "key": "name",
                    "label": "Space Name"
                },
                {
                    "key": "id",
                    "label": "Space ID"
                },
                {
                    "key": "archived",
                    "label": "Archived",
                    "format": "boolean"
                }
            ]
        },
        {
            "key": "statuses",
            "label": "Statuses",
            "labelKey": "status",
            "listItems": [
                {
                    "key": "status",
                    "label": "Status"
                },
                {
                    "key": "id",
                    "label": "Status ID"
                },
                {
                    "key": "type",
                    "label": "Type"
                },
                {
                    "key": "color",
                    "label": "Color"
                },
                {
                    "key": "orderindex",
                    "label": "Order Index",
                    "format": "number"
                }
            ]
        }
    ]
};
exports.spaceOutputSchema = {
    "fields": [
        {
            "key": "name",
            "label": "Name"
        },
        {
            "key": "id",
            "label": "Space ID"
        },
        {
            "key": "private",
            "label": "Private",
            "format": "boolean"
        },
        {
            "key": "color",
            "label": "Color"
        },
        {
            "key": "admin_can_manage",
            "label": "Admin Can Manage",
            "format": "boolean"
        },
        {
            "key": "multiple_assignees",
            "label": "Multiple Assignees",
            "format": "boolean"
        },
        {
            "key": "archived",
            "label": "Archived",
            "format": "boolean"
        },
        {
            "key": "statuses",
            "label": "Statuses",
            "labelKey": "status",
            "listItems": [
                {
                    "key": "status",
                    "label": "Status"
                },
                {
                    "key": "type",
                    "label": "Type"
                },
                {
                    "key": "id",
                    "label": "Status ID"
                },
                {
                    "key": "color",
                    "label": "Color"
                },
                {
                    "key": "orderindex",
                    "label": "Order Index",
                    "format": "number"
                }
            ]
        },
        {
            "key": "features",
            "label": "Features",
            "children": [
                {
                    "key": "due_dates.enabled",
                    "label": "Due Dates Enabled",
                    "format": "boolean"
                },
                {
                    "key": "sprints.enabled",
                    "label": "Sprints Enabled",
                    "format": "boolean"
                },
                {
                    "key": "time_tracking.enabled",
                    "label": "Time Tracking Enabled",
                    "format": "boolean"
                },
                {
                    "key": "tags.enabled",
                    "label": "Tags Enabled",
                    "format": "boolean"
                },
                {
                    "key": "custom_fields.enabled",
                    "label": "Custom Fields Enabled",
                    "format": "boolean"
                },
                {
                    "key": "milestones.enabled",
                    "label": "Milestones Enabled",
                    "format": "boolean"
                },
                {
                    "key": "priorities.enabled",
                    "label": "Priorities Enabled",
                    "format": "boolean"
                },
                {
                    "key": "priorities.priorities",
                    "label": "Priorities",
                    "labelKey": "priority",
                    "listItems": [
                        {
                            "key": "priority",
                            "label": "Priority"
                        },
                        {
                            "key": "id",
                            "label": "Priority ID"
                        },
                        {
                            "key": "color",
                            "label": "Color"
                        },
                        {
                            "key": "orderindex",
                            "label": "Order Index"
                        }
                    ]
                }
            ]
        }
    ]
};
exports.getSpacesOutputSchema = {
    "fields": [
        {
            "key": "spaces",
            "label": "Spaces",
            "labelKey": "name",
            "listItems": [
                {
                    "key": "name",
                    "label": "Name"
                },
                {
                    "key": "id",
                    "label": "Space ID"
                },
                {
                    "key": "color",
                    "label": "Color"
                },
                {
                    "key": "private",
                    "label": "Private",
                    "format": "boolean"
                },
                {
                    "key": "admin_can_manage",
                    "label": "Admin Can Manage",
                    "format": "boolean"
                },
                {
                    "key": "multiple_assignees",
                    "label": "Multiple Assignees",
                    "format": "boolean"
                },
                {
                    "key": "archived",
                    "label": "Archived",
                    "format": "boolean"
                },
                {
                    "key": "statuses",
                    "label": "Statuses",
                    "labelKey": "status",
                    "listItems": [
                        {
                            "key": "status",
                            "label": "Status"
                        },
                        {
                            "key": "type",
                            "label": "Type"
                        },
                        {
                            "key": "color",
                            "label": "Color"
                        },
                        {
                            "key": "orderindex",
                            "label": "Order Index",
                            "format": "number"
                        },
                        {
                            "key": "id",
                            "label": "Status ID"
                        }
                    ]
                },
                {
                    "key": "features",
                    "label": "Features",
                    "children": [
                        {
                            "key": "due_dates_enabled",
                            "label": "Due Dates Enabled",
                            "value": "due_dates.enabled",
                            "format": "boolean"
                        },
                        {
                            "key": "sprints_enabled",
                            "label": "Sprints Enabled",
                            "value": "sprints.enabled",
                            "format": "boolean"
                        },
                        {
                            "key": "time_tracking_enabled",
                            "label": "Time Tracking Enabled",
                            "value": "time_tracking.enabled",
                            "format": "boolean"
                        },
                        {
                            "key": "points_enabled",
                            "label": "Points Enabled",
                            "value": "points.enabled",
                            "format": "boolean"
                        },
                        {
                            "key": "tags_enabled",
                            "label": "Tags Enabled",
                            "value": "tags.enabled",
                            "format": "boolean"
                        },
                        {
                            "key": "custom_fields_enabled",
                            "label": "Custom Fields Enabled",
                            "value": "custom_fields.enabled",
                            "format": "boolean"
                        },
                        {
                            "key": "milestones_enabled",
                            "label": "Milestones Enabled",
                            "value": "milestones.enabled",
                            "format": "boolean"
                        },
                        {
                            "key": "priorities",
                            "label": "Priorities",
                            "value": "priorities.priorities",
                            "labelKey": "priority",
                            "listItems": [
                                {
                                    "key": "priority",
                                    "label": "Priority"
                                },
                                {
                                    "key": "color",
                                    "label": "Color"
                                },
                                {
                                    "key": "id",
                                    "label": "Priority ID"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
exports.filterWorkspaceTasksOutputSchema = {
    "fields": [
        {
            "key": "tasks",
            "label": "Tasks",
            "labelKey": "name",
            "listItems": [
                {
                    "key": "name",
                    "label": "Name"
                },
                {
                    "key": "id",
                    "label": "Task ID"
                },
                {
                    "key": "status",
                    "label": "Status",
                    "value": "status.status"
                },
                {
                    "key": "url",
                    "label": "URL",
                    "format": "url"
                },
                {
                    "key": "description",
                    "label": "Description"
                },
                {
                    "key": "priority",
                    "label": "Priority",
                    "value": "priority.priority"
                },
                {
                    "key": "due_date",
                    "label": "Due Date",
                    "format": "date"
                },
                {
                    "key": "start_date",
                    "label": "Start Date",
                    "format": "date"
                },
                {
                    "key": "date_created",
                    "label": "Date Created",
                    "format": "date"
                },
                {
                    "key": "date_updated",
                    "label": "Date Updated",
                    "format": "date"
                },
                {
                    "key": "archived",
                    "label": "Archived",
                    "format": "boolean"
                },
                {
                    "key": "creator",
                    "label": "Creator",
                    "children": [
                        {
                            "key": "username",
                            "label": "Username"
                        },
                        {
                            "key": "email",
                            "label": "Email",
                            "format": "email"
                        },
                        {
                            "key": "id",
                            "label": "User ID"
                        }
                    ]
                },
                {
                    "key": "assignees",
                    "label": "Assignees",
                    "labelKey": "username",
                    "listItems": [
                        {
                            "key": "username",
                            "label": "Username"
                        },
                        {
                            "key": "email",
                            "label": "Email",
                            "format": "email"
                        },
                        {
                            "key": "id",
                            "label": "User ID"
                        }
                    ]
                },
                {
                    "key": "list",
                    "label": "List",
                    "children": [
                        {
                            "key": "name",
                            "label": "List Name"
                        },
                        {
                            "key": "id",
                            "label": "List ID"
                        }
                    ]
                },
                {
                    "key": "folder",
                    "label": "Folder",
                    "children": [
                        {
                            "key": "name",
                            "label": "Folder Name"
                        },
                        {
                            "key": "id",
                            "label": "Folder ID"
                        }
                    ]
                },
                {
                    "key": "space",
                    "label": "Space ID",
                    "value": "space.id"
                },
                {
                    "key": "team_id",
                    "label": "Team ID"
                }
            ]
        },
        {
            "key": "last_page",
            "label": "Last Page",
            "format": "boolean"
        }
    ]
};
exports.channelOutputSchema = {
    "fields": [
        {
            "key": "data",
            "label": "Channel",
            "children": [
                {
                    "key": "name",
                    "label": "Name"
                },
                {
                    "key": "type",
                    "label": "Type"
                },
                {
                    "key": "visibility",
                    "label": "Visibility"
                },
                {
                    "key": "id",
                    "label": "Channel ID"
                },
                {
                    "key": "creator",
                    "label": "Creator ID"
                },
                {
                    "key": "workspace_id",
                    "label": "Workspace ID"
                },
                {
                    "key": "archived",
                    "label": "Archived",
                    "format": "boolean"
                },
                {
                    "key": "created_at",
                    "label": "Created At",
                    "format": "datetime"
                },
                {
                    "key": "updated_at",
                    "label": "Updated At",
                    "format": "datetime"
                },
                {
                    "key": "parent",
                    "label": "Parent",
                    "children": [
                        {
                            "key": "id",
                            "label": "Parent ID"
                        },
                        {
                            "key": "type",
                            "label": "Parent Type"
                        }
                    ]
                }
            ]
        }
    ]
};
exports.getChannelOutputSchema = {
    "fields": [
        {
            "key": "data",
            "label": "Channels",
            "labelKey": "name",
            "listItems": [
                {
                    "key": "name",
                    "label": "Name"
                },
                {
                    "key": "id",
                    "label": "ID"
                },
                {
                    "key": "type",
                    "label": "Type"
                },
                {
                    "key": "visibility",
                    "label": "Visibility"
                },
                {
                    "key": "chat_room_category",
                    "label": "Category"
                },
                {
                    "key": "creator",
                    "label": "Creator"
                },
                {
                    "key": "archived",
                    "label": "Archived",
                    "format": "boolean"
                },
                {
                    "key": "is_canonical_channel",
                    "label": "Is Canonical Channel",
                    "format": "boolean"
                },
                {
                    "key": "workspace_id",
                    "label": "Workspace ID"
                },
                {
                    "key": "created_at",
                    "label": "Created At",
                    "format": "datetime"
                },
                {
                    "key": "updated_at",
                    "label": "Updated At",
                    "format": "datetime"
                },
                {
                    "key": "latest_comment_at",
                    "label": "Latest Comment At",
                    "format": "datetime"
                },
                {
                    "key": "parent",
                    "label": "Parent",
                    "children": [
                        {
                            "key": "id",
                            "label": "Parent ID"
                        },
                        {
                            "key": "type",
                            "label": "Parent Type"
                        }
                    ]
                }
            ]
        }
    ]
};
exports.getChannelsOutputSchema = {
    "fields": [
        {
            "key": "data",
            "label": "Channels",
            "labelKey": "name",
            "listItems": [
                {
                    "key": "name",
                    "label": "Name"
                },
                {
                    "key": "type",
                    "label": "Type"
                },
                {
                    "key": "visibility",
                    "label": "Visibility"
                },
                {
                    "key": "id",
                    "label": "Channel ID"
                },
                {
                    "key": "creator",
                    "label": "Creator ID"
                },
                {
                    "key": "archived",
                    "label": "Archived",
                    "format": "boolean"
                },
                {
                    "key": "chat_room_category",
                    "label": "Category"
                },
                {
                    "key": "is_canonical_channel",
                    "label": "Is Canonical Channel",
                    "format": "boolean"
                },
                {
                    "key": "workspace_id",
                    "label": "Workspace ID"
                },
                {
                    "key": "created_at",
                    "label": "Created At",
                    "format": "datetime"
                },
                {
                    "key": "updated_at",
                    "label": "Updated At",
                    "format": "datetime"
                },
                {
                    "key": "latest_comment_at",
                    "label": "Latest Comment At",
                    "format": "datetime"
                },
                {
                    "key": "parent",
                    "label": "Parent",
                    "children": [
                        {
                            "key": "id",
                            "label": "Parent ID"
                        },
                        {
                            "key": "type",
                            "label": "Parent Type"
                        }
                    ]
                }
            ]
        },
        {
            "key": "next_cursor",
            "label": "Next Cursor"
        }
    ]
};
exports.messageOutputSchema = {
    "fields": [
        {
            "key": "content",
            "label": "Content"
        },
        {
            "key": "type",
            "label": "Type"
        },
        {
            "key": "id",
            "label": "Message ID"
        },
        {
            "key": "date",
            "label": "Date",
            "format": "datetime"
        },
        {
            "key": "user_id",
            "label": "User ID"
        },
        {
            "key": "parent_channel",
            "label": "Parent Channel"
        },
        {
            "key": "replies_count",
            "label": "Replies Count",
            "format": "number"
        },
        {
            "key": "resolved",
            "label": "Resolved",
            "format": "boolean"
        }
    ]
};
exports.channelMessagesOutputSchema = {
    "fields": [
        {
            "key": "data",
            "label": "Messages",
            "labelKey": "content",
            "listItems": [
                {
                    "key": "content",
                    "label": "Content"
                },
                {
                    "key": "id",
                    "label": "Message ID"
                },
                {
                    "key": "type",
                    "label": "Type"
                },
                {
                    "key": "user_id",
                    "label": "User ID"
                },
                {
                    "key": "parent_channel",
                    "label": "Parent Channel"
                },
                {
                    "key": "resolved",
                    "label": "Resolved",
                    "format": "boolean"
                },
                {
                    "key": "replies_count",
                    "label": "Replies Count",
                    "format": "number"
                },
                {
                    "key": "date",
                    "label": "Date",
                    "format": "datetime"
                },
                {
                    "key": "date_assigned",
                    "label": "Date Assigned",
                    "format": "datetime"
                }
            ]
        },
        {
            "key": "next_cursor",
            "label": "Next Cursor"
        }
    ]
};
exports.messageRepliesOutputSchema = {
    "fields": [
        {
            "key": "data",
            "label": "Replies",
            "labelKey": "content",
            "listItems": [
                {
                    "key": "content",
                    "label": "Content"
                },
                {
                    "key": "id",
                    "label": "Reply ID"
                },
                {
                    "key": "type",
                    "label": "Type"
                },
                {
                    "key": "user_id",
                    "label": "User ID"
                },
                {
                    "key": "date",
                    "label": "Date",
                    "format": "datetime"
                },
                {
                    "key": "resolved",
                    "label": "Resolved",
                    "format": "boolean"
                },
                {
                    "key": "parent_message",
                    "label": "Parent Message ID"
                },
                {
                    "key": "parent_channel",
                    "label": "Parent Channel"
                },
                {
                    "key": "date_assigned",
                    "label": "Date Assigned",
                    "format": "datetime"
                }
            ]
        },
        {
            "key": "next_cursor",
            "label": "Next Cursor"
        }
    ]
};
exports.getMessageReactionsOutputSchema = {
    "fields": [
        {
            "key": "data",
            "label": "Reactions",
            "value": "data",
            "labelKey": "reaction",
            "listItems": [
                {
                    "key": "reaction",
                    "label": "Reaction",
                    "value": "reaction"
                },
                {
                    "key": "date",
                    "label": "Date",
                    "value": "date"
                },
                {
                    "key": "user_id",
                    "label": "User ID",
                    "value": "user_id"
                }
            ]
        },
        {
            "key": "next_cursor",
            "label": "Next Cursor",
            "value": "next_cursor"
        }
    ]
};
exports.createMessageReactionOutputSchema = {
    "fields": [
        {
            "key": "reaction",
            "label": "Reaction",
            "value": "reaction"
        },
        {
            "key": "date",
            "label": "Date",
            "value": "date"
        },
        {
            "key": "user_id",
            "label": "User ID",
            "value": "user_id"
        }
    ]
};
exports.createTaskCommentOutputSchema = {
    "fields": [
        {
            "key": "id",
            "label": "Comment ID",
            "value": "id"
        },
        {
            "key": "hist_id",
            "label": "History ID",
            "value": "hist_id"
        },
        {
            "key": "date",
            "label": "Date",
            "value": "date"
        }
    ]
};
exports.getTaskCommentsOutputSchema = {
    fields: [
        {
            key: 'comments',
            label: 'Comments',
            value: 'comments',
            labelKey: 'comment_text',
            listItems: [
                { key: 'id', label: 'Comment ID', value: 'id' },
                { key: 'comment_text', label: 'Comment Text', value: 'comment_text' },
                { key: 'resolved', label: 'Resolved', value: 'resolved', format: 'boolean' },
                { key: 'date', label: 'Date', value: 'date' },
                { key: 'user', label: 'User', value: 'user', children: userFields },
            ],
        },
    ],
};
exports.filterTimeEntriesOutputSchema = {
    fields: [
        {
            key: 'data',
            label: 'Time Entries',
            value: 'data',
            labelKey: 'task.name',
            listItems: [
                { key: 'id', label: 'ID', value: 'id' },
                { key: 'task', label: 'Task', value: 'task', children: [
                        { key: 'id', label: 'Task ID', value: 'id' },
                        { key: 'name', label: 'Task Name', value: 'name' },
                    ] },
                { key: 'wid', label: 'Workspace ID', value: 'wid' },
                { key: 'user', label: 'User', value: 'user', children: userFields },
                { key: 'billable', label: 'Billable', value: 'billable', format: 'boolean' },
                { key: 'start', label: 'Start', value: 'start' },
                { key: 'end', label: 'End', value: 'end' },
                { key: 'duration', label: 'Duration', value: 'duration' },
                { key: 'description', label: 'Description', value: 'description' },
            ],
        },
    ],
};
exports.accessibleCustomFieldsOutputSchema = {
    fields: [
        {
            key: 'fields',
            label: 'Custom Fields',
            value: '',
            labelKey: 'name',
            listItems: [
                { key: 'id', label: 'Field ID', value: 'id' },
                { key: 'name', label: 'Name', value: 'name' },
                { key: 'type', label: 'Type', value: 'type' },
                { key: 'date_created', label: 'Date Created', value: 'date_created' },
                { key: 'hide_from_guests', label: 'Hide From Guests', value: 'hide_from_guests', format: 'boolean' },
            ],
        },
    ],
};
const folderFields = [
    { key: 'id', label: 'Folder ID' },
    { key: 'name', label: 'Name' },
    { key: 'task_count', label: 'Task Count', format: 'number' },
    { key: 'archived', label: 'Archived', format: 'boolean' },
    { key: 'hidden', label: 'Hidden', format: 'boolean' },
    {
        key: 'space',
        label: 'Space',
        children: [
            { key: 'id', label: 'Space ID' },
            { key: 'name', label: 'Name' },
        ],
    },
];
exports.folderOutputSchema = { fields: folderFields };
exports.getFoldersOutputSchema = {
    fields: [
        { key: 'folders', label: 'Folders', labelKey: 'name', listItems: folderFields },
    ],
};
const listSummaryFields = [
    { key: 'id', label: 'List ID' },
    { key: 'name', label: 'Name' },
    { key: 'content', label: 'Content' },
    { key: 'task_count', label: 'Task Count', format: 'number' },
    { key: 'archived', label: 'Archived', format: 'boolean' },
];
exports.getListsOutputSchema = {
    fields: [
        { key: 'lists', label: 'Lists', labelKey: 'name', listItems: listSummaryFields },
    ],
};
exports.membersOutputSchema = {
    fields: [
        { key: 'members', label: 'Members', labelKey: 'username', listItems: userFields },
    ],
};
exports.workspaceMembersOutputSchema = {
    fields: [
        {
            key: 'members',
            label: 'Members',
            labelKey: 'user.username',
            listItems: [{ key: 'user', label: 'User', children: userFields }],
        },
    ],
};
const checklistItemFields = [
    { key: 'id', label: 'Item ID' },
    { key: 'name', label: 'Name' },
    { key: 'resolved', label: 'Resolved', format: 'boolean' },
    { key: 'assignee', label: 'Assignee' },
    { key: 'parent', label: 'Parent Item ID' },
];
const checklistFields = [
    { key: 'id', label: 'Checklist ID' },
    { key: 'task_id', label: 'Task ID' },
    { key: 'name', label: 'Name' },
    { key: 'resolved', label: 'Resolved Count', format: 'number' },
    { key: 'unresolved', label: 'Unresolved Count', format: 'number' },
    { key: 'items', label: 'Items', labelKey: 'name', listItems: checklistItemFields },
];
exports.checklistOutputSchema = {
    fields: [{ key: 'checklist', label: 'Checklist', children: checklistFields }],
};
const customFieldFields = [
    { key: 'id', label: 'Field ID' },
    { key: 'name', label: 'Name' },
    { key: 'type', label: 'Type' },
    { key: 'date_created', label: 'Date Created' },
    { key: 'hide_from_guests', label: 'Hide From Guests', format: 'boolean' },
];
exports.accessibleCustomFieldsArrayOutputSchema = {
    fields: [
        {
            key: 'fields',
            label: 'Custom Fields',
            value: '',
            labelKey: 'name',
            listItems: customFieldFields,
        },
    ],
};
const tagFields = [
    { key: 'name', label: 'Name' },
    { key: 'tag_fg', label: 'Foreground Color' },
    { key: 'tag_bg', label: 'Background Color' },
    { key: 'creator', label: 'Creator ID' },
];
exports.spaceTagsOutputSchema = {
    fields: [{ key: 'tags', label: 'Tags', labelKey: 'name', listItems: tagFields }],
};
exports.taskWrapperOutputSchema = {
    fields: [{ key: 'task', label: 'Task', children: taskFields }],
};
exports.moveTaskOutputSchema = {
    fields: [
        {
            key: 'data',
            label: 'Move Result',
            children: [
                { key: 'task_id', label: 'Task ID' },
                { key: 'new_list_id', label: 'New List ID' },
            ],
        },
    ],
};
const timeEntryFields = [
    { key: 'id', label: 'Time Entry ID' },
    {
        key: 'task',
        label: 'Task',
        children: [
            { key: 'id', label: 'Task ID' },
            { key: 'name', label: 'Task Name' },
        ],
    },
    { key: 'wid', label: 'Workspace ID' },
    { key: 'user', label: 'User', children: userFields },
    { key: 'billable', label: 'Billable', format: 'boolean' },
    { key: 'start', label: 'Start', format: 'datetime' },
    { key: 'end', label: 'End', format: 'datetime' },
    { key: 'duration', label: 'Duration', format: 'duration' },
    { key: 'description', label: 'Description' },
    { key: 'at', label: 'Last Updated At', format: 'datetime' },
];
exports.timeEntryOutputSchema = {
    fields: [{ key: 'data', label: 'Time Entry', children: timeEntryFields }],
};
exports.listTimeEntriesOutputSchema = {
    fields: [
        { key: 'data', label: 'Time Entries', labelKey: 'description', listItems: timeEntryFields },
    ],
};
const triggerEventField = { key: 'event', label: 'Event', value: 'event' };
const triggerTeamWebhookFields = [
    { key: 'team_id', label: 'Team ID', value: 'team_id' },
    { key: 'webhook_id', label: 'Webhook ID', value: 'webhook_id' },
];
const triggerHistoryItemsField = {
    key: 'history_items',
    label: 'History Items',
    value: 'history_items',
    labelKey: 'field',
    listItems: [
        { key: 'id', label: 'ID', value: 'id' },
        { key: 'type', label: 'Type', value: 'type', format: 'number' },
        { key: 'date', label: 'Date', value: 'date' },
        { key: 'field', label: 'Field', value: 'field' },
        { key: 'parent_id', label: 'Parent ID', value: 'parent_id' },
        { key: 'before', label: 'Before', value: 'before' },
        { key: 'after', label: 'After', value: 'after' },
        { key: 'user', label: 'User', value: 'user', children: userFields },
    ],
};
exports.taskEventTriggerOutputSchema = {
    fields: [
        triggerEventField,
        { key: 'task_id', label: 'Task ID', value: 'task_id' },
        ...triggerTeamWebhookFields,
        triggerHistoryItemsField,
        { key: 'task', label: 'Task', value: 'task', children: taskFields },
    ],
};
exports.taskHistoryTriggerOutputSchema = {
    fields: [
        triggerEventField,
        { key: 'task_id', label: 'Task ID', value: 'task_id' },
        ...triggerTeamWebhookFields,
        triggerHistoryItemsField,
    ],
};
exports.listTriggerOutputSchema = {
    fields: [
        triggerEventField,
        { key: 'list_id', label: 'List ID', value: 'list_id' },
        ...triggerTeamWebhookFields,
        triggerHistoryItemsField,
    ],
};
exports.folderTriggerOutputSchema = {
    fields: [
        triggerEventField,
        { key: 'folder_id', label: 'Folder ID', value: 'folder_id' },
        ...triggerTeamWebhookFields,
        triggerHistoryItemsField,
    ],
};
exports.spaceTriggerOutputSchema = {
    fields: [
        triggerEventField,
        { key: 'space_id', label: 'Space ID', value: 'space_id' },
        ...triggerTeamWebhookFields,
        triggerHistoryItemsField,
    ],
};
exports.goalTriggerOutputSchema = {
    fields: [
        triggerEventField,
        { key: 'goal_id', label: 'Goal ID', value: 'goal_id' },
        ...triggerTeamWebhookFields,
        triggerHistoryItemsField,
    ],
};
exports.keyResultTriggerOutputSchema = {
    fields: [
        triggerEventField,
        { key: 'goal_id', label: 'Goal ID', value: 'goal_id' },
        { key: 'key_result_id', label: 'Key Result ID', value: 'key_result_id' },
        ...triggerTeamWebhookFields,
        triggerHistoryItemsField,
    ],
};
exports.automationCreatedTriggerOutputSchema = {
    fields: [
        { key: 'id', label: 'ID', value: 'id' },
        { key: 'trigger_id', label: 'Trigger ID', value: 'trigger_id' },
        { key: 'date', label: 'Date', value: 'date', format: 'datetime' },
        { key: 'payload', label: 'Task', value: 'payload', children: taskFields },
    ],
};
exports.clickupTriggerOutputSchemas = {
    task_created: exports.taskEventTriggerOutputSchema,
    task_updated: exports.taskEventTriggerOutputSchema,
    task_comment_posted: exports.taskEventTriggerOutputSchema,
    task_comment_updated: exports.taskEventTriggerOutputSchema,
    task_deleted: exports.taskHistoryTriggerOutputSchema,
    task_priority_updated: exports.taskHistoryTriggerOutputSchema,
    task_status_updated: exports.taskHistoryTriggerOutputSchema,
    task_assignee_updated: exports.taskHistoryTriggerOutputSchema,
    task_due_date_updated: exports.taskHistoryTriggerOutputSchema,
    task_tag_updated: exports.taskHistoryTriggerOutputSchema,
    task_moved: exports.taskHistoryTriggerOutputSchema,
    task_time_estimate_updated: exports.taskHistoryTriggerOutputSchema,
    task_time_tracked_updated: exports.taskHistoryTriggerOutputSchema,
    list_created: exports.listTriggerOutputSchema,
    list_updated: exports.listTriggerOutputSchema,
    list_deleted: exports.listTriggerOutputSchema,
    folder_created: exports.folderTriggerOutputSchema,
    folder_updated: exports.folderTriggerOutputSchema,
    folder_deleted: exports.folderTriggerOutputSchema,
    space_created: exports.spaceTriggerOutputSchema,
    space_updated: exports.spaceTriggerOutputSchema,
    space_deleted: exports.spaceTriggerOutputSchema,
    automation_created: exports.automationCreatedTriggerOutputSchema,
    goal_created: exports.goalTriggerOutputSchema,
    goal_updated: exports.goalTriggerOutputSchema,
    goal_deleted: exports.goalTriggerOutputSchema,
    key_result_created: exports.keyResultTriggerOutputSchema,
    key_result_updated: exports.keyResultTriggerOutputSchema,
    key_result_deleted: exports.keyResultTriggerOutputSchema,
};
//# sourceMappingURL=output-schemas.js.map