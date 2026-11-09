import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
type PingResponse = {
    message: string;
};
type ProjectResponse = {
    id: number;
    name: string;
};
type ActivityResponse = {
    id: number;
    parentTitle?: string;
    name: string;
};
type TimesheetCreateRequest = {
    project: number;
    activity: number;
    begin: string;
    end?: string;
    description?: string;
};
type TimesheetResponse = {
    id: number;
    project: number;
    activity: number;
    begin: string;
    end?: string;
    description?: string;
};
export declare class KimaiClient {
    private baseUrl;
    private user;
    private apiPassword;
    constructor(baseUrl: string, user: string, apiPassword: string);
    ping(): Promise<PingResponse>;
    getProjects(): Promise<ProjectResponse[]>;
    getActivities(project?: number | undefined): Promise<ActivityResponse[]>;
    createTimesheet(createData: TimesheetCreateRequest): Promise<TimesheetResponse>;
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, body?: any | undefined): Promise<HttpResponse<T>>;
}
export {};
//# sourceMappingURL=client.d.ts.map