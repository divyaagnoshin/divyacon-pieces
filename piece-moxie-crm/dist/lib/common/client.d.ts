import { HttpMethod, HttpMessageBody, HttpResponse, QueryParams } from '@agnocon/pieces-common';
import { ContactCreateRequest, ClientCreateRequest, ClientListResponse, TaskCreateRequest, ProjectCreateRequest, ProjectSearchResponse, ProjectTaskStageListResponse } from './models';
export declare class MoxieCRMClient {
    private baseUrl;
    private apiKey;
    constructor(baseUrl: string, apiKey: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, body?: any | undefined, query?: QueryParams): Promise<HttpResponse<T>>;
    createContact(request: ContactCreateRequest): Promise<unknown>;
    createClient(request: ClientCreateRequest): Promise<unknown>;
    listClients(): Promise<ClientListResponse[]>;
    listInvoiceTemplates(): Promise<string[]>;
    createProject(request: ProjectCreateRequest): Promise<unknown>;
    createTask(request: TaskCreateRequest): Promise<unknown>;
    searchProjects(clientName: string): Promise<ProjectSearchResponse[]>;
    listProjectTaskStages(): Promise<ProjectTaskStageListResponse[]>;
}
//# sourceMappingURL=client.d.ts.map