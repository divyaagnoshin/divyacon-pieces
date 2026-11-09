import { HttpMethod, QueryParams } from "@agnocon/pieces-common";
import { sapAribaAuth } from "../auth";
import { AppConnectionValueForAuthProperty } from "@agnocon/pieces-framework";
export type SapAribaAuth = AppConnectionValueForAuthProperty<typeof sapAribaAuth>;
export declare const sapAribaCommon: {
    getAccessToken(auth: SapAribaAuth): Promise<string | null>;
    makeRequest<T>(auth: SapAribaAuth, method: HttpMethod, endpoint: string, queryParams?: QueryParams, body?: unknown, additionalHeaders?: Record<string, string>): Promise<T>;
};
//# sourceMappingURL=index.d.ts.map