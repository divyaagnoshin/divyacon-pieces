import { QueryParams } from '@agnocon/pieces-common';
export declare const LINKUPAPI_BASE_URL = "https://api.linkupapi.com/v2";
export declare const linkupAuth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
export declare const accountIdProp: import("@agnocon/pieces-framework").ShortTextProperty<true>;
/**
 * V2 action-based endpoint: POST /v2/<category> with body { account_id, action, params }.
 * `params` is cleaned of empty/undefined values before sending.
 */
export declare function linkupAction<T = unknown>(apiKey: string, category: string, action: string, accountId: string, params?: Record<string, unknown>): Promise<T>;
/** Raw POST to a V2 path (used for endpoints that don't follow the action/params shape, e.g. /webhooks). */
export declare function linkupPost<T = unknown>(apiKey: string, path: string, body: Record<string, unknown>): Promise<T>;
export declare function linkupGet<T = unknown>(apiKey: string, path: string, queryParams?: QueryParams): Promise<T>;
export declare function linkupDelete<T = unknown>(apiKey: string, path: string): Promise<T>;
/** Drop null / undefined / empty-string values so optional props aren't sent. */
export declare function cleanParams(params: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=index.d.ts.map