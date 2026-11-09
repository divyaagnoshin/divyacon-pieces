import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const BASE_URL = "https://api.copper.com/developer_api";
export declare const CopperAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const API_ENDPOINTS: {
    USERS: string;
    WEBHOOKS: string;
    PEOPLE: string;
    LEADS: string;
    COMPANIES: string;
    OPPORTUNITIES: string;
    TASKS: string;
    PIPELINES: string;
    PROJECTS: string;
};
export type CopperAuthType = AppConnectionValueForAuthProperty<typeof CopperAuth>;
export declare const isNonEmptyStr: (v: any) => boolean;
export declare const toUnix: (iso?: string | null) => number | undefined;
export type CopperActivity = {
    id: number;
    name?: string;
    details?: string;
    assignee_id?: number;
    custom_activity_type_id?: number;
    parent?: {
        type: 'person' | 'company' | 'lead' | 'opportunity' | 'project';
        id: number;
    };
    activity_date?: number;
    date_created: number;
    date_modified?: number;
    tags?: string[];
};
//# sourceMappingURL=constants.d.ts.map