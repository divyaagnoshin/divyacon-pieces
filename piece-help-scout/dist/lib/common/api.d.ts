import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.helpscout.net/v2";
export declare function helpScoutApiRequest(params: {
    method: HttpMethod;
    url: string;
    auth: any;
    body?: any;
    queryParams?: Record<string, any>;
}): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare function verifyWebhookSignature(webhookSecret?: string, webhookSignatureHeader?: string, webhookRawBody?: any): boolean;
//# sourceMappingURL=api.d.ts.map