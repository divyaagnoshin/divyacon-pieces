import { HttpMethod } from "@agnocon/pieces-common";
import { AppConnectionValueForAuthProperty } from "@agnocon/pieces-framework";
import { foreplayCoAuth } from "..";
export interface ForeplayCoApiCallProps {
    apiKey: AppConnectionValueForAuthProperty<typeof foreplayCoAuth>;
    method: HttpMethod;
    resourceUri: string;
    queryParams?: Record<string, string>;
    body?: any;
}
export declare function foreplayCoApiCall({ apiKey, method, resourceUri, queryParams, body, }: ForeplayCoApiCallProps): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
//# sourceMappingURL=common.d.ts.map