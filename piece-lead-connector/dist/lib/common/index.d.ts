import { OAuth2PropertyValue } from '@agnocon/pieces-framework';
export declare const baseUrl = "https://services.leadconnectorhq.com";
export declare const leadConnectorHeaders: {
    Version: string;
};
export declare function getCampaigns(auth: OAuth2PropertyValue): Promise<any>;
export declare function getWorkflows(auth: OAuth2PropertyValue): Promise<any>;
export declare function getTimezones(auth: OAuth2PropertyValue): Promise<string[]>;
export declare function getTags(auth: OAuth2PropertyValue): Promise<any[]>;
export declare function addContact(auth: OAuth2PropertyValue, contact: LeadConnectorContactDto): Promise<any>;
export declare function updateContact(auth: string, id: string, data: LeadConnectorContactDto): Promise<any>;
export declare function getCountries(): Promise<Country[]>;
export declare function getContacts(auth: OAuth2PropertyValue, filters?: {
    startAfterId?: string;
    sortOrder?: 'asc' | 'desc';
    sortBy?: 'date_added' | 'date_updated';
    query?: string;
}): Promise<LeadConnectorContact[]>;
export declare function getForms(auth: OAuth2PropertyValue): Promise<LeadConnectorForm[]>;
export declare function getFormSubmissions(auth: OAuth2PropertyValue, formId: string): Promise<any[]>;
export declare function addContactToCampaign(auth: string, contact: string, campaign: string): Promise<any>;
export declare function addContactToWorkflow(auth: string, contact: string, workflow: string): Promise<any>;
export declare function addNoteToContact(auth: string, contact: string, data: {
    body: string;
    userId: string;
}): Promise<any>;
export declare function getPipelines(auth: OAuth2PropertyValue): Promise<any[]>;
export declare function getPipeline(auth: OAuth2PropertyValue, pipelineId: string): Promise<any>;
export declare function getOpportunities(auth: OAuth2PropertyValue, pipeline: string, filters?: {
    startAfterId?: string;
}): Promise<any>;
export declare function getOpportunity(auth: string, pipeline: string, opportunity: string): Promise<any>;
export declare function createOpportunity(auth: OAuth2PropertyValue, data: LeadConnectorOpportunityDto): Promise<any>;
export declare function updateOpportunity(auth: string, opportunity: string, data: LeadConnectorOpportunityDto): Promise<any>;
export declare function getUsers(auth: OAuth2PropertyValue): Promise<any>;
export declare function getTasks(auth: string, contact: string): Promise<any>;
export declare function getTask(auth: string, contact: string, task: string): Promise<any>;
export declare function createTask(auth: string, contact: string, task: LeadConnectorTaskDto): Promise<any>;
export declare function updateTask(auth: string, contact: string, task: string, data: Partial<LeadConnectorTaskDto>): Promise<any>;
export declare function getLocationIdFromToken(auth: OAuth2PropertyValue): {
    authClass: string;
    authClassId: string;
};
export interface LeadConnectorContact {
    id: string;
    locationId: string;
    firstName: string;
    lastName: string;
    contactName: string;
    email: string;
    phone: string;
    companyName: string;
    website: string;
    tags: string[];
    source: string;
    country: string;
    city: string;
    state: string;
    address: string;
    postalCode: string;
    timezone: string;
    dnd: boolean;
    type: string;
    customField: any[];
    dateAdded: string;
    dateUpdated: string;
}
export interface LeadConnectorContactDto {
    locationId?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    companyName?: string;
    website?: string;
    tags?: string[];
    source?: string;
    country?: string;
    city?: string;
    state?: string;
    address1?: string;
    postalCode?: string;
    timezone?: string;
}
export interface LeadConnectorForm {
    id: string;
    name: string;
}
export interface LeadConnectorTaskDto {
    title: string;
    dueDate: string;
    body?: string;
    assignedTo?: string;
    completed?: boolean;
}
export interface LeadConnectorOpportunityDto {
    name: string;
    pipelineId: string;
    pipelineStageId: string;
    locationId?: string;
    contactId?: string;
    status: LeadConnectorOpportunityStatus;
    monetaryValue?: number;
    assignedTo?: string;
}
export declare enum LeadConnectorTaskStatus {
    COMPLETED = "completed",
    INCOMPLETED = "incompleted"
}
export declare enum LeadConnectorOpportunityStatus {
    OPEN = "open",
    WON = "won",
    LOST = "lost",
    ABANDONED = "abandoned"
}
export interface Country {
    id: string;
    name: string;
    iso2Code: string;
}
export interface LeadConnectorLocation {
    id: string;
    name: string;
    phone: string;
    email: string;
    country: string;
    timezone: string;
}
//# sourceMappingURL=index.d.ts.map