export declare const CLICKFUNNELS_BASE_URL: (subdomain: string) => string;
export declare const API_ENDPOINTS: {
    ME: string;
    TEAMS: string;
    WORKSPACES: string;
    PIPELINES: string;
    CONTACTS: string;
    COURSES: string;
    TAGS: string;
};
export type CLICKFUNNELS_APIKEY_AUTH = {
    subdomain: string;
    apiKey: string;
};
export declare const clickfunnelsAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    subdomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
//# sourceMappingURL=constants.d.ts.map