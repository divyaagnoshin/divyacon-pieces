import { Store } from '@agnocon/pieces-framework';
import { HttpMethod } from '@agnocon/pieces-common';
export declare function callGraphApi<T>(accessToken: string, request: {
    method: HttpMethod;
    url: string;
    body?: object;
    query?: Record<string, string>;
    headers?: Record<string, string>;
}): Promise<T>;
/**
 * Flattens nested objects and converts arrays to comma-separated strings (table-ready output).
 */
export declare function flattenObject(obj: Record<string, unknown>, prefix?: string): Record<string, unknown>;
export declare const userDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const groupDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/** User and group options for "member" or "resource" dropdowns. */
export declare function getUsersAndGroupsForDropdown(accessToken: string): Promise<{
    label: string;
    value: string;
}[]>;
export declare const directoryObjectDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
/** Options for resource dropdown when resource type is users or groups (reset-custom-attributes). */
export declare function getResourceOptionsForType(accessToken: string, resourceType: string): Promise<{
    label: string;
    value: string;
}[]>;
export declare function flattenUser(obj: Record<string, unknown>): Record<string, unknown>;
export declare function flattenGroup(obj: Record<string, unknown>): Record<string, unknown>;
/**
 * Fetches incremental changes from a Microsoft Graph delta endpoint.
 *
 * Microsoft Graph change notifications (webhooks) cannot be used here because Graph
 * requires the notification URL to respond 200 OK to a synchronous validation request
 * during `POST /subscriptions`. In Activepieces, `onEnable` runs *before* the flow's
 * status is saved as ENABLED, so the webhook endpoint returns 404 for the validation
 * probe and subscription creation fails. Delta queries avoid this entirely.
 *
 * On the first call (no stored deltaLink) this seeds using `$deltaToken=latest`, which
 * skips the initial full enumeration and returns a deltaLink representing "right now",
 * so future polls only surface changes after the trigger was enabled.
 *
 * Docs: https://learn.microsoft.com/en-us/graph/delta-query-overview
 */
export declare function fetchGraphDeltaChanges<T extends {
    '@removed'?: unknown;
}>(params: {
    accessToken: string;
    store: Store;
    storeKey: string;
    deltaPath: string;
    select?: string;
    shouldInclude?: (item: T) => boolean;
}): Promise<T[]>;
//# sourceMappingURL=common.d.ts.map