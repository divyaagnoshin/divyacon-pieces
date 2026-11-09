import { SimplybookAuth } from './auth';
export type WebhookNotificationType = 'create' | 'cancel' | 'new_client' | 'change' | 'create_invoice';
/**
 * Subscribe to webhook notifications
 * @param auth - SimplybookAuth object
 * @param url - Webhook URL to receive notifications
 * @param notificationType - Type of notification to subscribe to
 * @returns Boolean indicating success
 */
export declare function subscribeWebhook(auth: SimplybookAuth, url: string, notificationType: WebhookNotificationType): Promise<boolean>;
/**
 * Get last notification update datetime
 * @param auth - SimplybookAuth object
 * @param type - Notification type
 * @returns Last update datetime string
 */
export declare function getLastNotificationUpdate(auth: SimplybookAuth, type: WebhookNotificationType): Promise<string>;
//# sourceMappingURL=webhooks.d.ts.map