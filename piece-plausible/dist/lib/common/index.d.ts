import { HttpMethod } from '@agnocon/pieces-common';
export declare const plausibleCommon: {
    baseUrl: string;
};
export declare function plausibleApiCall<T>({ apiKey, method, endpoint, body, queryParams, }: {
    apiKey: string;
    method: HttpMethod;
    endpoint: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<T>;
export declare function getSites(apiKey: string): Promise<{
    domain: string;
    timezone: string;
}[]>;
export declare const siteIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare function getTeams(apiKey: string): Promise<{
    id: string;
    name: string;
    api_available: boolean;
}[]>;
export declare const teamIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare function getGoals(apiKey: string, siteId: string): Promise<{
    id: string;
    goal_type: string;
    display_name: string;
    event_name: string | null;
    page_path: string | null;
}[]>;
export declare const goalIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare function getCustomProperties(apiKey: string, siteId: string): Promise<{
    property: string;
}[]>;
export declare const customPropertyDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare function getGuests(apiKey: string, siteId: string): Promise<{
    email: string;
    role: string;
    status: string;
}[]>;
export declare const guestEmailDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
//# sourceMappingURL=index.d.ts.map