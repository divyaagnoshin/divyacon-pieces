import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { wooAuth } from '../auth';
export declare const wooCommon: {
    createWebhook(name: string, webhookUrl: string, topic: string, auth: PiecePropValueSchema<typeof wooAuth>): Promise<import("@agnocon/pieces-common").HttpResponse<WebhookInformation>>;
    deleteWebhook(webhookId: number, auth: PiecePropValueSchema<typeof wooAuth>): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
export interface WebhookInformation {
    id: number;
    name: string;
    status: string;
    topic: string;
    resource: string;
    event: string;
    hooks: string[];
    delivery_url: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
}
//# sourceMappingURL=index.d.ts.map