export declare const fetchUserGroups: (auth: string) => Promise<any>;
export declare const fetchContacts: (auth: string, filters?: {
    active?: boolean;
    order?: string;
}) => Promise<any>;
export declare const fetchTags: (auth: string, documentType?: string) => Promise<any>;
export declare const fetchUsers: (auth: string) => Promise<any>;
export declare const fetchCustomFields: (auth: string, documentType?: string) => Promise<any>;
export declare const fetchEventCategories: (auth: string) => Promise<any>;
export declare const fetchHouseholds: (auth: string) => Promise<any>;
export declare const fetchOpportunityStages: (auth: string) => Promise<any>;
export declare const fetchTaskCategories: (auth: string) => Promise<any>;
export declare const fetchOpportunities: (auth: string) => Promise<any>;
export declare const fetchProjects: (auth: string) => Promise<any>;
export declare const fetchWorkflowTemplates: (auth: string) => Promise<any>;
export declare const fetchTasks: (auth: string, filters?: {
    resource_id?: number;
    resource_type?: string;
    assigned_to?: number;
    completed?: boolean;
    task_type?: string;
    updated_since?: string;
    updated_before?: string;
    limit?: number;
}) => Promise<any>;
export declare const createApiHeaders: (auth: string) => {
    ACCESS_TOKEN: string;
    'Content-Type': string;
};
export declare const handleApiError: (operation: string, status: number, body?: any) => never;
//# sourceMappingURL=api-helpers.d.ts.map