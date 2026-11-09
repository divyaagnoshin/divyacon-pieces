import { HttpMethod } from '@agnocon/pieces-common';
import { KlaviyoAuthValue } from './auth';
export declare function fetchProfilesByIds(auth: KlaviyoAuthValue, ids: string[]): Promise<Map<string, Record<string, unknown>>>;
export declare function normalizeProfileIds(value: unknown): string[];
export declare const BASE_URL = "https://a.klaviyo.com/api";
export declare function makeRequest(auth: KlaviyoAuthValue, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map