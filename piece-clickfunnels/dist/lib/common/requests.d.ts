import { CLICKFUNNELS_APIKEY_AUTH } from './constants';
export declare const clickfunnelsApiService: {
    fetchCurrentlyLoggedInUser: (auth: CLICKFUNNELS_APIKEY_AUTH) => Promise<any>;
    fetchTeams: (auth: CLICKFUNNELS_APIKEY_AUTH) => Promise<any>;
    fetchTeam: (auth: CLICKFUNNELS_APIKEY_AUTH, teamId: string) => Promise<any>;
    fetchWorkspaces: (auth: CLICKFUNNELS_APIKEY_AUTH, teamId: string) => Promise<any>;
    fetchContacts: (auth: CLICKFUNNELS_APIKEY_AUTH, workspaceId: string) => Promise<any>;
    fetchContactByEmailSearch: (auth: CLICKFUNNELS_APIKEY_AUTH, workspaceId: string, filterQuery: string) => Promise<any>;
    upsertContact: (auth: CLICKFUNNELS_APIKEY_AUTH, workspaceId: string, payload: any) => Promise<any>;
    fetchTags: (auth: CLICKFUNNELS_APIKEY_AUTH, workspaceId: string) => Promise<any>;
    fetchCourses: (auth: CLICKFUNNELS_APIKEY_AUTH, workspaceId: string) => Promise<any>;
    createCourseEnrollment: (auth: CLICKFUNNELS_APIKEY_AUTH, courseId: string, payload: any) => Promise<any>;
    fetchAppliedTags: (auth: CLICKFUNNELS_APIKEY_AUTH, contactId: string) => Promise<any>;
    removeAppliedTags: (auth: CLICKFUNNELS_APIKEY_AUTH, tagId: string) => Promise<any>;
    fetchPipelines: (auth: CLICKFUNNELS_APIKEY_AUTH, workspaceId: string) => Promise<any>;
    fetchPipelineStages: (auth: CLICKFUNNELS_APIKEY_AUTH, pipelineId: string) => Promise<any>;
    createOpportunity: (auth: CLICKFUNNELS_APIKEY_AUTH, workspaceId: string, payload: any) => Promise<any>;
    createAppliedTag: (auth: CLICKFUNNELS_APIKEY_AUTH, contactId: string, payload: any) => Promise<any>;
    createWebhook: (auth: CLICKFUNNELS_APIKEY_AUTH, workspaceId: string, payload: any) => Promise<any>;
    deleteWebhook: (auth: CLICKFUNNELS_APIKEY_AUTH, webhookId: string) => Promise<any>;
};
//# sourceMappingURL=requests.d.ts.map