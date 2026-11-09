export declare const biginApiService: {
    createWebhook: (access_token: string, payload: any, api_domain: string) => Promise<any>;
    deleteWebhook: (access_token: string, api_domain: string, channel_id: string) => Promise<any>;
    fetchUsers: (access_token: string, api_domain: string, params?: {
        type?: string;
        page?: number;
        per_page?: number;
    }) => Promise<any>;
    createCompany: (access_token: string, api_domain: string, body: any) => Promise<any>;
    updateCompany: (access_token: string, api_domain: string, body: any) => Promise<any>;
    fetchCompanies: (access_token: string, api_domain: string) => Promise<any>;
    createContact: (access_token: string, api_domain: string, body: any) => Promise<any>;
    updateContact: (access_token: string, api_domain: string, body: any) => Promise<any>;
    fetchTags: (access_token: string, api_domain: string, module: string) => Promise<any>;
    fetchContacts: (access_token: string, api_domain: string) => Promise<any>;
    fetchPipelinesRecords: (access_token: string, api_domain: string) => Promise<any>;
    createPipelineRecord: (access_token: string, api_domain: string, body: any) => Promise<any>;
    updatePipelineRecord: (access_token: string, api_domain: string, body: any) => Promise<any>;
    fetchProducts: (access_token: string, api_domain: string) => Promise<any>;
    fetchTasks: (access_token: string, api_domain: string) => Promise<any>;
    createCall: (access_token: string, api_domain: string, body: any) => Promise<any>;
    createEvent: (access_token: string, api_domain: string, body: any) => Promise<any>;
    fetchEvents: (access_token: string, api_domain: string) => Promise<any>;
    updateEvent: (access_token: string, api_domain: string, body: any) => Promise<any>;
    createTask: (access_token: string, api_domain: string, body: any) => Promise<any>;
    updateTask: (access_token: string, api_domain: string, body: any) => Promise<any>;
    fetchModules: (access_token: string, api_domain: string) => Promise<any>;
    fetchLayouts: (access_token: string, api_domain: string, module_name: string) => Promise<any>;
    fetchModuleFields: (access_token: string, api_domain: string, module_name: string) => Promise<any>;
    searchRecords: (access_token: string, api_domain: string, module_name: string, query: {
        key: string;
        value: string;
    }) => Promise<any>;
};
//# sourceMappingURL=request.d.ts.map