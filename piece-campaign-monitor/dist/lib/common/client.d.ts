import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.createsend.com/api/v3.3";
export interface CampaignMonitorAuth {
    apiKey: string;
}
export declare function makeRequest(auth: CampaignMonitorAuth, method: HttpMethod, path: string, body?: unknown): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare function transformCustomFields(inputFields: Array<{
    Key: string;
    Value: string;
}>): Record<string, any>;
//# sourceMappingURL=client.d.ts.map