"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTypeOptions = exports.emailStatusOptions = exports.subscriberOrderingOptions = exports.subscriberSourceOptions = exports.subscriberTypeOptions = void 0;
exports.subscriberTypeOptions = [
    { label: 'Regular', value: 'regular' },
    { label: 'Premium', value: 'premium' },
    { label: 'Unactivated', value: 'unactivated' },
    { label: 'Paused', value: 'paused' },
    { label: 'Trialed', value: 'trialed' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Churning', value: 'churning' },
    { label: 'Churned', value: 'churned' },
    { label: 'Unsubscribed', value: 'unsubscribed' },
    { label: 'Undeliverable', value: 'undeliverable' },
    { label: 'Blocked', value: 'blocked' },
    { label: 'Complained', value: 'complained' },
    { label: 'Gifted', value: 'gifted' },
    { label: 'Past Due', value: 'past_due' },
    { label: 'Removed', value: 'removed' },
    { label: 'Unpaid', value: 'unpaid' },
];
exports.subscriberSourceOptions = [
    { label: 'Admin', value: 'admin' },
    { label: 'API', value: 'api' },
    { label: 'Carrd', value: 'carrd' },
    { label: 'Comment', value: 'comment' },
    { label: 'Embedded form', value: 'embedded_form' },
    { label: 'Hosted form', value: 'form' },
    { label: 'Import', value: 'import' },
    { label: 'Memberful', value: 'memberful' },
    { label: 'Organic', value: 'organic' },
    { label: 'Patreon', value: 'patreon' },
    { label: 'Stripe', value: 'stripe' },
    { label: 'User portal', value: 'user' },
    { label: 'Zapier', value: 'zapier' },
];
exports.subscriberOrderingOptions = [
    { label: 'Newest first', value: '-creation_date' },
    { label: 'Oldest first', value: 'creation_date' },
    { label: 'Email address (A-Z)', value: 'email_address' },
    { label: 'Email address (Z-A)', value: '-email_address' },
    { label: 'Last opened (recent first)', value: '-last_open_date' },
    { label: 'Last opened (oldest first)', value: 'last_open_date' },
];
exports.emailStatusOptions = [
    { label: 'Send immediately (about_to_send)', value: 'about_to_send' },
    { label: 'Draft', value: 'draft' },
    { label: 'Scheduled', value: 'scheduled' },
];
exports.emailTypeOptions = [
    { label: 'Public', value: 'public' },
    { label: 'Private', value: 'private' },
    { label: 'Premium', value: 'premium' },
    { label: 'Free', value: 'free' },
    { label: 'Churned', value: 'churned' },
    { label: 'Archival', value: 'archival' },
];
//# sourceMappingURL=options.js.map