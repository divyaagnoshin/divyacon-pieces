"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgentStatusActionOutputSchema = exports.startAgentActionOutputSchema = exports.extractDataActionOutputSchema = exports.listActiveCrawlsActionOutputSchema = exports.searchWebActionOutputSchema = exports.mapWebsiteActionOutputSchema = exports.batchScrapeActionOutputSchema = exports.cancelBatchScrapeActionOutputSchema = exports.cancelCrawlActionOutputSchema = exports.getBatchScrapeErrorsActionOutputSchema = exports.getCrawlErrorsActionOutputSchema = exports.getBatchScrapeResultsActionOutputSchema = exports.getCrawlResultsActionOutputSchema = exports.crawlWebsiteActionOutputSchema = exports.scrapeUrlActionOutputSchema = void 0;
const scrapeResultFields = [
    { key: 'markdown', label: 'Markdown' },
    { key: 'html', label: 'HTML', format: 'html' },
    { key: 'rawHtml', label: 'Raw HTML', format: 'html' },
    { key: 'links', label: 'Links' },
    { key: 'summary', label: 'Summary' },
    {
        key: 'screenshot',
        label: 'Screenshot',
        children: [
            { key: 'fileName', label: 'File Name' },
            { key: 'fileUrl', label: 'File URL', format: 'url' },
        ],
    },
    {
        key: 'metadata',
        label: 'Metadata',
        children: [
            { key: 'title', label: 'Title' },
            { key: 'language', label: 'Language' },
            { key: 'sourceURL', label: 'Source URL', format: 'url' },
            { key: 'url', label: 'Final URL', format: 'url' },
            { key: 'statusCode', label: 'Status Code', format: 'number' },
            { key: 'favicon', label: 'Favicon', format: 'image' },
            { key: 'creditsUsed', label: 'Credits Used', format: 'number' },
        ],
    },
];
exports.scrapeUrlActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'data', label: 'Data', children: scrapeResultFields },
    ],
};
const jobResultFields = [
    { key: 'success', label: 'Success', format: 'boolean' },
    { key: 'status', label: 'Status' },
    { key: 'completed', label: 'Completed', format: 'number' },
    { key: 'total', label: 'Total', format: 'number' },
    { key: 'creditsUsed', label: 'Credits Used', format: 'number' },
    { key: 'expiresAt', label: 'Expires At', format: 'datetime' },
    { key: 'next', label: 'Next Page URL', format: 'url' },
    { key: 'data', label: 'Pages', listItems: scrapeResultFields },
];
exports.crawlWebsiteActionOutputSchema = {
    fields: jobResultFields,
};
exports.getCrawlResultsActionOutputSchema = {
    fields: jobResultFields,
};
exports.getBatchScrapeResultsActionOutputSchema = {
    fields: [
        ...jobResultFields,
        { key: 'createdAt', label: 'Created At', format: 'datetime' },
        { key: 'completedAt', label: 'Completed At', format: 'datetime' },
        { key: 'duration', label: 'Duration (ms)', format: 'number' },
    ],
};
const jobErrorFields = [
    {
        key: 'errors',
        label: 'Errors',
        labelKey: 'url',
        listItems: [
            { key: 'id', label: 'ID' },
            { key: 'url', label: 'URL', format: 'url' },
            { key: 'code', label: 'Error Code' },
            { key: 'error', label: 'Error Message' },
            { key: 'timestamp', label: 'Timestamp', format: 'datetime' },
        ],
    },
    { key: 'robotsBlocked', label: 'Robots-Blocked URLs' },
];
exports.getCrawlErrorsActionOutputSchema = {
    fields: jobErrorFields,
};
exports.getBatchScrapeErrorsActionOutputSchema = {
    fields: jobErrorFields,
};
exports.cancelCrawlActionOutputSchema = {
    fields: [{ key: 'status', label: 'Status' }],
};
exports.cancelBatchScrapeActionOutputSchema = exports.cancelCrawlActionOutputSchema;
exports.batchScrapeActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'id', label: 'Job ID' },
        { key: 'url', label: 'Status URL', format: 'url' },
        { key: 'invalidURLs', label: 'Invalid URLs' },
    ],
};
exports.mapWebsiteActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'links', label: 'Links' },
    ],
};
exports.searchWebActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        {
            key: 'data',
            label: 'Data',
            children: [
                {
                    key: 'web',
                    label: 'Web Results',
                    labelKey: 'title',
                    listItems: [
                        { key: 'url', label: 'URL', format: 'url' },
                        { key: 'title', label: 'Title' },
                        { key: 'description', label: 'Description' },
                        { key: 'position', label: 'Position', format: 'number' },
                    ],
                },
            ],
        },
        { key: 'creditsUsed', label: 'Credits Used', format: 'number' },
        { key: 'id', label: 'Search ID' },
    ],
};
exports.listActiveCrawlsActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        {
            key: 'crawls',
            label: 'Crawls',
            labelKey: 'url',
            listItems: [
                { key: 'id', label: 'Crawl ID' },
                { key: 'teamId', label: 'Team ID' },
                { key: 'url', label: 'URL', format: 'url' },
                { key: 'created_at', label: 'Created At', format: 'datetime' },
            ],
        },
    ],
};
exports.extractDataActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'data', label: 'Data' },
        { key: 'status', label: 'Status' },
        { key: 'expiresAt', label: 'Expires At', format: 'datetime' },
        { key: 'tokensUsed', label: 'Tokens Used', format: 'number' },
        { key: 'creditsUsed', label: 'Credits Used', format: 'number' },
        { key: 'warnings', label: 'Warnings' },
    ],
};
exports.startAgentActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'id', label: 'Agent Job ID' },
    ],
};
exports.getAgentStatusActionOutputSchema = {
    fields: [
        { key: 'success', label: 'Success', format: 'boolean' },
        { key: 'status', label: 'Status' },
        { key: 'data', label: 'Result' },
        { key: 'model', label: 'Model' },
        { key: 'expiresAt', label: 'Expires At', format: 'datetime' },
        { key: 'creditsUsed', label: 'Credits Used', format: 'number' },
    ],
};
//# sourceMappingURL=output-schemas.js.map