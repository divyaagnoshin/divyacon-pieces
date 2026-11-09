import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const WEEKDONE_BASE_URL = "https://api.weekdone.com/1";
export type WeekdoneApiCallParams = {
    auth: OAuth2PropertyValue;
    method: HttpMethod;
    path: string;
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
};
export declare function weekdoneApiCall<T extends HttpMessageBody>({ auth, method, path, query, body, }: WeekdoneApiCallParams): Promise<T>;
//# sourceMappingURL=client.d.ts.map