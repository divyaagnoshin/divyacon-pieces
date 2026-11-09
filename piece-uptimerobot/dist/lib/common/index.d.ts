export declare const uptimeRobotCommon: {
    apiCall: typeof callApi;
    fetchAllMonitors: typeof fetchAllMonitors;
    fetchFlatMonitorById: typeof fetchFlatMonitorById;
    flattenMonitor: typeof flattenMonitor;
    buildMonitorOptions: typeof buildMonitorOptions;
    monitorDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    monitorDropdownOptional: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    monitorMultiSelect: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
declare function callApi<T extends UptimeRobotBaseResponse>({ apiKey, endpoint, body, }: {
    apiKey: string;
    endpoint: string;
    body?: Record<string, unknown>;
}): Promise<T>;
declare function fetchAllMonitors({ apiKey, additionalBody, shouldStop, }: {
    apiKey: string;
    additionalBody?: Record<string, unknown>;
    shouldStop?: (all: UptimeRobotMonitor[]) => boolean;
}): Promise<UptimeRobotMonitor[]>;
declare function flattenMonitor({ monitor }: {
    monitor: UptimeRobotMonitor;
}): FlatMonitor;
declare function fetchFlatMonitorById({ apiKey, id, }: {
    apiKey: string;
    id: number | string;
}): Promise<FlatMonitor | null>;
declare function buildMonitorOptions({ auth, searchValue, }: {
    auth: {
        secret_text: string;
    } | undefined;
    searchValue?: string;
}): Promise<{
    disabled: boolean;
    options: {
        label: string;
        value: string;
    }[];
    placeholder?: string;
}>;
export interface UptimeRobotApiError {
    type: string;
    message: string;
}
export interface UptimeRobotBaseResponse {
    stat: 'ok' | 'fail';
    error?: UptimeRobotApiError;
}
export interface UptimeRobotLog {
    type: number;
    datetime: number;
    duration: number;
    reason?: {
        code: number;
        detail: string;
    };
}
export interface UptimeRobotMonitor {
    id: number;
    friendly_name: string;
    url: string;
    type: number;
    status: number;
    interval: number;
    custom_uptime_ratio?: string;
    average_response_time?: string;
    logs?: UptimeRobotLog[];
}
export interface UptimeRobotMonitorsResponse extends UptimeRobotBaseResponse {
    pagination: {
        offset: number;
        limit: number;
        total: number;
    };
    monitors: UptimeRobotMonitor[];
}
export interface UptimeRobotNewMonitorResponse extends UptimeRobotBaseResponse {
    monitor: {
        id: number;
        status: number;
    };
}
export interface UptimeRobotEditMonitorResponse extends UptimeRobotBaseResponse {
    monitor: {
        id: number;
    };
}
export interface UptimeRobotDeleteMonitorResponse extends UptimeRobotBaseResponse {
    monitor: {
        id: number;
    };
}
export interface FlatMonitor {
    id: string;
    friendly_name: string;
    url: string;
    type: string;
    status: string;
    interval_seconds: number;
    uptime_ratio_30d: string | null;
    average_response_time_ms: number | null;
}
export {};
//# sourceMappingURL=index.d.ts.map