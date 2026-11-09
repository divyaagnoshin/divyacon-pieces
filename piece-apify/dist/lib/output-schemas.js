"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listKeyValueStoreKeysActionOutputSchema = exports.updateTaskInputActionOutputSchema = exports.createTaskActionOutputSchema = exports.abortActorRunActionOutputSchema = exports.getRunLogActionOutputSchema = exports.getTaskLastRunDatasetItemsActionOutputSchema = exports.getActorLastRunDatasetItemsActionOutputSchema = exports.getRunDatasetItemsActionOutputSchema = exports.getTaskInputActionOutputSchema = exports.getActorInputSchemaActionOutputSchema = exports.findActorActionOutputSchema = exports.listRunsActionOutputSchema = exports.listActorRunsActionOutputSchema = exports.watchRunsTriggerOutputSchema = exports.listTasksActionOutputSchema = exports.listKeyValueStoresActionOutputSchema = exports.listDatasetsActionOutputSchema = exports.listActorsActionOutputSchema = exports.getLastActorRunActionOutputSchema = exports.getTaskLastRunActionOutputSchema = exports.getTaskActionOutputSchema = exports.getKeyValueStoreActionOutputSchema = exports.getDatasetActionOutputSchema = exports.getBuildActionOutputSchema = exports.getActorRunActionOutputSchema = exports.getActorActionOutputSchema = exports.getAccountLimitsActionOutputSchema = exports.getAccountActionOutputSchema = exports.scrapeUrlActionOutputSchema = exports.getKeyValueStoreRecordActionOutputSchema = exports.getDatasetItemsActionOutputSchema = exports.runTaskActionOutputSchema = exports.runActorActionOutputSchema = void 0;
const actorRunFields = [
    { key: 'id', label: 'Run ID' },
    { key: 'actId', label: 'Actor ID' },
    { key: 'status', label: 'Status' },
    { key: 'startedAt', label: 'Started At', format: 'datetime' },
    { key: 'finishedAt', label: 'Finished At', format: 'datetime' },
    { key: 'buildNumber', label: 'Build Number' },
    { key: 'exitCode', label: 'Exit Code' },
    { key: 'defaultDatasetId', label: 'Dataset ID' },
    { key: 'defaultKeyValueStoreId', label: 'Key-Value Store ID' },
    { key: 'defaultRequestQueueId', label: 'Request Queue ID' },
    { key: 'usageTotalUsd', label: 'Usage (USD)', format: 'currency', currency: 'USD' },
    { key: 'containerUrl', label: 'Container URL', format: 'url' },
    { key: 'consoleUrl', label: 'Console URL', format: 'url' },
];
exports.runActorActionOutputSchema = {
    fields: [
        { key: 'run', label: 'Run', children: actorRunFields },
        { key: 'datasetItems', label: 'Dataset Items' },
    ],
};
exports.runTaskActionOutputSchema = {
    fields: [
        {
            key: 'run',
            label: 'Run',
            children: [
                { key: 'actorTaskId', label: 'Task ID' },
                ...actorRunFields,
            ],
        },
        { key: 'datasetItems', label: 'Dataset Items' },
    ],
};
exports.getDatasetItemsActionOutputSchema = {
    fields: [
        { key: 'items', label: 'Items' },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
        { key: 'offset', label: 'Offset', format: 'number' },
        { key: 'limit', label: 'Limit', format: 'number' },
        { key: 'datasetId', label: 'Dataset ID' },
    ],
};
exports.getKeyValueStoreRecordActionOutputSchema = {
    fields: [
        { key: 'key', label: 'Record Key' },
        { key: 'value', label: 'Value' },
        { key: 'file', label: 'File URL', format: 'url' },
        { key: 'fileName', label: 'File Name' },
        { key: 'size', label: 'File Size', format: 'filesize' },
        { key: 'contentType', label: 'Content Type' },
        { key: 'dataType', label: 'Data Type' },
    ],
};
exports.scrapeUrlActionOutputSchema = {
    fields: [
        { key: 'url', label: 'URL', format: 'url' },
        { key: 'markdown', label: 'Markdown' },
        { key: 'html', label: 'HTML', format: 'html' },
    ],
};
exports.getAccountActionOutputSchema = {
    fields: [
        { key: 'id', label: 'User ID' },
        { key: 'username', label: 'Username' },
        { key: 'email', label: 'Email', format: 'email' },
        {
            key: 'profile',
            label: 'Profile',
            children: [{ key: 'name', label: 'Name' }],
        },
        {
            key: 'plan',
            label: 'Plan',
            children: [
                { key: 'id', label: 'Plan ID' },
                { key: 'tier', label: 'Tier' },
            ],
        },
        { key: 'createdAt', label: 'Created At', format: 'datetime' },
        { key: 'isPaying', label: 'Is Paying', format: 'boolean' },
    ],
};
exports.getAccountLimitsActionOutputSchema = {
    fields: [
        {
            key: 'monthlyUsageCycle',
            label: 'Monthly Usage Cycle',
            children: [
                { key: 'startAt', label: 'Start At', format: 'datetime' },
                { key: 'endAt', label: 'End At', format: 'datetime' },
            ],
        },
        {
            key: 'limits',
            label: 'Plan Limits',
            children: [
                { key: 'maxMonthlyUsageUsd', label: 'Max Monthly Usage (USD)', format: 'currency', currency: 'USD' },
                { key: 'maxMonthlyActorComputeUnits', label: 'Max Monthly Compute Units', format: 'number' },
                { key: 'maxActorMemoryGbytes', label: 'Max Actor Memory (GB)', format: 'number' },
                { key: 'maxActorCount', label: 'Max Actor Count', format: 'number' },
                { key: 'maxActorTaskCount', label: 'Max Task Count', format: 'number' },
                { key: 'maxConcurrentActorJobs', label: 'Max Concurrent Runs', format: 'number' },
                { key: 'dataRetentionDays', label: 'Data Retention (Days)', format: 'number' },
            ],
        },
        {
            key: 'current',
            label: 'Current Usage',
            children: [
                { key: 'monthlyUsageUsd', label: 'Monthly Usage (USD)', format: 'currency', currency: 'USD' },
                { key: 'monthlyActorComputeUnits', label: 'Monthly Compute Units', format: 'number' },
                { key: 'actorCount', label: 'Actor Count', format: 'number' },
                { key: 'actorTaskCount', label: 'Task Count', format: 'number' },
                { key: 'activeActorJobCount', label: 'Active Runs', format: 'number' },
            ],
        },
    ],
};
exports.getActorActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Actor ID' },
        { key: 'name', label: 'Name' },
        { key: 'username', label: 'Username' },
        { key: 'title', label: 'Title' },
        { key: 'description', label: 'Description' },
        { key: 'isPublic', label: 'Is Public', format: 'boolean' },
        { key: 'isDeprecated', label: 'Is Deprecated', format: 'boolean' },
        { key: 'createdAt', label: 'Created At', format: 'datetime' },
        { key: 'modifiedAt', label: 'Modified At', format: 'datetime' },
        {
            key: 'stats',
            label: 'Stats',
            children: [
                { key: 'totalRuns', label: 'Total Runs', format: 'number' },
                { key: 'totalUsers', label: 'Total Users', format: 'number' },
            ],
        },
        {
            key: 'defaultRunOptions',
            label: 'Default Run Options',
            children: [
                { key: 'build', label: 'Build' },
                { key: 'memoryMbytes', label: 'Memory (MB)', format: 'number' },
                { key: 'timeoutSecs', label: 'Timeout (s)', format: 'number' },
            ],
        },
        { key: 'categories', label: 'Categories' },
        { key: 'pictureUrl', label: 'Picture', format: 'image' },
    ],
};
exports.getActorRunActionOutputSchema = {
    fields: actorRunFields,
};
exports.getBuildActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Build ID' },
        { key: 'actId', label: 'Actor ID' },
        { key: 'status', label: 'Status' },
        { key: 'startedAt', label: 'Started At', format: 'datetime' },
        { key: 'finishedAt', label: 'Finished At', format: 'datetime' },
        { key: 'buildNumber', label: 'Build Number' },
        { key: 'exitCode', label: 'Exit Code' },
        { key: 'usageTotalUsd', label: 'Usage (USD)', format: 'currency', currency: 'USD' },
    ],
};
exports.getDatasetActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Dataset ID' },
        { key: 'name', label: 'Name' },
        { key: 'itemCount', label: 'Item Count', format: 'number' },
        { key: 'cleanItemCount', label: 'Clean Item Count', format: 'number' },
        { key: 'createdAt', label: 'Created At', format: 'datetime' },
        { key: 'modifiedAt', label: 'Modified At', format: 'datetime' },
        { key: 'actId', label: 'Actor ID' },
        { key: 'actRunId', label: 'Run ID' },
        { key: 'fields', label: 'Fields' },
        { key: 'consoleUrl', label: 'Console URL', format: 'url' },
    ],
};
exports.getKeyValueStoreActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Key-Value Store ID' },
        { key: 'name', label: 'Name' },
        { key: 'createdAt', label: 'Created At', format: 'datetime' },
        { key: 'modifiedAt', label: 'Modified At', format: 'datetime' },
        { key: 'actId', label: 'Actor ID' },
        { key: 'actRunId', label: 'Run ID' },
        { key: 'consoleUrl', label: 'Console URL', format: 'url' },
    ],
};
exports.getTaskActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Task ID' },
        { key: 'name', label: 'Name' },
        { key: 'title', label: 'Title' },
        { key: 'actId', label: 'Actor ID' },
        { key: 'username', label: 'Username' },
        { key: 'createdAt', label: 'Created At', format: 'datetime' },
        { key: 'modifiedAt', label: 'Modified At', format: 'datetime' },
        {
            key: 'stats',
            label: 'Stats',
            children: [{ key: 'totalRuns', label: 'Total Runs', format: 'number' }],
        },
        {
            key: 'options',
            label: 'Options',
            children: [{ key: 'memoryMbytes', label: 'Memory (MB)', format: 'number' }],
        },
        { key: 'input', label: 'Input' },
    ],
};
exports.getTaskLastRunActionOutputSchema = {
    fields: [{ key: 'actorTaskId', label: 'Task ID' }, ...actorRunFields],
};
exports.getLastActorRunActionOutputSchema = {
    fields: actorRunFields,
};
exports.listActorsActionOutputSchema = {
    fields: [
        {
            key: 'actors',
            label: 'Actors',
            labelKey: 'fullName',
            listItems: [
                { key: 'id', label: 'Actor ID' },
                { key: 'name', label: 'Name' },
                { key: 'username', label: 'Username' },
                { key: 'fullName', label: 'Full Name' },
                { key: 'createdAt', label: 'Created At', format: 'datetime' },
                { key: 'modifiedAt', label: 'Modified At', format: 'datetime' },
            ],
        },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
    ],
};
exports.listDatasetsActionOutputSchema = {
    fields: [
        {
            key: 'datasets',
            label: 'Datasets',
            labelKey: 'name',
            listItems: [
                { key: 'id', label: 'Dataset ID' },
                { key: 'name', label: 'Name' },
                { key: 'title', label: 'Title' },
                { key: 'itemCount', label: 'Item Count', format: 'number' },
                { key: 'createdAt', label: 'Created At', format: 'datetime' },
                { key: 'modifiedAt', label: 'Modified At', format: 'datetime' },
            ],
        },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
    ],
};
exports.listKeyValueStoresActionOutputSchema = {
    fields: [
        {
            key: 'stores',
            label: 'Key-Value Stores',
            labelKey: 'name',
            listItems: [
                { key: 'id', label: 'Store ID' },
                { key: 'name', label: 'Name' },
                { key: 'title', label: 'Title' },
                { key: 'createdAt', label: 'Created At', format: 'datetime' },
                { key: 'modifiedAt', label: 'Modified At', format: 'datetime' },
            ],
        },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
    ],
};
exports.listTasksActionOutputSchema = {
    fields: [
        {
            key: 'tasks',
            label: 'Tasks',
            labelKey: 'name',
            listItems: [
                { key: 'id', label: 'Task ID' },
                { key: 'name', label: 'Name' },
                { key: 'title', label: 'Title' },
                { key: 'actId', label: 'Actor ID' },
                { key: 'username', label: 'Username' },
                { key: 'createdAt', label: 'Created At', format: 'datetime' },
                { key: 'modifiedAt', label: 'Modified At', format: 'datetime' },
            ],
        },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
    ],
};
const webhookRunResourceFields = [
    { key: 'id', label: 'Run ID' },
    { key: 'actId', label: 'Actor ID' },
    { key: 'actorTaskId', label: 'Task ID' },
    { key: 'status', label: 'Status' },
    { key: 'startedAt', label: 'Started At', format: 'datetime' },
    { key: 'finishedAt', label: 'Finished At', format: 'datetime' },
    { key: 'buildNumber', label: 'Build Number' },
    { key: 'exitCode', label: 'Exit Code' },
    { key: 'defaultDatasetId', label: 'Dataset ID' },
    { key: 'defaultKeyValueStoreId', label: 'Key-Value Store ID' },
    { key: 'defaultRequestQueueId', label: 'Request Queue ID' },
    { key: 'usageTotalUsd', label: 'Usage (USD)', format: 'currency', currency: 'USD' },
    { key: 'consoleUrl', label: 'Console URL', value: 'links.consoleRunUrl', format: 'url' },
];
exports.watchRunsTriggerOutputSchema = {
    fields: [
        { key: 'userId', label: 'User ID' },
        { key: 'createdAt', label: 'Created At', format: 'datetime' },
        { key: 'eventType', label: 'Event Type' },
        {
            key: 'eventData',
            label: 'Event Data',
            children: [
                { key: 'actorId', label: 'Actor ID' },
                { key: 'actorTaskId', label: 'Task ID' },
                { key: 'actorRunId', label: 'Run ID' },
            ],
        },
        { key: 'resource', label: 'Run', children: webhookRunResourceFields },
    ],
};
const runSummaryFields = [
    { key: 'id', label: 'Run ID' },
    { key: 'actId', label: 'Actor ID' },
    { key: 'actorTaskId', label: 'Task ID' },
    { key: 'status', label: 'Status' },
    { key: 'startedAt', label: 'Started At', format: 'datetime' },
    { key: 'finishedAt', label: 'Finished At', format: 'datetime' },
    { key: 'buildNumber', label: 'Build Number' },
    { key: 'defaultDatasetId', label: 'Dataset ID' },
    { key: 'defaultKeyValueStoreId', label: 'Key-Value Store ID' },
    { key: 'usageTotalUsd', label: 'Usage (USD)', format: 'currency', currency: 'USD' },
];
exports.listActorRunsActionOutputSchema = {
    fields: [
        { key: 'runs', label: 'Runs', labelKey: 'status', listItems: runSummaryFields },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
        { key: 'actorId', label: 'Actor ID' },
    ],
};
exports.listRunsActionOutputSchema = {
    fields: [
        { key: 'runs', label: 'Runs', labelKey: 'status', listItems: runSummaryFields },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
    ],
};
exports.findActorActionOutputSchema = {
    fields: [
        {
            key: 'actors',
            label: 'Actors',
            labelKey: 'fullName',
            listItems: [
                { key: 'id', label: 'Actor ID' },
                { key: 'name', label: 'Name' },
                { key: 'username', label: 'Username' },
                { key: 'title', label: 'Title' },
                { key: 'fullName', label: 'Full Name' },
                { key: 'description', label: 'Description' },
                {
                    key: 'stats',
                    label: 'Stats',
                    children: [
                        { key: 'totalRuns', label: 'Total Runs', format: 'number' },
                        { key: 'totalUsers', label: 'Total Users', format: 'number' },
                        { key: 'actorReviewRating', label: 'Rating', format: 'number' },
                        { key: 'bookmarkCount', label: 'Bookmarks', format: 'number' },
                    ],
                },
            ],
        },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
    ],
};
exports.getActorInputSchemaActionOutputSchema = {
    fields: [
        { key: 'actorId', label: 'Actor ID' },
        { key: 'buildId', label: 'Build ID' },
        { key: 'buildNumber', label: 'Build Number' },
        { key: 'input', label: 'Input Schema' },
    ],
};
exports.getTaskInputActionOutputSchema = {
    fields: [
        { key: 'taskId', label: 'Task ID' },
        { key: 'input', label: 'Input' },
    ],
};
exports.getRunDatasetItemsActionOutputSchema = {
    fields: [
        { key: 'items', label: 'Items' },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
        { key: 'offset', label: 'Offset', format: 'number' },
        { key: 'limit', label: 'Limit', format: 'number' },
        { key: 'runId', label: 'Run ID' },
    ],
};
exports.getActorLastRunDatasetItemsActionOutputSchema = {
    fields: [
        { key: 'items', label: 'Items' },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
        { key: 'offset', label: 'Offset', format: 'number' },
        { key: 'limit', label: 'Limit', format: 'number' },
        { key: 'actorId', label: 'Actor ID' },
    ],
};
exports.getTaskLastRunDatasetItemsActionOutputSchema = {
    fields: [
        { key: 'items', label: 'Items' },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'total', label: 'Total', format: 'number' },
        { key: 'offset', label: 'Offset', format: 'number' },
        { key: 'limit', label: 'Limit', format: 'number' },
        { key: 'taskId', label: 'Task ID' },
    ],
};
exports.getRunLogActionOutputSchema = {
    fields: [
        { key: 'id', label: 'Run/Build ID' },
        { key: 'log', label: 'Log' },
    ],
};
exports.abortActorRunActionOutputSchema = {
    fields: actorRunFields,
};
exports.createTaskActionOutputSchema = exports.getTaskActionOutputSchema;
exports.updateTaskInputActionOutputSchema = {
    fields: [
        { key: 'taskId', label: 'Task ID' },
        { key: 'input', label: 'Input' },
    ],
};
exports.listKeyValueStoreKeysActionOutputSchema = {
    fields: [
        {
            key: 'keys',
            label: 'Keys',
            labelKey: 'key',
            listItems: [
                { key: 'key', label: 'Key' },
                { key: 'size', label: 'Size', format: 'filesize' },
            ],
        },
        { key: 'count', label: 'Count', format: 'number' },
        { key: 'isTruncated', label: 'Is Truncated', format: 'boolean' },
        { key: 'nextExclusiveStartKey', label: 'Next Start Key' },
        { key: 'storeId', label: 'Store ID' },
    ],
};
//# sourceMappingURL=output-schemas.js.map