import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { FlowluEntity, FlowluModule } from './constants';
import { Account, AccountCategory, AccountHonorificTitle, AccountIndustry, CreateCRMAccountAPIRequest, CreateOpportunityAPIRequest, CreateTaskAPIRequest, ListAPIResponse, Opportunity, OpportunitySource, Pipeline, PipelineStage, Task, TaskWorkflow, TaskWorkflowStage, User } from './types';
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class FlowluClient {
    private domain;
    private apiKey;
    constructor(domain: string, apiKey: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, resourceUri: string, query?: QueryParams, body?: any | undefined): Promise<T>;
    createAccount(request: CreateCRMAccountAPIRequest): Promise<unknown>;
    updateContact(id: number, request: CreateCRMAccountAPIRequest): Promise<unknown>;
    listAllAccounts(): Promise<ListAPIResponse<Account[]>>;
    listAllContacts(): Promise<ListAPIResponse<Account[]>>;
    createTask(request: CreateTaskAPIRequest): Promise<unknown>;
    updateTask(id: number, request: CreateTaskAPIRequest): Promise<unknown>;
    getTask(id: number): Promise<unknown>;
    listAllTasks(): Promise<ListAPIResponse<Task[]>>;
    createOpportunity(request: CreateOpportunityAPIRequest): Promise<unknown>;
    updateOpportunity(id: number, request: CreateOpportunityAPIRequest): Promise<unknown>;
    listAllOpportunities(): Promise<ListAPIResponse<Opportunity[]>>;
    listAllUsers(): Promise<ListAPIResponse<User[]>>;
    listAllTaskWorkflow(): Promise<ListAPIResponse<TaskWorkflow[]>>;
    listAllTaskStages(): Promise<ListAPIResponse<TaskWorkflowStage[]>>;
    listAllHonorificTitles(): Promise<ListAPIResponse<AccountHonorificTitle[]>>;
    listAllAccountCategories(): Promise<ListAPIResponse<AccountCategory[]>>;
    listAllAccountIndustries(): Promise<ListAPIResponse<AccountIndustry[]>>;
    listAllOpportunitySources(): Promise<ListAPIResponse<OpportunitySource[]>>;
    listSalesPipelines(): Promise<ListAPIResponse<Pipeline[]>>;
    listSalesPipelineStages(pipeline_id: number): Promise<ListAPIResponse<PipelineStage[]>>;
    deleteAction(moduleName: FlowluModule, entityName: FlowluEntity, id: number): Promise<unknown>;
}
//# sourceMappingURL=client.d.ts.map